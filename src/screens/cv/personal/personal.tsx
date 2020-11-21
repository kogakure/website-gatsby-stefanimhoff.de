import * as React from 'react';

import { CvPersonal } from '../../../typings/graphql';
import {
  Subheadline,
  SubSubheadline,
  Paragraph,
} from '../../../components/typography';
import { TextLink } from '../../../components/text-link';
import { ProtectedEmail } from '../../../components/protected-email';
import { DownloadLink } from '../../../components/download-link';

import { Styled } from './personal.styles';

type PersonalProps = {
  data: CvPersonal;
};

export const Personal = ({ data, ...props }: PersonalProps) => (
  <Styled.Personal {...props}>
    <Subheadline>Personal Information</Subheadline>
    <SubSubheadline noMargin>{data.name}</SubSubheadline>
    <Paragraph noMargin>{data.tagline}</Paragraph>
    <TextLink href="https://www.stefanimhoff.de">Website</TextLink> /{' '}
    <ProtectedEmail noKeyDownload title="Email" /> /{' '}
    <DownloadLink href="/downloads/cv-stefan-imhoff.zip">CV</DownloadLink> /{' '}
    <DownloadLink href="/downloads/business-card-stefan-imhoff.zip">
      VCard
    </DownloadLink>
  </Styled.Personal>
);
