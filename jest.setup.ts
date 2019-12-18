import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

// @ts-ignore: https://github.com/testing-library/jest-dom/issues/123
import * as jestDOM from '@testing-library/jest-dom';

expect.extend(jestDOM);
