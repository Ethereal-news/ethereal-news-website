import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection, render } from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";

/** Newest issues that carry the full issue in <content:encoded>; older ones keep the summary only. */
const FULL_CONTENT_ISSUES = 10;

/** Root-relative src/href (optimized images under /_astro/, internal links) made absolute for feed readers. */
function absolutize(html, site) {
  return html.replace(/(\s(?:src|href)=")\/(?!\/)/g, `$1${new URL("/", site)}`);
}

export async function GET(context) {
  const issues = (await getCollection("issues")).filter((issue) => !issue.data.draft);

  const items = issues.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  const imageUrl = new URL("/etherealnews.jpg", context.site).toString();
  const rssUrl = new URL("/rss.xml", context.site).toString();

  // Render with Astro's own markdown pipeline so the feed matches the site, images included.
  const container = await AstroContainer.create();
  const content = new Map();
  for (const item of items.slice(0, FULL_CONTENT_ISSUES)) {
    const { Content } = await render(item);
    content.set(item.id, absolutize(await container.renderToString(Content), context.site));
  }

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
      media: "http://search.yahoo.com/mrss/",
    },
    customData: `<atom:link href="${rssUrl}" rel="self" type="application/rss+xml"/>
<image>
<url>${imageUrl}</url>
<title>${SITE.TITLE}</title>
<link>${context.site}</link>
</image>`,
    items: items.map((item) => {
      const itemImageUrl = new URL("/etherealnews.jpg", context.site).toString();
      return {
        title: item.data.title,
        description: item.data.description,
        pubDate: item.data.date,
        link: `/${item.id.replace(/\/index$/, "")}/`,
        content: content.get(item.id),
        customData: `<media:content url="${itemImageUrl}" type="image/jpeg">
<media:description>${SITE.TITLE}</media:description>
</media:content>`,
      };
    }),
  });
}
