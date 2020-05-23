import styled from 'styled-components';

import { fontSize, fontWeight, lineHeight, space } from '../../layout/tokens';

const Title = styled.h1`
  font-size: ${fontSize[6]};
  font-weight: ${fontWeight.black};
  letter-spacing: normal;
  line-height: ${lineHeight[1]};
  margin-bottom: ${space[13]};
  margin-top: ${space[5]};
`;

const Headline = styled.h1`
  font-size: ${fontSize[5]};
  font-weight: ${fontWeight.black};
  letter-spacing: normal;
  line-height: ${lineHeight[1]};
  margin-bottom: ${space[11]};
  margin-top: ${space[15]};
`;

const Subline = styled.h2`
  font-size: ${fontSize[4]};
  font-weight: ${fontWeight.black};
  letter-spacing: normal;
  line-height: ${lineHeight[1]};
  margin-bottom: ${space[10]};
  margin-top: ${space[15]};
`;

const Paragraph = styled.p`
  font-size: ${fontSize[3]};
  font-weight: ${fontWeight.normal};
  letter-spacing: normal;
  line-height: ${lineHeight[2]};
  margin-bottom: ${space[12]};
  margin-top: ${space[0]};
`;

export const Styled = {
  Headline,
  Paragraph,
  Subline,
  Title,
};
