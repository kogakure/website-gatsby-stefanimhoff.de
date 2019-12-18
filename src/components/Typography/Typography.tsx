import styled from 'styled-components';

import { StyledDynamicComponent } from '../../global/DynamicComponent';
import { light } from '../../theme';
import { TextStyleProps } from '../../theme/theme.d';

const { headline, paragraph } = light.textStyles;

const createTypoComponent = (props: TextStyleProps) => {
  const TypoComponent = styled(StyledDynamicComponent)``;

  TypoComponent.defaultProps = {
    ...props,
  };

  return TypoComponent;
};

export const Headline = createTypoComponent(headline);
export const P = createTypoComponent(paragraph);
