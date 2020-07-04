import * as React from 'react';

import { Emojify } from '../../../layout';
import { useSocialMediaQuery } from '../../../hooks';
import { Subheadline } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './connect.styles';

export const Connect: React.FC = () => {
  const {
    allSocialMediaYaml: { nodes },
  } = useSocialMediaQuery();

  return (
    <Styled.Connect id="connect" data-sal="slide-up" data-sal-duration="800">
      <Subheadline as="h2">
        Connect
        <Emojify emoji="🤝" />
      </Subheadline>
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
