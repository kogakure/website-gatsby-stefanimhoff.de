import styled from 'styled-components';

import { mediaQuery } from '../../layout/tokens';
import { Title } from '../../components/typography';
import { UnorderedList } from '../../components/unordered-list';

export const TitleAbout = styled(Title)`
  grid-column: 2 / -2;
  grid-row: 1;
  margin: 0;

  @media (${mediaQuery.tablet}) {
    grid-column: 5 / -7;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 8 / -7;
  }
`;

export const PhotoContainer = styled.div`
  border-bottom-width: 1px;
  border-color: var(--colorForegroundSoft);
  border-left-width: 0;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  grid-column: 1 / 12;
  grid-row: 2;
  height: auto;
  position: relative;

  @media (${mediaQuery.tablet}) {
    border-left-width: 1px;
    grid-column: 4 / 10;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 7 / 10;
  }
`;

export const SectionAbout = styled.section`
  grid-column: 2 / -2;
  grid-row: 3;

  @media (${mediaQuery.tablet}) {
    grid-column: 6 / 14;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 8 / 13;
  }
`;

export const SectionAboutWebsite = styled.section`
  grid-column: 2 / -2;
  grid-row: 4;

  @media (${mediaQuery.tablet}) {
    grid-column: 5 / 13;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 7 / 12;
  }
`;

export const SectionContact = styled.section`
  grid-column: 2 / -2;
  grid-row: 5;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / 8;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 5 / 8;
  }
`;

export const SectionConnect = styled.section`
  grid-column: 2 / -2;
  grid-row: 6;

  @media (${mediaQuery.tablet}) {
    grid-column: 8 / -3;
    grid-row: 5;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 9 / -5;
  }
`;

export const SocialMedia = styled(UnorderedList)`
  column-count: 1;
  margin: 0;

  @media (min-width: 300px) {
    column-count: 2;
    grid-column: 9 / -4;
  }

  @media (min-width: 400px) {
    column-count: 3;
  }
`;

export const Styled = {
  PhotoContainer,
  SectionAbout,
  SectionAboutWebsite,
  SectionConnect,
  SectionContact,
  SocialMedia,
  TitleAbout,
};
