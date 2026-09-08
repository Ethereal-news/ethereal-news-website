import { getCollection } from "astro:content";
import { toSocialHtml, socialPage } from "@lib/social";

// Unlisted, noindex paste helper: /<issue>.linkedin.html
export async function getStaticPaths() {
  const issues = (await getCollection("issues")).filter((issue) => !issue.data.draft);
  return issues.map((issue) => ({
    params: { id: issue.id.replace(/\/index$/, "") },
    props: issue,
  }));
}

export function GET({ props: issue }) {
  const fragment = toSocialHtml(issue.body, "linkedin", { description: issue.data.description });
  const html = socialPage({ title: issue.data.title, platform: "linkedin", fragment });
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex, nofollow" },
  });
}
