import { slug as slugger } from "github-slugger";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: {
  data: {
    title: string;
    slug?: string;
  };
  slug?: string;
}) =>
  post.data.slug ? slugger(post.data.slug) : slugger(post.data.title);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;