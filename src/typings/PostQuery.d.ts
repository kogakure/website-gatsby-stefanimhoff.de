export interface PostQueryData {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        description: string;
        date: string;
      };
      body: string;
      id: string;
    };
  };
}
