import { emptyArray } from "../helpers/empty_array.helper";
import { testCases } from "./testcases";

describe('emptyArray', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = emptyArray(val);
      if (ref) {
        expect(result).toBeTruthly();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});
