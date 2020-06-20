import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Body = styled.div`
  column-gap: 2.775vw;
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 5.55vw;

  & .gatsby-resp-image-wrapper {
    margin-bottom: 0 !important;
  }

  & * {
    grid-column: 1 / -1;
  }

  & hr {
    margin-bottom: 0;
    margin-top: 0;
  }

  & div p:last-of-type {
    margin-bottom: 0;
  }

  @media (${mediaQuery.tablet}) {
    row-gap: 2.775vw;

    & * {
      align-self: center;
      grid-column: span 1;
    }

    & div {
      grid-column: span 3;
    }

    & div p {
      width: 80%;
    }

    & blockquote {
      grid-column: span 2;
    }

    /* & p,
    & blockquote,
    & div {
      grid-column: span 2;
    } */
  }
`;

export const Styled = {
  Body,
};
