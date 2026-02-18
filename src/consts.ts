import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ethereal news",
  DESCRIPTION: "Ethereum news focused on developers.",
  NUM_CALENDAR_ITEMS_ON_HOMEPAGE: 6,
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

export const RESOURCES: Metadata = {
  TITLE: "resources",
  DESCRIPTION:
    "Ethereum resources including EF people and clients.",
};

export const EF_PEOPLE: Metadata = {
  TITLE: "EF people",
  DESCRIPTION:
    "Ethereum Foundation organization structure and people.",
};

export const ETHEREUM_RESOURCES: Metadata = {
  TITLE: "Ethereum resources",
  DESCRIPTION:
    "Ethereum resources including research forums, community and protocol repositories.",
};

export const NEWS_SOURCES: Metadata = {
  TITLE: "news sources",
  DESCRIPTION:
    "Additional Ethereum news sources including newsletters, podcasts and YouTube.",
};

export const CLIENTS: Metadata = {
  TITLE: "clients",
  DESCRIPTION:
    "Ethereum execution layer and consensus layer clients.",
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
