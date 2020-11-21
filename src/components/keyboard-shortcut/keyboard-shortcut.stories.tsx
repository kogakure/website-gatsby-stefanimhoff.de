import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { KeyboardShortcut } from '.';
import type { KeyboardShortcutProps } from '.';

export default {
  title: 'Text Styles/Code/Keyboard Shortcut',
  component: KeyboardShortcut,
} as Meta;

const Template: Story<KeyboardShortcutProps> = (args) => (
  <Paragraph>
    <KeyboardShortcut {...args} />
  </Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  children: '⌘',
};
