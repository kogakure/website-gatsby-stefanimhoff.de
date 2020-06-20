export type SketchnoteEdgeNode<Type> = {
  node: {
    frontmatter: { [Property in keyof Type]: Type[Property] };
  };
};

export type SketchnotesQueryData = {
  data: {
    sketchnotes: {
      edges: [SketchnoteEdgeNode];
    };
  };
};
