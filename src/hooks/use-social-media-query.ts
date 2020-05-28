import { graphql, useStaticQuery } from 'gatsby';

import { SocialMediaQueryData } from '../typings/graphql';

export const useSocialMediaQuery = () => {
  const { allSocialMediaYaml }: SocialMediaQueryData = useStaticQuery(graphql`
    query SocialMediaQuery {
      allSocialMediaYaml {
        nodes {
          text
          url
        }
      }
    }
  `);

  return { allSocialMediaYaml };
};
