import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { Spoiler } from '.';
import type { SpoilerProps } from '.';

export default {
  title: 'Misc/Spoiler',
  component: Spoiler,
} as Meta;

const Template: Story<SpoilerProps> = (args) => <Spoiler {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Hidden text',
};

export const Block = Template.bind({});
Block.args = {
  block: true,
  children: (
    <>
      <Paragraph>
        This is some <strong>text</strong>, which is <em>hidden</em>.
      </Paragraph>
      <Paragraph>And some more text</Paragraph>
    </>
  ),
};
