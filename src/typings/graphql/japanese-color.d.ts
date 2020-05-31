export type JapaneseColorItem = {
  id: string;
  name?: string;
  description?: string;
  color: string;
};

export type JapaneseColor = {
  nodes: JapaneseColorItem[];
};

export type JapaneseColorQueryData = {
  allJapaneseColorYaml: JapaneseColor;
};
