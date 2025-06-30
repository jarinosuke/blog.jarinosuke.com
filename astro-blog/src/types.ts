// ABOUTME: This file contains TypeScript type definitions for the AstroPaper blog theme
// ABOUTME: It defines interfaces for site configuration, social objects, and frontmatter

export interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  editPost: {
    url?: string;
    text?: string;
    appendFilePath?: boolean;
  };
  dynamicOgImage?: boolean;
  lang?: string;
  timezone?: string;
}

export interface SocialMediaObjects {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}

export interface SocialObjects extends Array<SocialMediaObjects> {}

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";