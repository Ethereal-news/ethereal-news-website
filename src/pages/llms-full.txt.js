import { SITE } from "@consts";
import { getCollection } from "astro:content";

function stripImages(markdown) {
  return markdown.replace(/!\[.*?\]\(.*?\)\s*/g, "");
}

export async function GET() {
  const issues = (await getCollection("issues"))
    .filter((issue) => !issue.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    );

  const issueBlocks = issues
    .map((issue) => {
      const date = new Date(issue.data.date).toISOString().split("T")[0];
      return `## ${issue.data.title}

Date: ${date}

${stripImages(issue.body).trim()}`;
    })
    .join("\n\n---\n\n");

  const body = `# ${SITE.TITLE}

> ${SITE.DESCRIPTION}

${issueBlocks}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
