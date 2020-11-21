import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { TextLink } from '.';
import type { TextLinkProps } from '.';

export default {
  title: 'Text Styles/Text Link',
  component: TextLink,
} as Meta;

const Template: Story<TextLinkProps> = (args) => (
  <Paragraph>
    <TextLink {...args} />
  </Paragraph>
);

export const HTMLLink = Template.bind({});
HTMLLink.args = {
  children: 'External Link',
  href: 'https://www.stefanimhoff.de',
};

export const HTMLLinkBlock = Template.bind({});
HTMLLinkBlock.args = {
  children: 'External Link',
  href: 'https://www.stefanimhoff.de',
  block: true,
};

export const RouterLink = Template.bind({});
RouterLink.args = {
  children: 'Router Link',
  to: '/',
};

export const RouterLinkBlock = Template.bind({});
RouterLinkBlock.args = {
  children: 'Router Link',
  to: '/',
  block: true,
};
