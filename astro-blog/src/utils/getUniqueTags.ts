import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";

interface Tag {
  tag: string;
  tagName: string;
}

const getUniqueTags = (posts: CollectionEntry<"blog">[]): Tag[] => {
  const tags: Tag[] = posts
    .flatMap(post => post.data.tags)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value: Tag, index: number, self: Tag[]) =>
        self.findIndex((tag: Tag) => tag.tag === value.tag) === index
    )
    .sort((tagA: Tag, tagB: Tag) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

export default getUniqueTags;