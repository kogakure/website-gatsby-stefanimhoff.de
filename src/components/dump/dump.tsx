/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const Dump = (props: any) => (
  <div>
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: 'white', background: 'red' }}>
          {key}{' '}
          <span role="img" aria-label="Dump">
            💩
          </span>
        </strong>

        {JSON.stringify(val, null, 2)}
      </pre>
    ))}
  </div>
);

export { Dump };
