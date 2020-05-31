export type NavigationItem = {
  text: string;
  url: string;
};

export type Navigation = {
  nodes: NavigationItem[];
};

export type NavigationQueryData = {
  navigationYaml: {
    navigation: Navigation[];
  };
};

export type LayoutQueryData = {
  allNavigationYaml: Navigation;
};
