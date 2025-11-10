export function notEmptyArray (a: Array<any>): boolean {
  return Boolean(a) && Array.isArray(a) && a?.length > 0;
}
