import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const pages = await getCollection("pages");

  return pages
    .filter((page) => page.id !== "about.md" && page.id !== "about" && page.id !== "leaderboard.md" && page.id !== "leaderboard")
    .map((page) => ({
      params: {
        id: page.id.replace(/\.md$/, ""),
      },
      props: page,
    }));
}

export function GET({ props }) {
  const page = props;

  const body = `# ${page.data.title}

${page.body.trim()}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
