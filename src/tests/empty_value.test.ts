import { emptyValue } from '../helpers/empty_value.helper';
import { testCases } from './testcases';

describe('emptyValue', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = emptyValue(val);
      if (ref) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});
