export type SocialMediaItem = {
  text: string;
  url: string;
};

export type SocialMedia = {
  nodes: SocialMediaItem[];
};

export type SocialMediaQueryData = {
  allSocialMediaYaml: SocialMedia;
};
