import { notEmptyValue } from '../helpers/not_empty_value.helper';
import { testCases } from './testcases';

describe('notEmptyValue', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = notEmptyValue(val);
      if (ref) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});
