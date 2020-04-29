import styled from 'styled-components';
import { space } from 'styled-system';

const HorizontalRule = styled.hr`
  ${space}
  border-bottom-width: 1px;
  border-color: var(--colorTextSoftInverse);
  border-left-width: 0;
  border-right-width: 0;
  border-style: solid;
  border-top-width: 0;
  width: 60%;
`;

export const Styled = {
  HorizontalRule,
};
