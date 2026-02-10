import { getCollection } from "astro:content";

function stripImages(markdown) {
  return markdown.replace(/!\[.*?\]\(.*?\)\s*/g, "");
}

export async function getStaticPaths() {
  const issues = (await getCollection("issues"))
    .filter((issue) => !issue.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return issues.map((issue) => ({
    params: {
      id: issue.id.replace(/\/index\.md$/, "").replace(/\.md$/, ""),
    },
    props: issue,
  }));
}

export function GET({ props }) {
  const issue = props;
  const date = new Date(issue.data.date).toISOString().split("T")[0];

  const body = `# ${issue.data.title}

Date: ${date}

${stripImages(issue.body).trim()}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
