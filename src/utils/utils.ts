function pad(n: number, digit: number) {
  const strN = n.toString();
  if (digit <= strN.length) return strN;
  return `${new Array(digit - strN.length).fill('0').join('')}${strN}`;
}

export function numberRepr(n: number): string {
  if (n < 0) throw Error('Only positive numbers are allowed');
  if (n < 1000) return n.toString();
  return `${numberRepr(Math.floor(n / 1000))},${pad(n % 1000, 3)}`;
}

export function critProb(_: number, tech: number, critBase: number) {
  const val = tech / 340 + critBase;
  if (val > 100) return 100;
  if (val < 0) return 0;
  return val;
}
