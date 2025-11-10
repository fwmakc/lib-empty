export function notEmptyArray(a: any): boolean {
  return Boolean(a) && Array.isArray(a) && a?.length > 0;
}
