import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import 'jest-styled-components';

import { cleanup } from './src/services/test-utils';

afterEach(cleanup);
