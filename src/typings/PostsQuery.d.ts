import { EdgeNode } from './EdgeNode';

type Post = {
  title: string;
  date: string;
};

export type PostsQueryData = {
  data: {
    allBlogPosts: {
      edges: [EdgeNode];
    };
  };
};
