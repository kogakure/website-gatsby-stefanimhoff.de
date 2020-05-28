import * as React from 'react';

import { Emojify } from '../../../layout';
import { Paragraph, Subheadline } from '../../../components/typography';
import { ProtectedEmail } from '../../../components/protected-email';

import { Styled } from './contact.styles';

export const Contact: React.FC = () => (
  <Styled.Contact id="contact">
    <Subheadline as="h2">Contact</Subheadline>
    <Paragraph noMargin>
      You’ve got mail!
      <Emojify emoji="📬" />
    </Paragraph>
    <Paragraph noMargin>
      <ProtectedEmail title="Say hello." />
    </Paragraph>
  </Styled.Contact>
);
