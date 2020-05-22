export type Navigation = {
  text: string;
  url: string;
};

export type NavigationQueryData = {
  navigationYaml: {
    navigation: Navigation[];
  };
};
