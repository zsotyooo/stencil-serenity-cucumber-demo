
export function format(first: string, last?: string): string {
  return (
    (first || '') +
    (last ? ` ${last}` : '')
  );
}
