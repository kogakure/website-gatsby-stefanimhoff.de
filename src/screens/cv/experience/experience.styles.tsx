import styled from 'styled-components';

import { space } from '../../../layout/tokens';

const Experience = styled.section``;

const HeadlineRow = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-items: center;
`;

const Location = styled.span`
  line-height: 1;
`;

const Separator = styled.span`
  line-height: 1;
  margin-left: ${space[2]};
  margin-right: ${space[2]};
`;

const Url = styled.div``;

const Title = styled.div`
  font-weight: bold;
`;

const Duration = styled.div`
  font-style: italic;
  margin-bottom: ${space[2]};
`;

export const Styled = {
  Duration,
  Experience,
  HeadlineRow,
  Location,
  Separator,
  Title,
  Url,
};
