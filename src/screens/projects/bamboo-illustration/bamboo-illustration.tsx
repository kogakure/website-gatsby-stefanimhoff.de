import * as React from 'react';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';
import { SmallPrint, TextBlock } from '..';

import bambooIllustration from './bamboo-illustration.svg';
import { Styled } from './bamboo-illustration.styles';

export const BambooIllustration: React.FC = () => (
  <>
    <Row variant="fullsize" vertical="center">
      <Styled.ImageContainer>
        <img src={bambooIllustration} alt="Bamboo Illustration" />
      </Styled.ImageContainer>
    </Row>
    <Row variant="rightOnly">
      <TextBlock>
        <SmallPrint>Illustration</SmallPrint>
        <Headline>
          Bamboo Illustration
          <Emojify emoji="🎋" />
        </Headline>
        <Paragraph>
          I created the bamboo illustration in <strong>2006</strong> for my{' '}
          <TextLink href="https://www.kogakure.de/">
            Martial Arts website
          </TextLink>{' '}
          used Adobe Illustrator and the gradient grid tool.
        </Paragraph>
        <Paragraph>
          <strong>2015</strong> I descided to use my bamboo as{' '}
          <abbr title="Scalable Vector Graphics">SVG</abbr> on my Unfortuanately
          the gradient tool is not supported in{' '}
          <abbr title="Scalable Vector Graphics">SVG</abbr> and I needed to
          recreate my bamboo with linear, radial and other supported gradients
          in{' '}
          <TextLink href="https://affinity.serif.com/designer/">
            Affinity Designer
          </TextLink>
          .
        </Paragraph>
      </TextBlock>
    </Row>
  </>
);
