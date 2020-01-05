interface Site {
  siteMetadata: {
    author: string;
    description: string;
    description: string;
    feedUrl: string;
    image: string;
    language: string;
    siteUrl: string;
    title: string;
    title: string;
    titleTemplate: string;
    twitterUsername: string;
  };
}

export interface SiteMetadataQueryData {
  site: Site;
}
