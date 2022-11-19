import fs from 'fs';
import path from 'path';
import * as matter from 'gray-matter';
import { marked } from 'marked';

type postObjectData = {
  context: string;
  data: {
    title: string;
    date: string;
    excerpt: string;
    cover_image: string;
  };
  isEmpty: boolean;
  path: string;
};

export type Post = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
  htmlContent: string;
};

export const getPostIds = (): string[] => {
  const filenames = fs.readdirSync(path.join(process.cwd(), 'posts'));
  if (!filenames || filenames.length === 0) {
    return [];
  }
  return filenames.map((filename) => filename.replace('.md', ''));
};

export function getSortedPosts() {
  const filenames = getPostIds();
  return filenames.map((filename) => {
    const parsedData = matter.read(
      path.join(process.cwd(), 'posts', filename + '.md')
    );
    const postItem = {
      ...parsedData.data,
      id: filename,
      htmlContent: marked.parse(parsedData.content),
    } as Post;
    return postItem;
  });
}

export const getPostDetail = (postId: string) => {
  const allPost = getSortedPosts();

  return allPost.find((post) => post.id === postId);
};
