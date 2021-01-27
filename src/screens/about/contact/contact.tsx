import * as React from 'react';

import { Emojify } from '../../../layout';
import { Paragraph, Subheadline } from '../../../components/typography';
import { ProtectedEmail } from '../../../components/protected-email';
import { TextLink } from '../../../components/text-link';

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
    <Paragraph>
      <ProtectedEmail title="Say hello." />
    </Paragraph>
    <Paragraph noMargin>
      You can send me a text message on{' '}
      <TextLink href="https://t.me/kogakure" target="_blank">
        Telegram
      </TextLink>
      ,{' '}
      <TextLink href="https://matrix.to/#/@kogakure:matrix.org" target="_blank">
        Matrix
      </TextLink>{' '}
      or anonymous on{' '}
      <TextLink href="https://getsession.org/" target="_blank">
        Session
      </TextLink>
      &nbsp;(
      <TextLink href="/downloads/session-id.txt" target="_blank">
        ID
      </TextLink>
      ).
    </Paragraph>
  </Styled.Contact>
);
