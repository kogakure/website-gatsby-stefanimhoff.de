/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BorderRadiusProps,
  ColorProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LayoutProps,
  LetterSpacingProps,
  LineHeightProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  TextStyleProps,
} from 'styled-system';

export type StyledSystemProps =
  | BorderRadiusProps
  | ColorProps
  | FontFamilyProps
  | FontSizeProps
  | FontStyleProps
  | FontWeightProps
  | LayoutProps
  | LetterSpacingProps
  | LineHeightProps
  | SizeProps
  | SpaceProps
  | TextAlignProps
  | TextStyleProps
  | {
      color: string;
      as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    };
