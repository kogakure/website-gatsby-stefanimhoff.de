import * as React from 'react';

import { useSocialMediaQuery } from '../../../hooks';
import { Subheadline } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './connect.styles';

export const Connect: React.FC = () => {
  const {
    allSocialMediaYaml: { nodes },
  } = useSocialMediaQuery();

  return (
    <Styled.Connect id="connect">
      <Subheadline as="h2">Connect</Subheadline>
      <Styled.SocialMedia>
        {nodes.map(({ text, url }) => (
          <li key={text}>
            <TextLink href={url}>{text}</TextLink>
          </li>
        ))}
      </Styled.SocialMedia>
    </Styled.Connect>
  );
};
