import { emptyValue } from "./empty_value.helper";

export function notEmptyValue (v: any): boolean {
  return !emptyValue(v);
}
