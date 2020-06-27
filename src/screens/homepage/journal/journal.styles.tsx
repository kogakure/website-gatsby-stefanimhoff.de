import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { LocalizedDate } from '../../../components/localized-date';
import { fontSize, mediaQuery, shadow, space } from '../../../layout/tokens';

const Journal = styled.section`
  grid-column: 2 / -2;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / -3;
  }
`;

const Introduction = styled.header`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
`;

const Text = styled.div`
  grid-column: 1 / 10;
  margin-bottom: ${space[10]};
`;

const Grid = styled.div`
  display: grid;
  gap: ${space[8]};
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;

const Post = styled.article<{ bottomSpace: string; topSpace: string }>`
  /* stylelint-disable plugin/no-low-performance-animation-properties */
  align-self: auto;
  background-color: var(--colorForegroundFeather);
  border-color: var(--colorForegroundSoft);
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-top: 0;
  padding: ${space[5]};
  transition-duration: 500ms;
  transition-property: box-shadow, transform;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    box-shadow: ${shadow.subtleShade};
    transform: scale(1.03);
  }

  @media (${mediaQuery.tablet}) {
    align-self: start;
    ${({ bottomSpace }) => bottomSpace && `margin-bottom: ${bottomSpace}vw`};
    ${({ topSpace }) => topSpace && `margin-top: ${topSpace}vw`};
  }
`;

const LinkedPost = styled(Link)`
  color: var(--colorForeground);
  flex-grow: 1;
  text-decoration: none;
`;

const Date = styled(LocalizedDate)`
  display: block;
  font-size: ${fontSize[2]};
  font-variant: small-caps;
`;

const Image = styled(Img)`
  height: 10rem;
  object-fit: cover;
`;

export const Styled = {
  Date,
  Grid,
  Image,
  Introduction,
  Journal,
  LinkedPost,
  Post,
  Text,
};
