import { EdgeNode } from './edge-node';

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
