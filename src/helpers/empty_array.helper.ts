export function emptyArray (a: Array<any>): boolean {
  return Boolean(a) && Array.isArray(a) && !a?.length;
}
