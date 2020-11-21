import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { RubyAnnotation } from '.';
import type { RubyAnnotationProps } from '.';

export default {
  title: 'Text Styles/Ruby Annotation',
  component: RubyAnnotation,
} as Meta;

const Template: Story<RubyAnnotationProps> = (args) => (
  <Paragraph>
    <RubyAnnotation {...args} />
  </Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  base: '本',
  text: 'ほん',
};

export const Multiple = () => (
  <Paragraph>
    <RubyAnnotation base="日" text="に" />
    <RubyAnnotation base="本" text="ほん" />
    <RubyAnnotation base="語" text="ご" />で
    <RubyAnnotation base="書" text="か" />
    いた
    <RubyAnnotation base="作" text="さく" />
    <RubyAnnotation base="文" text="ぶん" />
    です。
  </Paragraph>
);
