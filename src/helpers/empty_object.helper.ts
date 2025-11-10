export function emptyObject (o: object): boolean {
  return Boolean(o) && typeof o === 'object' && !Object.keys(o)?.length;
}
