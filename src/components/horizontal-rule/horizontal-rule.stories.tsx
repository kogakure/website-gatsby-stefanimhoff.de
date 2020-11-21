import * as React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import { HorizontalRule } from '.';
import type { HorizontalRuleProps } from '.';

const Grid = styled.div`
  width: 50vw;
`;

export default {
  title: 'Misc/Horizontal Rule',
  component: HorizontalRule,
} as Meta;

const Template: Story<HorizontalRuleProps> = (args) => (
  <Grid>
    <HorizontalRule {...args} />
  </Grid>
);

export const Default = Template.bind({});
