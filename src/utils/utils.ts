function pad(n: number, digit: number) {
  const strN = n.toString();
  if (digit <= strN.length) return strN;
  return `${new Array(digit - strN.length).fill('0').join('')}${strN}`;
}

export function numberRepr(n: number): string {
  const absN = Math.abs(n);
  const sign = n / absN === -1 ? '-' : '';
  if (n < 1000) return `${sign}${absN}`;
  return `${sign}${numberRepr(Math.floor(absN / 1000))},${pad(absN % 1000, 3)}`;
}

export function critProb(_: number, tech: number, critBase: number) {
  const val = tech / 340 + critBase;
  if (val > 100) return 100;
  if (val < 0) return 0;
  return val;
}

export function getContrastText(hexColor: string) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? {
    // black
    active: '#010101',
    inactive: '#818181',
  } : {
    // white
    active: '#f1f1f1',
    inactive: '#818181',
  };
}
