export function notEmptyObject(o: any): boolean {
  return Boolean(o) && typeof o === 'object' && Object.keys(o)?.length > 0;
}
