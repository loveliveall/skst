interface OutfitSeries {
  readonly [id: number]: {
    readonly name: string,
    readonly groupId: number,
    readonly nameGlobal?: string,
  },
}

/* eslint-disable object-curly-newline, max-len */
export const OUTFIT_SERIES: OutfitSeries = {
  1: { name: 'フレッシュフルーツパーラー', groupId: 1, nameGlobal: '프레시 프루트 팔러' },
  2: { name: 'ハピネスチアガール', groupId: 2, nameGlobal: '해피니스 치어걸' },
  3: { name: 'TOKIMEKI Runners', groupId: 3, nameGlobal: 'TOKIMEKI Runners' },
  4: { name: '君のこころは輝いてるかい？', groupId: 2, nameGlobal: 'Kimino Kokorowa Kagayaiterukai?' },
  5: { name: 'わくわくアニマル', groupId: 3, nameGlobal: '두근두근 애니멀' },
  6: { name: 'Snow halation', groupId: 1 },
  7: { name: '僕らのLIVE 君とのLIFE', groupId: 1 },
  8: { name: '青空Jumping Heart', groupId: 2 },
  9: { name: 'レインボーローズ', groupId: 3 },
};
/* eslint-enable object-curly-newline, max-len */
