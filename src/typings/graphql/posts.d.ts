export type EdgeNode<Type> = {
  node: {
    frontmatter: { [Property in keyof Type]: Type[Property] };
    excerpt?: string;
  };
};

export type PostsQueryData = {
  data: {
    allBlogPosts: {
      edges: [EdgeNode];
    };
  };
};