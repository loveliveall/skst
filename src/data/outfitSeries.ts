export type OutfitSeries = {
  readonly [id: number]: {
    readonly name: string,
    readonly groupId: number,
    readonly matching: string[],
  },
};

/* eslint-disable */
export const OUTFIT_SERIES: OutfitSeries = {
  1: { name: 'フレッシュフルーツパーラー', groupId: 1, matching: ['フレッシュフルーツパーラー'] },
  2: { name: 'ハピネスチアガール', groupId: 2, matching: ['ハピネスチアガール'] },
  3: { name: 'TOKIMEKI Runners', groupId: 3, matching: [
    '夢への一歩', 'ダイアモンド', 'あなたの理想のヒロイン', 'Starlight', 'めっちゃGoing!!', '眠れる森に行きたいな', 'CHASE!', 'Evergreen', 'ドキピポ☆エモーション',
  ] },
  4: { name: '君のこころは輝いてるかい？', groupId: 2, matching: ['君のこころは輝いてるかい？'] },
  5: { name: 'わくわくアニマル', groupId: 3, matching: ['わくわくアニマル'] },
  6: { name: 'Snow halation', groupId: 1, matching: ['Snow halation'] },
  7: { name: '僕らのLIVE 君とのLIFE', groupId: 1, matching: ['僕らのLIVE 君とのLIFE'] },
  8: { name: '青空Jumping Heart', groupId: 2, matching: ['青空Jumping Heart'] },
  9: { name: 'レインボーローズ', groupId: 3, matching: ['レインボーローズ'] },
  10: { name: 'マーチング・ハーモニー', groupId: 3, matching: ['マーチング・ハーモニー'] },
  11: { name: 'Brightest Melody', groupId: 2, matching: ['Brightest Melody'] },
  12: { name: 'それは僕たちの奇跡', groupId: 1, matching: ['それは僕たちの奇跡'] },
  13: { name: '恋になりたいAQUARIUM', groupId: 2, matching: ['恋になりたいAQUARIUM'] },
  14: { name: 'Wonderful Rush', groupId: 1, matching: ['Wonderful Rush'] },
  15: { name: 'Love U my friends', groupId: 3, matching: ['Love U my friends'] },
  16: { name: 'ユメノトビラ', groupId: 1, matching: ['ユメノトビラ'] },
  17: { name: '니지 3집 의상', groupId: 3, matching: [
    '決意の光', '哀温ノ詩', 'Märchen Star', 'Say Good-Bye 涙', 'やがてひとつの物語', 'Margaret', 'アナログハート', '楽しいの天才', 'Fire Bird', 'LIKE IT！LOVE IT！',
  ] },
  18: { name: '未体験HORIZON', groupId: 2, matching: ['未体験HORIZON'] },
  19: { name: '虹色Passions！', groupId: 3, matching: ['虹色Passions！'] },
  20: { name: 'KiRa-KiRa Sensation!', groupId: 1, matching: ['KiRa-KiRa Sensation!'] },
  21: { name: 'MIRACLE WAVE', groupId: 2, matching: ['MIRACLE WAVE'] },
  22: { name: 'Just Believe!!!', groupId: 3, matching: ['Just Believe!!!'] },
  23: { name: 'HAPPY PARTY TRAIN', groupId: 2, matching: ['HAPPY PARTY TRAIN'] },
  24: { name: 'No brand girls', groupId: 1, matching: ['No brand girls'] },
};
