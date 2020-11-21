import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { InlineCode } from '.';
import type { InlineCodeProps } from '.';

export default {
  title: 'Text Styles/Code/Inline Code',
  component: InlineCode,
} as Meta;

const Template: Story<InlineCodeProps> = (args) => (
  <Paragraph>
    <InlineCode {...args} />
  </Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  children: 'const myVar = "Hello World";',
};
