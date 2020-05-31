import { graphql, useStaticQuery } from 'gatsby';

import { JapaneseColorQueryData } from '../typings/graphql';

export const useJapaneseColorQuery = () => {
  const {
    allJapaneseColorYaml,
  }: JapaneseColorQueryData = useStaticQuery(graphql`
    query JapaneseColorQuery {
      allJapaneseColorYaml {
        nodes {
          id
          name
          description
          color
        }
      }
    }
  `);

  return { allJapaneseColorYaml };
};
