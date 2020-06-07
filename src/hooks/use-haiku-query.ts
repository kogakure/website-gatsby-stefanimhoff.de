import { graphql, useStaticQuery } from 'gatsby';

import { HaikuQueryData } from '../typings/graphql';

export const useHaikuQuery = () => {
  const { allHaikuYaml }: HaikuQueryData = useStaticQuery(graphql`
    query HaikuQuery {
      allHaikuYaml {
        nodes {
          id
          en
          de
        }
      }
    }
  `);

  return { allHaikuYaml };
};
