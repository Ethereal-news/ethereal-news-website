import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const issues = (await getCollection("issues"))
    .filter((issue) => !issue.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    );

  const issueLinks = issues
    .map((issue) => {
      const slug = issue.id.replace(/\/index\.md$/, "").replace(/\.md$/, "");
      const url = new URL(`/${slug}/`, context.site);
      return `- [${issue.data.title}](${url}): ${issue.data.description}`;
    })
    .join("\n");

  const body = `# ${SITE.TITLE}

> ${SITE.DESCRIPTION}

Ethereal news is a weekly newsletter covering the latest Ethereum news focused on developers. It covers ecosystem updates, enterprise developments, applications, developer tools and resources, security, and research.

## Issues

${issueLinks}

## Optional

- [Full content](${new URL("/llms-full.txt", context.site)}): All issues in a single file
- [RSS feed](${new URL("/rss.xml", context.site)}): Subscribe for updates
- [Calendar](${new URL("/calendar/", context.site)}): Ethereum conferences, hackathons, upgrades and grant deadlines
- [About](${new URL("/about/", context.site)}): About Ethereal news
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
