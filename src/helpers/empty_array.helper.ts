export function emptyArray(a: any): boolean {
  return Boolean(a) && Array.isArray(a) && !a?.length;
}
