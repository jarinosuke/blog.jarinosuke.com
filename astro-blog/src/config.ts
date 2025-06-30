// ABOUTME: This file contains the main configuration for jarinosuke's blog site
// ABOUTME: It defines site metadata, social links, and feature toggles for the AstroPaper theme

import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.jarinosuke.com/",
  author: "jarinosuke",
  profile: "https://github.com/jarinosuke/",
  desc: "jarinosuke's personal blog about software engineering, technology, and thoughts.",
  title: "jarinosuke blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  editPost: {
    url: "https://github.com/jarinosuke/blog.jarinosuke.com/edit/main/astro-blog/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
  lang: "ja",
  timezone: "Asia/Tokyo",
};

export const LOCALE = {
  lang: "ja", // html lang code. Set this empty and default will be "en"
  langTag: ["ja-JP"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/jarinosuke",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/jarinosuke",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];