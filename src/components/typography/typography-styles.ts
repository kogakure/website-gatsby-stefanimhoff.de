import { StyledSystemProps } from '../../typings/styled-system';

export type TypographyStyles = {
  Title: StyledSystemProps;
  Headline: StyledSystemProps;
  Subline: StyledSystemProps;
  Paragraph: StyledSystemProps;
  InlineCode: StyledSystemProps;
};

export const TypographyStyles: TypographyStyles = {
  Title: {
    as: 'h1',
    fontSize: 6,
    fontWeight: 900,
    letterSpacing: 'normal',
    lineHeight: 1,
    marginBottom: 13,
    marginTop: 5,
  },
  Headline: {
    as: 'h2',
    fontSize: 5,
    fontWeight: 900,
    letterSpacing: 'normal',
    lineHeight: 1,
    marginBottom: 11,
    marginTop: 15,
  },
  Subline: {
    as: 'h3',
    fontSize: 4,
    fontWeight: 900,
    letterSpacing: 'normal',
    lineHeight: 1,
    marginBottom: 10,
    marginTop: 15,
  },
  Paragraph: {
    as: 'p',
    fontSize: 3,
    fontWeight: 400,
    letterSpacing: 'normal',
    marginTop: 0,
    marginBottom: 12,
    lineHeight: 2,
  },
  InlineCode: {
    as: 'code',
    fontSize: 3,
  },
};
