import { getCollection } from "astro:content";
import { SITE } from "@consts";

export async function GET(context) {
  const issues = (await getCollection("issues"))
    .filter((issue) => !issue.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    );

  // Google News sitemaps should only contain articles from the last 2 days,
  // but weekly publications may not have new content that frequently.
  // Include articles from the last 30 days to ensure coverage.
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const recentIssues = issues.filter(
    (issue) => new Date(issue.data.date) >= thirtyDaysAgo,
  );

  const urls = recentIssues
    .map((issue) => {
      const slug = issue.id.replace(/\/index\.md$/, "").replace(/\.md$/, "");
      const loc = new URL(`/${slug}/`, context.site).toString();
      const pubDate = new Date(issue.data.date).toISOString();

      return `  <url>
    <loc>${loc}</loc>
    <news:news>
      <news:publication>
        <news:name>${SITE.TITLE}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${escapeXml(issue.data.title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
