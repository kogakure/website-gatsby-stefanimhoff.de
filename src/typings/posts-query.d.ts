import { EdgeNode } from './edge-node';

export type Post = {
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
