import * as React from 'react';

import { Emojify } from '../../../layout';
import { Paragraph, Subheadline } from '../../../components/typography';
import { ProtectedEmail } from '../../../components/protected-email';

import { Styled } from './contact.styles';

export const Contact = () => (
  <Styled.Contact id="contact" data-sal="slide-up" data-sal-duration="800">
    <Subheadline as="h2">
      Contact
      <Emojify emoji="📇" />
    </Subheadline>
    <Paragraph noMargin>
      You’ve got mail!
      <Emojify emoji="📬" />
    </Paragraph>
    <Paragraph noMargin>
      <ProtectedEmail title="Say hello." />
    </Paragraph>
  </Styled.Contact>
);
