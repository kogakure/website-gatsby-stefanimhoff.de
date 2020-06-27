export type EdgeNode<Type> = {
  node: {
    frontmatter: { [Property in keyof Type]: Type[Property] };
    excerpt?: string;
  };
};

export type HomepageJournalPost = {
  edges: [EdgeNode];
};

export type PostsQueryData = {
  homepageJournalPosts: HomepageJournalPost;
};
