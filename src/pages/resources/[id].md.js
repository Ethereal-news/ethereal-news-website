import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const pages = await getCollection("pages");

  return pages
    .filter((page) => page.id !== "about" && page.id !== "leaderboard")
    .map((page) => ({
      params: { id: page.id },
      props: page,
    }));
}

export function GET({ props, site }) {
  const page = props;
  const canonical = new URL(`/resources/${page.id}/`, site).toString();

  const body = `# ${page.data.title}

> ${page.data.description}

Source: ${canonical}
Editor: Andrew B Coathup

${page.body.trim()}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
