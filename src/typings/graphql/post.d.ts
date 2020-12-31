import type { GatsbyImageProps } from 'gatsby-image';

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
