import { graphql, useStaticQuery } from 'gatsby';

import { CvQueryData } from '../typings/graphql';

export const useCvQuery = () => {
  const { allCvYaml }: CvQueryData = useStaticQuery(graphql`
    query CVQuery {
      allCvYaml {
        nodes {
          personal {
            name
            tagline
          }
          summary {
            headline
            text
          }
          experience {
            headline
            items {
              company
              duration
              location
              tasks
              title
              url
            }
          }
          education {
            headline
            items {
              degree
              duration
              location
              school
              url
            }
          }
          skills {
            headline
            items {
              headline
              tags
            }
          }
          languages {
            headline
            items {
              language
              level
            }
          }
          awards {
            headline
            items
          }
          interests {
            headline
            items
          }
        }
      }
    }
  `);

  return { allCvYaml };
};
