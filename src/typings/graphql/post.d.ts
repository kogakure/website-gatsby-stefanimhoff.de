import { GatsbyImageProps } from 'gatsby-image';

import { AttributionData } from '../../components/attribution';

export type PostQueryData = {
  mdx: {
    frontmatter: {
      title: string;
      description?: string;
      date: string;
      dateEn: string;
      dateDe: string;
      language?: string;
      cover?: {
        publicURL: string;
        childImageSharp: GatsbyImageProps;
      };
      og?: {
        publicURL: string;
        childImageSharp: GatsbyImageProps;
      };
      attribution: AttributionData[] | null;
    };
    fields: {
      slug: string;
      language: string;
      robots: string;
      readingTime: {
        text: string;
        words: string;
      };
    };
    body: string;
    id: string;
  };
};
