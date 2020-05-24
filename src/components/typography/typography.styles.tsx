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
    fill: var(--colorText);
    margin-left: 0;
    opacity: 0;
    position: relative;

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

  & .autolink {
    bottom: 0.1em;
  }
`;

const Headline = styled.h1`
  font-size: ${fontSize[5]};
  font-weight: ${fontWeight.black};
  letter-spacing: normal;
  line-height: ${lineHeight[1]};
  margin-bottom: ${space[11]};
  margin-top: 0;
  ${autoLinkBaseStyles};

  & .autolink {
    bottom: 0;
  }
`;

const Subline = styled.h2`
  font-size: ${fontSize[4]};
  font-weight: ${fontWeight.black};
  letter-spacing: normal;
  line-height: ${lineHeight[1]};
  margin-bottom: ${space[10]};
  margin-top: 0;
  ${autoLinkBaseStyles};

  & .autolink {
    bottom: -0.1em;
  }
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
