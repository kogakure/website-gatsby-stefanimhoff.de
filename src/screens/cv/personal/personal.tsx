import * as React from 'react';

import { CvPersonal } from '../../../typings/graphql';
import {
  Subheadline,
  SubSubheadline,
  Paragraph,
} from '../../../components/typography';
import { TextLink } from '../../../components/text-link';
import { ProtectedEmail } from '../../../components/protected-email';

import { Styled } from './personal.styles';

type PersonalProps = {
  data: CvPersonal;
};

export const Personal: React.FC<PersonalProps> = ({ data, ...props }) => (
  <Styled.Personal {...props}>
    <Subheadline>Personal Information</Subheadline>
    <SubSubheadline noMargin>{data.name}</SubSubheadline>
    <Paragraph noMargin>{data.tagline}</Paragraph>
    <TextLink href="https://www.stefanimhoff.de">Website</TextLink> •{' '}
    <ProtectedEmail noKeyDownload title="Email" />
  </Styled.Personal>
);
