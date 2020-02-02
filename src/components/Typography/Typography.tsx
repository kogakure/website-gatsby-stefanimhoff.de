/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';

import { StyledSystemProps } from '../../typings/StyleSystem';

import DynamicComponent from './DynamicComponent';
import { TypographyStyles } from './TypographyStyles';

interface TypographyComponentProps {
  Title: React.FC<StyledSystemProps>;
  Headline: React.FC<StyledSystemProps>;
  Subline: React.FC<StyledSystemProps>;
  Paragraph: React.FC<StyledSystemProps>;
  InlineCode: React.FC<StyledSystemProps>;
  TextLink: React.FC<AnchorProps>;
}

interface TextLinkProps {
  href?: string;
  to?: string;
}

type AnchorProps = TextLinkProps &
  StyledSystemProps &
  Omit<GatsbyLinkProps<any>, 'to'>;

const TextLink: React.FC<AnchorProps> = ({
  href,
  to,
  activeClassName,
  innerRef,
  onClick,
  partiallyActive,
  replace,
  children,
  ...props
}) =>
  to ? (
    <Link
      to={to}
      activeClassName={activeClassName}
      innerRef={innerRef}
      onClick={onClick}
      partiallyActive={partiallyActive}
      replace={replace}
    >
      {children}
    </Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  );

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
  TextLink,
};
