import { getEntry } from "astro:content";

export async function GET({ site }) {
  const page = await getEntry("pages", "about");
  const canonical = new URL("/about/", site).toString();

  const body = `# ${page.data.title}

> ${page.data.description}

Source: ${canonical}

${page.body.trim()}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
