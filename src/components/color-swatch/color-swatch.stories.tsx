import * as React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ColorSwatch } from '.';
import type { ColorSwatchProps } from '.';

const Grid = styled.div`
  width: 200px;
`;

export default {
  title: 'Misc/Color Swatch',
  component: ColorSwatch,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ColorSwatchProps> = (args) => (
  <Grid>
    <ColorSwatch {...args} />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  color: '#005CAF',
  name: 'Lapis Lazuli',
  description:
    'The soft, slightly purplish blue associated with the semi-precious stone.',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  color: '#005CAF',
  description:
    'The soft, slightly purplish blue associated with the semi-precious stone.',
};

export const RGBValue = Template.bind({});
RGBValue.args = {
  color: 'rgb(0, 92, 175)',
};

export const HSLValue = Template.bind({});
HSLValue.args = {
  color: 'hsl(208, 100%, 34%)',
};
