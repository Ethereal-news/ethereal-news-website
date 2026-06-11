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
      id: issue.id.replace(/\/index$/, ""),
    },
    props: issue,
  }));
}

export function GET({ props, site }) {
  const issue = props;
  const slug = issue.id.replace(/\/index$/, "");
  const date = new Date(issue.data.date).toISOString().split("T")[0];
  const canonical = new URL(`/${slug}/`, site).toString();

  const body = `# ${issue.data.title}

> ${issue.data.description}

Date: ${date}
Source: ${canonical}
Editor: Andrew B Coathup

${stripImages(issue.body).trim()}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
