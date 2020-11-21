import * as React from 'react';

import { TextLink } from '../text-link';

import { Styled } from './protected-email.styles';

export type ProtectedEmailProps = {
  title?: string;
  noKeyDownload?: boolean;
};

export const ProtectedEmail = ({
  noKeyDownload = false,
  title = 'Email',
  ...props
}: ProtectedEmailProps) => {
  const [emailVisible, setEmailVisible] = React.useState(false);
  const downloadText = 'Download public key (ProtonMail/GPG)';

  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setEmailVisible(true);
  };

  return (
    <>
      {emailVisible ? (
        <span>
          <TextLink href="mailto:hey@imhoff.name">hey@imhoff.name</TextLink>
          {!noKeyDownload && (
            <Styled.LockBox>
              <a
                title={downloadText}
                aria-label={downloadText}
                href="/downloads/publickey.hey@imhoff.name-9cb867d4ccd2c1d7d9fde82f4b649797f3e007a9.asc"
              >
                <Styled.LockIcon aria-hidden="true" />
              </a>
            </Styled.LockBox>
          )}
        </span>
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
