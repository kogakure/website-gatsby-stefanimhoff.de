export type HaikuItem = {
  id: string;
  de: string;
  en: string;
};

export type Haiku = {
  nodes: HaikuItem[];
};

export type HaikuQueryData = {
  allHaikuYaml: Haiku;
};
