import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const issues = (await getCollection("issues")).filter((issue) => !issue.data.draft);

  const items = issues.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  const imageUrl = new URL("/etherealnews.jpg", context.site).toString();
  const rssUrl = new URL("/rss.xml", context.site).toString();

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
        link: `/${item.id.replace(/\/index\.md$/, "").replace(/\.md$/, "")}/`,
        customData: `<media:content url="${itemImageUrl}" type="image/jpeg">
<media:description>${SITE.TITLE}</media:description>
</media:content>`,
      };
    }),
  });
}
