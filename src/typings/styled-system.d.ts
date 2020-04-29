/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BorderColorProps,
  BorderRadiusProps,
  BorderStyleProps,
  BorderWidthProps,
  BordersProps,
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
  | BorderColorProps
  | BorderRadiusProps
  | BorderStyleProps
  | BorderWidthProps
  | BordersProps
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
