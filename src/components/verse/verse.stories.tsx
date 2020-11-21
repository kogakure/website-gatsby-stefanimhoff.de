import * as React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { Verse } from '.';
import type { VerseProps } from '.';

export default {
  title: 'Quotations/Verse',
  component: Verse,
} as Meta;

const Wrapper = styled.div`
  width: 90vw;
`;

const Template: Story<VerseProps> = (args) => (
  <Wrapper>
    <Paragraph>
      <Verse {...args} />
    </Paragraph>
  </Wrapper>
);

const children = (
  <p>
    God guard me from those thoughts men think
    <br />
    In the mind alone;
    <br />
    He that sings a lasting song
    <br />
    Thinks in a marrow bone.
  </p>
);

export const Default = Template.bind({});
Default.args = {
  children,
};

export const Center = Template.bind({});
Center.args = {
  children,
  variant: 'center',
};

export const Left = Template.bind({});
Left.args = {
  children,
  variant: 'left',
};
