import { notEmptyArray } from "../helpers/not_empty_array.helper";
import { testCases } from "./testcases";

describe('notEmptyArray', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = notEmptyArray(val);
      if (ref) {
        expect(result).toBeTruthly();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});
