import { generateKey } from '../generate-key';

describe('generateKey', () => {
  test('generates a key', () => {
    jest
      .spyOn(global.Date, 'now')
      .mockImplementation(() => new Date('2020-01-01T12:00:00').valueOf());

    expect(generateKey('prefix')).toBe('prefix-1577876400000');
  });
});
