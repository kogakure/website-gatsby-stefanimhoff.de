import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '..';
import type { TypographyProps } from '..';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor amet shoreditch tbh butcher 90's portland, keytar street art. Pork belly you probably haven't heard of them ethical post-ironic hella, cray kale chips fashion axe chillwave shabby chic man bun slow-carb unicorn. Live-edge intelligentsia tumblr quinoa man braid. Hexagon disrupt echo park brunch direct trade four dollar toast chartreuse, drinking vinegar wolf bushwick pork belly. Vexillologist sartorial literally venmo blog.  Tumblr you probably haven't heard of them bitters swag waistcoat af. Deep v helvetica blog, paleo cardigan seitan kombucha normcore.",
};
