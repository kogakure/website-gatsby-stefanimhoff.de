import { StyledSystemProps } from '../../typings/StyleSystem';

interface TypographyStyles {
  Title: StyledSystemProps;
  Headline: StyledSystemProps;
  Subline: StyledSystemProps;
  Paragraph: StyledSystemProps;
  InlineCode: StyledSystemProps;
}

export const TypographyStyles: TypographyStyles = {
  Title: {
    as: 'h1',
    fontSize: 6,
    fontWeight: 900,
    letterSpacing: 'normal',
    marginTop: 5,
    marginBottom: 13,
    lineHeight: 1,
  },
  Headline: {
    as: 'h2',
    fontSize: 5,
    fontWeight: 900,
    letterSpacing: 'normal',
    marginTop: 0,
    marginBottom: 11,
    lineHeight: 1,
  },
  Subline: {
    as: 'h3',
    fontSize: 4,
    fontWeight: 900,
    letterSpacing: 'normal',
    marginTop: 0,
    marginBottom: 10,
    lineHeight: 1,
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
