import { emptyObject } from "../helpers/empty_object.helper";
import { testCases } from "./testcases";

describe('emptyObject', () => {
  testCases.forEach(({ val, ref }) => {
    it(`${val} -> ${ref}`, () => {
      const result = emptyObject(val);
      if (ref) {
        expect(result).toBeTruthly();
      } else {
        expect(result).toBeFalsy();
      }
    });
  });
});
