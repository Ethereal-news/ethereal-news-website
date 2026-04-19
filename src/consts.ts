import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ethereal news",
  DESCRIPTION: "Ethereum news focused on developers.",
  NUM_CALENDAR_ITEMS_ON_HOMEPAGE: 6,
};

export const HOME: Metadata = {
  TITLE: "Latest Ethereum news",
  DESCRIPTION: "Latest Ethereum news focused on developers.",
};

export const ARCHIVE: Metadata = {
  TITLE: "Archive",
  DESCRIPTION: "Archive of all Ethereal news weekly issues covering Ethereum developer ecosystem updates.",
};

export const CALENDAR: Metadata = {
  TITLE: "Ethereum events calendar",
  DESCRIPTION:
    "Calendar of Ethereum conferences, hackathons, protocol upgrades and grant deadlines.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "About Ethereal news, disclosures and resources.",
};

export const RESOURCES: Metadata = {
  TITLE: "Ethereum resources",
  DESCRIPTION:
    "Ethereum developer resources including EF people, clients and dev tooling.",
};

export const EF_PEOPLE: Metadata = {
  TITLE: "Ethereum Foundation people",
  DESCRIPTION:
    "Ethereum Foundation organization structure and people.",
};

export const ETHEREUM_RESOURCES: Metadata = {
  TITLE: "Ethereum resources",
  DESCRIPTION:
    "Ethereum resources including research forums, community and protocol repositories.",
};

export const NEWS_SOURCES: Metadata = {
  TITLE: "Ethereum news sources",
  DESCRIPTION:
    "Additional Ethereum news sources including newsletters, podcasts and YouTube.",
};

export const CLIENTS: Metadata = {
  TITLE: "Ethereum clients",
  DESCRIPTION:
    "Ethereum execution layer and consensus layer clients.",
};

export const DEV_TOOLING: Metadata = {
  TITLE: "Ethereum dev tooling",
  DESCRIPTION:
    "Ethereum developer tools including frameworks, client libraries and security tools.",
};

export const LEADERBOARD: Metadata = {
  TITLE: "Leaderboard",
  DESCRIPTION: "Top clicked Ethereum content creators ranked by reader engagement.",
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
