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

export function critProb(appl: number, tech: number) {
  const val = appl > tech ? tech / 340 : tech / 200;
  if (val > 100) return 100;
  if (val < 0) return 0;
  return val;
}
