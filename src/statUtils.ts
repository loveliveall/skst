export function getCritProb(tech: number, critOffset: number): number {
  // 0.003 * tech + critOffset is crit prob in % value
  // However, critOffset value is 100 times larger than % value in this app (i.e., 1500 for 15%)
  // so we do (0.3 * tech + critOffset) / 100 which finally results in % value
  return (0.3 * tech + critOffset) / 100;
}
