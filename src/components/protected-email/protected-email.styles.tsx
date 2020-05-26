import styled from 'styled-components';

import { Lock } from '../../components/icons';

const ProtectedEmail = styled.span`
  background: transparent;
`;

const LockBox = styled.span`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  height: 20px;
  justify-content: center;
  position: relative;
  top: 0.2em;
  width: 25px;
`;

const LockIcon = styled(Lock)`
  fill: var(--colorForeground);
  font-size: 1.2rem;
`;

export const Styled = {
  LockBox,
  LockIcon,
  ProtectedEmail,
};
