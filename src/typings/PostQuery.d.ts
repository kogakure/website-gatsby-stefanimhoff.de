export interface PostQueryData {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        description: string;
        date: string;
      };
      html: string;
      id: string;
    };
  };
}
