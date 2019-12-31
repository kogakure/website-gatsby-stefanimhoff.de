import * as React from 'react';

const Demo: React.FC = ({ children }) => (
  <h2
    style={{
      background: 'blue',
      padding: '15px',
      marginBottom: '15px',
      color: 'white',
    }}
  >
    {children}
  </h2>
);

export { Demo };
