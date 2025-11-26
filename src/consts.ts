import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ethereal news",
  DESCRIPTION: "Ethereum news focused on developers.",
  NUM_CALENDAR_ITEMS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "latest",
  DESCRIPTION: "Latest Ethereum news focused on developers.",
};

export const ARCHIVE: Metadata = {
  TITLE: "archive",
  DESCRIPTION: "Archive of Ethereal news issues.",
};

export const CALENDAR: Metadata = {
  TITLE: "calendar",
  DESCRIPTION:
    "Calendar of Ethereum focused conferences, hackathons, upgrades and grant deadlines.",
};

export const ABOUT: Metadata = {
  TITLE: "about",
  DESCRIPTION:
    "About Ethereal news, disclosures and resources.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://x.com/EtherealnewsHQ",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/Ethereal-news/ethereal-news-website",
  },
];
