export type EdgeNode<Type> = {
  node: {
    frontmatter: { [Property in keyof Type]: Type[Property] };
    excerpt?: string;
  };
};
