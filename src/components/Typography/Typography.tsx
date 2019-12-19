import styled from 'styled-components';

import { StyledDynamicComponent } from '../../global/DynamicComponent';
import { TextStyleProps } from '../../typings/Theme';
// TODO: Read this from state
import { currentTheme } from '../../global/Layout/Layout';

const { headline, paragraph } = currentTheme.textStyles;

const createTypoComponent = (props: TextStyleProps) => {
  const TypoComponent = styled(StyledDynamicComponent)``;

  TypoComponent.defaultProps = {
    ...props,
  };

  return TypoComponent;
};

export const Headline = createTypoComponent(headline);
export const P = createTypoComponent(paragraph);
