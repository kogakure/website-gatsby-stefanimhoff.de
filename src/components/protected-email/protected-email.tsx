import * as React from 'react';

import { TextLink } from '../text-link';

import { Styled } from './protected-email.styles';

export type ProtectedEmailProps = {
  title?: string;
  noKeyDownload?: boolean;
};

export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({
  noKeyDownload,
  title = 'Email',
  ...props
}) => {
  const [emailVisible, setEmailVisible] = React.useState(false);
  const downloadText = 'Download public key (ProtonMail/GPG)';

  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setEmailVisible(true);
  };

  return (
    <>
      {emailVisible ? (
        <Styled.ProtectedEmail>
          {!noKeyDownload && (
            <Styled.LockBox>
              <a
                title={downloadText}
                aria-label={downloadText}
                href="/downloads/publickey.stefan@imhoff.name-1d844c94d6fec7939a9bdaf221ce017ed5fa22c6.asc"
              >
                <Styled.LockIcon aria-hidden="true" />
              </a>
            </Styled.LockBox>
          )}
          <TextLink href="mailto:stefan@imhoff.name">
            stefan@imhoff.name
          </TextLink>
        </Styled.ProtectedEmail>
      ) : (
        <Styled.ProtectedEmail
          onClick={handleClick}
          onKeyUp={(e: React.KeyboardEvent) =>
            e.key === 'Enter' && handleClick(e)} // prettier-ignore
          role="button"
          tabIndex={0}
          {...props}
        >
          <TextLink href="#">{title}</TextLink>
        </Styled.ProtectedEmail>
      )}
    </>
  );
};
