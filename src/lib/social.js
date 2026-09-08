// Convert an issue's markdown body into HTML tuned for pasting into X Articles or LinkedIn articles.
//
//   x        : nested bullets kept (X editor supports indentation)
//   linkedin : top level bullets -> paragraphs (bold only for BOLD_PARENTS),
//              second level -> bullets (bold when they introduce a third level),
//              third level -> plain bullets at the same indent,
//              headings containing links -> bold paragraphs (LinkedIn headings can't hold links),
//              footer lines joined on one line
//
// Images are stripped (sponsor image is added by hand in the editor). Dividers kept on both.

// Top level list labels rendered bold on LinkedIn; every other top level parent is a plain paragraph.
export const BOLD_PARENTS = new Set([
  "ETH metrics:",
  "Application layer standards (ERCs):",
  "Ethereum improvement proposals (EIPs):",
]);

const LINK = /\[([^\]]+?)\]\((\S+?)\)/g;
const BOLD = /\*\*(.+?)\*\*/g;
const ITAL = /(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])/g;
const UNESCAPE = /\\([\\`*_{}\[\]()#+\-.!~>])/g;
const FOOTER = /^\*(Editor|Permalink|Markdown):/;

const SCHEME = /^[a-z][a-z0-9+.-]*:/i;
const SAFE_SCHEME = /^(https?|mailto):/i;

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const unescape = (s) => s.replace(UNESCAPE, "$1");

// Allow http(s), mailto and relative URLs only. Returns null for anything else
// (javascript:, data:, vbscript:, ...), which inline() renders as plain text.
// Control characters are stripped before the scheme test so "java\x00script:" can't slip past.
function safeHref(url) {
  const clean = url.replace(/[\u0000-\u0020]/g, "");
  if (SCHEME.test(clean) && !SAFE_SCHEME.test(clean)) return null;
  return clean;
}

function fmt(s) {
  return esc(s).replace(BOLD, "<strong>$1</strong>").replace(ITAL, "<em>$1</em>");
}

function inline(text) {
  text = unescape(text);
  if (text.length > 2 && text.startsWith("*") && text.endsWith("*") && !text.startsWith("**")) {
    return `<em>${inline(text.slice(1, -1))}</em>`; // whole line italic (footer lines with links)
  }
  let out = "", pos = 0;
  for (const m of text.matchAll(LINK)) {
    out += fmt(text.slice(pos, m.index));
    const url = safeHref(m[2]);
    out += url === null
      ? fmt(m[1]) // unsafe scheme: keep the text, drop the link
      : `<a href="${esc(url).replace(/"/g, "&quot;")}">${fmt(m[1])}</a>`;
    pos = m.index + m[0].length;
  }
  return out + fmt(text.slice(pos));
}

function parse(md) {
  const blocks = [];
  let items = [];
  const flush = () => { if (items.length) { blocks.push({ kind: "list", items }); items = []; } };
  for (const raw of md.replace(/\r/g, "").split("\n")) {
    const line = raw.replace(/\s+$/, "");
    const s = line.trim();
    const m = line.match(/^(\s*)[*-]\s+(.*)$/);
    if (m) {
      const indent = m[1].replace(/\t/g, "  ").length;
      items.push({ depth: Math.floor(indent / 2), text: m[2].trim() });
      continue;
    }
    flush();
    if (!s) continue;
    if (/^-{3,}$/.test(s)) blocks.push({ kind: "hr" });
    else if (s.startsWith("#")) {
      const level = s.length - s.replace(/^#+/, "").length;
      blocks.push({ kind: "heading", level, text: s.replace(/^#+/, "").trim() });
    } else if (s.startsWith(">")) blocks.push({ kind: "quote", text: s.replace(/^>\s*/, "") });
    else if (s.startsWith("![")) continue; // images
    else blocks.push({ kind: "para", text: s });
  }
  flush();
  return blocks;
}

function renderList(items, nested) {
  if (!nested) {
    const out = [];
    let ul = [];
    const close = () => { if (ul.length) { out.push(`<ul>${ul.join("")}</ul>`); ul = []; } };
    items.forEach(({ depth, text }, i) => {
      const hasChildren = i + 1 < items.length && items[i + 1].depth > depth;
      const t = inline(text);
      if (depth === 0) {
        close();
        const bold = hasChildren && BOLD_PARENTS.has(unescape(text).trim());
        out.push(bold ? `<p><strong>${t}</strong></p>` : `<p>${t}</p>`);
      } else {
        const bold = depth === 1 && hasChildren;
        ul.push(bold ? `<li><strong>${t}</strong></li>` : `<li>${t}</li>`);
      }
    });
    close();
    return out.join("\n");
  }
  const out = [];
  let depth = -1;
  for (const { depth: d, text } of items) {
    while (depth < d) { out.push("<ul>"); depth++; }
    while (depth > d) { out.push("</ul></li>"); depth--; }
    if (out.length && out[out.length - 1] !== "<ul>") out.push("</li>");
    out.push(`<li>${inline(text)}`);
  }
  while (depth >= 0) { out.push("</li></ul>"); depth--; }
  return out.join("");
}

/**
 * @param {string} md  issue body markdown (frontmatter already removed, as in collection entry.body)
 * @param {"x"|"linkedin"} platform
 * @param {{description?: string}} [opts]  description is rendered as the italic lead line
 * @returns {string} HTML fragment (no title; the title goes in the editor's title field)
 */
export function toSocialHtml(md, platform, opts = {}) {
  const body = [];
  const description = opts.description?.trim();
  for (const b of parse(md)) {
    if (b.kind === "heading") {
      if (b.level === 1) continue;
      const tag = b.level <= 3 ? "h2" : "h3";
      const hasLink = LINK.test(b.text); LINK.lastIndex = 0;
      if (platform === "linkedin" && hasLink) body.push(`<p><strong>${inline(b.text)}</strong></p>`);
      else body.push(`<${tag}>${inline(b.text)}</${tag}>`);
    } else if (b.kind === "quote") {
      body.push(`<p><em>${inline(b.text)}</em></p>`);
    } else if (b.kind === "para") {
      if (description && b.text.replace(/^\*|\*$/g, "") === description) {
        continue; // lead line already emitted from frontmatter below
      }
      if (platform === "linkedin" && FOOTER.test(b.text)) {
        // LinkedIn drops links whose text starts with "@" (treated as a mention), so strip it
        b.text = b.text.replace(/\[@abcoathup\]/, "[abcoathup]");
        const last = body[body.length - 1];
        if (last && last.startsWith("<p class=\"footer\">")) body[body.length - 1] = last.slice(0, -4) + " " + inline(b.text) + "</p>";
        else body.push(`<p class="footer">${inline(b.text)}</p>`);
        continue;
      }
      body.push(`<p>${inline(b.text)}</p>`);
    } else if (b.kind === "hr") {
      body.push("<hr>");
    } else if (b.kind === "list") {
      body.push(renderList(b.items, platform === "x"));
    }
  }
  const lead = description ? `<p><em>${esc(description)}</em></p>\n` : "";
  return lead + body.join("\n");
}

/** Full standalone page with a one click "copy as rich text" button. Not indexed, not linked. */
export function socialPage({ title, platform, fragment }) {
  const label = platform === "x" ? "X Article" : "LinkedIn article";
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<title>${esc(title)} — ${label} paste</title>
<style>
  body{font-family:system-ui,sans-serif;max-width:720px;margin:2rem auto;padding:0 1rem;line-height:1.5}
  .bar{position:sticky;top:0;background:#fff;padding:.75rem 0;border-bottom:1px solid #ddd;display:flex;gap:.75rem;align-items:center}
  button{font:inherit;padding:.4rem .9rem;border:1px solid #333;border-radius:.4rem;background:#fff;cursor:pointer}
  .bar span{color:#666;font-size:.9rem}
</style></head><body>
<div class="bar"><button id="copy">Copy for ${label}</button><span>Paste into the article body; type the title into the title field. Add the sponsor image by hand.</span></div>
<p style="font-size:.9rem;color:#666">Title: <strong>${esc(title)}</strong></p>
<article id="content">
${fragment}
</article>
<script>
document.getElementById("copy").addEventListener("click", async () => {
  const el = document.getElementById("content");
  const html = el.innerHTML, text = el.innerText;
  const btn = document.getElementById("copy");
  try {
    await navigator.clipboard.write([new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([text], { type: "text/plain" }),
    })]);
    btn.textContent = "Copied";
  } catch (e) {
    const r = document.createRange(); r.selectNodeContents(el);
    const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
    document.execCommand("copy"); sel.removeAllRanges();
    btn.textContent = "Copied (fallback)";
  }
  setTimeout(() => (btn.textContent = "Copy for ${label}"), 2000);
});
</script>
</body></html>`;
}
