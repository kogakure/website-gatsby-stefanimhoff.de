import * as React from 'react';

import { Attribution, AttributionData } from '../../../components/attribution';

import { Styled } from './footer.styles';

export type FooterProps = {
  attribution: AttributionData[];
};

export const Footer = ({ attribution, ...props }: FooterProps) => (
  <Styled.Footer {...props}>
    <Styled.Divider />
    <Attribution data={attribution} />
  </Styled.Footer>
);
