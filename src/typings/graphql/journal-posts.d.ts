export type JournalPostItem = {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
};

export type JournalPost = {
  edges: JournalPostItem[];
};

export type JournalPostsQueryData = {
  allJournalPosts: JournalPost;
};
