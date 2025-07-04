// ABOUTME: This file creates dynamic OG images for blog posts using Satori and Resvg
// ABOUTME: It generates PNG images from HTML/CSS templates for social media sharing

import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";
import { SITE } from "@config";

export async function getStaticPaths() {
  // Only generate OG images if dynamicOgImage is enabled
  if (!SITE.dynamicOgImage) {
    return [];
  }

  const posts = await getCollection("blog").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return posts.map((post) => ({
    params: { slug: post.data.slug || slugifyStr(post.data.title) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPost(props as CollectionEntry<"blog">), {
    headers: { "Content-Type": "image/png" },
  });