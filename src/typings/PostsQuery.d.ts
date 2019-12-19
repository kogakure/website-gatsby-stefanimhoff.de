import { EdgeNode } from './EdgeNode';

interface Post {
  title: string;
  date: string;
}

export interface PostsQueryData {
  data: {
    allMdx: {
      edges: [EdgeNode];
    };
  };
}
