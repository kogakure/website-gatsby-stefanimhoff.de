export interface PostQueryData {
  mdx: {
    frontmatter: {
      title: string;
      description?: string;
      date: string;
    };
    fields: {
      slug: string;
      readingTime: {
        text: string;
        words: string;
      };
    };
    body: string;
    id: string;
  };
}
