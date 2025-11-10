import { notEmptyObject } from '../helpers/not_empty_object.helper';
import { testCases } from './testcases';

describe('notEmptyObject', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = notEmptyObject(val);
      if (ref) {
        expect(result).toBeTruthy();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});
