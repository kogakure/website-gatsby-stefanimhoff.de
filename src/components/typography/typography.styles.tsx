import styled, { css } from 'styled-components';

import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  transitionDuration,
} from '../../layout/tokens';

const autoLinkBaseStyles = css`
  & .autolink {
    background: transparent;
    display: inline-flex;
    fill: var(--colorText);
    margin-left: ${space[2]};
    opacity: 0;
    vertical-align: middle;

    @media screen and (prefers-reduced-motion: no-preference) {
      transition-duration: ${transitionDuration[5]};
      transition-property: opacity;
      transition-timing-function: ease-in-out;
    }
  }

  &:hover .autolink,
  &:focus .autolink {
    opacity: 0.5;
  }
`;

const Title = styled.h1`
  font-size: ${fontSize[6]};
  font-weight: ${fontWeight.black};
  letter-spacing: normal;
  line-height: ${lineHeight[1]};
  margin-bottom: ${space[13]};
  margin-top: 0;
  ${autoLinkBaseStyles};
`;

const Headline = styled.h1`
  font-size: ${fontSize[5]};
  font-weight: ${fontWeight.black};
  letter-spacing: normal;
  line-height: ${lineHeight[1]};
  margin-bottom: ${space[11]};
  margin-top: 0;
  ${autoLinkBaseStyles};
`;

const Subline = styled.h2`
  font-size: ${fontSize[4]};
  font-weight: ${fontWeight.black};
  letter-spacing: normal;
  line-height: ${lineHeight[1]};
  margin-bottom: ${space[10]};
  margin-top: 0;
  ${autoLinkBaseStyles};
`;

const Paragraph = styled.p`
  font-size: ${fontSize[3]};
  font-weight: ${fontWeight.normal};
  letter-spacing: normal;
  line-height: ${lineHeight[2]};
  margin-bottom: ${space[12]};
  margin-top: 0;
`;

export const Styled = {
  Headline,
  Paragraph,
  Subline,
  Title,
};
