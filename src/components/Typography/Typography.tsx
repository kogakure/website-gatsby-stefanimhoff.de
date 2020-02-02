import * as React from 'react';

import { StyledSystemProps } from '../../typings/StyleSystem';

import DynamicComponent from './DynamicComponent';
import { TypographyStyles } from './TypographyStyles';

interface TypographyComponentProps {
  Title: React.FC<StyledSystemProps>;
  Headline: React.FC<StyledSystemProps>;
  Subline: React.FC<StyledSystemProps>;
  Paragraph: React.FC<StyledSystemProps>;
  InlineCode: React.FC<StyledSystemProps>;
}

const createComponent: (
  textStyle: StyledSystemProps,
  displayName: string
) => React.FC<StyledSystemProps> = (textStyle, displayName) => {
  const component: React.FC<StyledSystemProps> = ({ children, ...props }) => (
    <DynamicComponent {...textStyle} {...props}>
      {children}
    </DynamicComponent>
  );

  component.displayName = displayName;

  return component;
};

export const Typography: TypographyComponentProps = {
  Title: createComponent(TypographyStyles.Title, 'Title'),
  Headline: createComponent(TypographyStyles.Headline, 'Headline'),
  Subline: createComponent(TypographyStyles.Subline, 'Subline'),
  Paragraph: createComponent(TypographyStyles.Paragraph, 'Paragraph'),
  InlineCode: createComponent(TypographyStyles.InlineCode, 'InlineCode'),
};
