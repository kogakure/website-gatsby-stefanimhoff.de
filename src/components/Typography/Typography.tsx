import styled from 'styled-components';

import { StyledDynamicComponent } from '../../global/DynamicComponent';
import { theme } from '../../theme';

const { headline, paragraph } = theme.textStyles;

// TODO: Better type for props
const createTypoComponent = (props: object) => {
  const TypoComponent = styled(StyledDynamicComponent)``;

  TypoComponent.defaultProps = {
    ...props,
  };

  return TypoComponent;
};

export const Headline = createTypoComponent(headline);
export const P = createTypoComponent(paragraph);
