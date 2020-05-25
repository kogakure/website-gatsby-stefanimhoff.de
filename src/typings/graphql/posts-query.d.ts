import { EdgeNode } from './edge-node';

export type PostsQueryData = {
  data: {
    allBlogPosts: {
      edges: [EdgeNode];
    };
  };
};
