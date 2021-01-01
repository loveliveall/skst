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
  6: { name: 'Snow halation', groupId: 1, nameGlobal: 'Snow Halation' },
  7: { name: '僕らのLIVE 君とのLIFE', groupId: 1, nameGlobal: 'Bokura no LIVE Kimi to no LIFE' },
  8: { name: '青空Jumping Heart', groupId: 2, nameGlobal: 'Aozora Jumping Heart' },
  9: { name: 'レインボーローズ', groupId: 3, nameGlobal: '레인보우 로즈' },
  10: { name: 'マーチング・ハーモニー', groupId: 3 },
  11: { name: 'Brightest Melody', groupId: 2 },
  12: { name: 'それは僕たちの奇跡', groupId: 1 },
  13: { name: '恋になりたいAQUARIUM', groupId: 2 },
  14: { name: 'Wonderful Rush', groupId: 1 },
  15: { name: 'Love U my friends', groupId: 3 },
  16: { name: 'ユメノトビラ', groupId: 1 },
  17: { name: '니지 3집 의상', groupId: 3 },
  18: { name: '未体験HORIZON', groupId: 2 },
  19: { name: '虹色Passions！', groupId: 3 },
  20: { name: 'KiRa-KiRa Sensation!', groupId: 1 },
  21: { name: 'MIRACLE WAVE', groupId: 2 },
};
/* eslint-enable object-curly-newline, max-len */
