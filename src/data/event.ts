interface EventType {
  readonly [id: number]: {
    readonly type: string,
    readonly krName: string,
  },
}

export const EVENT_TYPE: EventType = {
  1: { type: 'story', krName: '스토리 이벤트' },
  2: { type: 'exchange', krName: '교환소 이벤트' },
  3: { type: 'bigLive', krName: '빅 라이브' },
};

interface BigLivePrizeType {
  readonly [id: number]: {
    readonly name: string,
  },
}

export const BIG_LIVE_PRIZE_TYPE: BigLivePrizeType = {
  1: { name: '볼티지상' },
  2: { name: '특기상' },
  3: { name: 'Sp특기상' },
  4: { name: '' },
};

export interface Event {
  readonly [id: number]: (
    {
      readonly name: string,
      readonly rankBorder: {
        readonly [rank: number]: number,
      },
      readonly rewardBorder: {
        readonly [rank: number]: number[],
      },
      readonly startDate: string,
      readonly endDate: string,
    }
  ) & (
    {
      readonly eventTypeId: 1,
    } | {
      readonly eventTypeId: 2,
      readonly voltageRankBorder: {
        readonly [voltageRank: number]: number,
      },
      readonly voltageRankSongs: string[], // TODO: Let it link with songs table
    } | {
      readonly eventTypeId: 3,
      readonly targetSongs: string[], // TODO: Let it link with songs table
      readonly prizes: number[][], // Prizes according to the date
      readonly bonusTarget: string,
    }
  ),
}

/* eslint-disable max-len, object-property-newline */
export const EVENT: Event = {
  1: {
    name: '秘密のパーティー！',
    eventTypeId: 1,
    rankBorder: {
      1: 6369538, 10: 3555553, 300: 1085713, 2000: 470560, 3000: 406568, 4000: 329286, 9000: 220018,
    },
    rewardBorder: {
      10: [3, 2, 2],
      300: [2, 2, 2],
      1000: [2, 2, 1],
      3000: [2, 1, 1],
    },
    startDate: '2019.10.03.',
    endDate: '2019.10.15.',
  },
  2: {
    name: '和装モデルはお任せあれ！',
    eventTypeId: 1,
    rankBorder: {
      1: 6753742, 10: 4382512, 100: 2277322, 2000: 556863, 3000: 453049, 4000: 388381, 9000: 302718, 10000: 302394, 30000: 203807, 50000: 184453,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 1, 2],
      50000: [1, 1, 1],
    },
    startDate: '2019.10.21.',
    endDate: '2019.10.31.',
  },
  3: {
    name: '下町巡り珍道中',
    eventTypeId: 1,
    rankBorder: {
      1: 5300000, 10: 3513421, 50: 2269777, 100: 2003496, 2000: 370174, 4000: 267559, 9000: 210372, 30000: 154822, 50000: 139135,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 1, 2],
      50000: [1, 1, 1],
    },
    startDate: '2019.11.06.',
    endDate: '2019.11.15.',
  },
  4: {
    name: 'ハイキングでリフレッシュ！',
    eventTypeId: 1,
    rankBorder: {
      1: 5555555, 10: 3828694, 50: 2343704, 100: 1932468, 1000: 556024, 3000: 304431, 10000: 208801, 30000: 159552, 50000: 144111,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 1, 2],
      50000: [1, 1, 1],
    },
    startDate: '2019.11.21.',
    endDate: '2019.11.30.',
  },
  5: {
    name: '素敵なところへご招待！',
    eventTypeId: 1,
    rankBorder: {
      1: 5103026, 10: 3718026, 50: 2083378, 100: 1766160, 1000: 522710, 3000: 313198, 10000: 221780, 30000: 171323, 50000: 151716,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 1, 2],
      50000: [1, 1, 1],
    },
    startDate: '2019.12.06.',
    endDate: '2019.12.16.',
  },
  6: {
    name: 'スクールアイドルトレイン発車！',
    eventTypeId: 1,
    rankBorder: {
      1: 6325252, 10: 4134201, 50: 2019788, 100: 1714606, 1000: 469120, 3000: 301914, 10000: 210558, 30000: 150018, 50000: 131514,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 1, 2],
      50000: [1, 1, 1],
    },
    startDate: '2019.12.23.',
    endDate: '2019.12.31.',
  },
  7: {
    name: '海の上の大熱戦',
    eventTypeId: 2,
    rankBorder: {
      1: 6071225, 10: 3616030, 50: 2115826, 100: 1842928, 500: 745360, 1000: 561950, 2000: 407780, 3000: 364633, 4000: 315789, 5000: 288717,
      6000: 266261, 7000: 250980, 8000: 241216, 9000: 234000, 10000: 227867, 20000: 169920, 30000: 151854, 40000: 141496, 50000: 133800,
    },
    voltageRankBorder: {
      1: 9817412, 10: 9575467, 50: 8960556, 100: 8588241, 300: 7634338, 500: 7189226, 1000: 6479810, 2000: 5497885, 3000: 5026995, 4000: 4656462, 5000: 4433064,
      6000: 4237405, 7000: 4088398, 8000: 3962686, 9000: 3857909, 10000: 3774759, 15000: 3359317, 20000: 3031235, 25000: 2694629,
    },
    voltageRankSongs: ['あなたの理想のヒロイン', '青空Jumping Heart', 'それは僕たちの奇跡'],
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 1, 2],
      50000: [1, 1, 1],
    },
    startDate: '2020.01.06.',
    endDate: '2020.01.15.',
  },
  8: {
    name: 'スペシャルスイーツを召し上がれ♡',
    eventTypeId: 1,
    rankBorder: {
      1: 5832482, 10: 4300268, 50: 2171730, 100: 1835620, 1000: 614556, 3000: 389363, 10000: 258868, 30000: 180303, 50000: 164100,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 1, 2],
      50000: [1, 1, 1],
    },
    startDate: '2020.01.22.',
    endDate: '2020.01.31.',
  },
  9: {
    name: '二人の奏でる音',
    eventTypeId: 2,
    rankBorder: {
      1: 5216855, 10: 2922310, 50: 2022915, 100: 1787569, 500: 774926, 1000: 606101, 2000: 416267, 3000: 366076, 4000: 313181, 5000: 283979,
      6000: 260929, 7000: 246364, 8000: 236645, 9000: 229780, 10000: 223317, 20000: 161091, 30000: 143177, 40000: 134365, 50000: 128140,
    },
    voltageRankBorder: {
      1: 10646664, 10: 10359204, 50: 9845483, 100: 9616313, 300: 8866254, 500: 8464424, 1000: 7846380, 2000: 6899383, 3000: 6302703, 4000: 5850844, 5000: 5536702,
      6000: 5272802, 7000: 5070782, 8000: 4890731, 9000: 4753526, 10000: 4644153, 15000: 4113506, 20000: 3743819, 25000: 3423449,
    },
    voltageRankSongs: ['PSYCHIC FIRE', '未來の僕らは知ってるよ', 'ダイアモンド'],
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 1, 2],
      50000: [1, 1, 1],
    },
    startDate: '2020.02.06.',
    endDate: '2020.02.14.',
  },
  10: {
    name: 'それゆけUMA捜索隊',
    eventTypeId: 1,
    rankBorder: {
      1: 5906568, 10: 3708799, 50: 2177715, 100: 1835866, 1000: 554264, 3000: 345840, 10000: 221623, 30000: 155677, 50000: 139725,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 2, 1],
      50000: [1, 1, 1],
    },
    startDate: '2020.02.20.',
    endDate: '2020.02.28.',
  },
  11: {
    name: 'いたずらオオカミを捕まえろ！',
    eventTypeId: 2,
    rankBorder: {
      1: 6417801, 10: 3530071, 50: 2232530, 100: 1923617, 500: 785080, 1000: 594166, 2000: 424028, 3000: 379290, 4000: 323465, 5000: 292329,
      6000: 269101, 7000: 255123, 8000: 245793, 9000: 238688, 10000: 233049, 20000: 183754, 30000: 163200, 40000: 150496, 50000: 141041,
    },
    voltageRankBorder: {
      1: 11404140, 10: 10422330, 50: 9671340, 100: 9344400, 300: 8634059, 500: 8320372, 1000: 7788738, 2000: 6882418, 3000: 6336893, 4000: 5901786, 5000: 5576206,
      6000: 5314222, 7000: 5095190, 8000: 4899917, 9000: 4733282, 10000: 4606854, 15000: 4018467, 20000: 3572302, 25000: 3121236,
    },
    voltageRankSongs: ['Evergreen', 'KOKORO Magic "A to Z"', 'Snow halation'],
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 2, 1],
      50000: [1, 1, 1],
    },
    startDate: '2020.03.06.',
    endDate: '2020.03.16.',
  },
  12: {
    name: 'マジカル・タイム！',
    eventTypeId: 1,
    rankBorder: {
      1: 9000227, 10: 4104513, 50: 2602987, 100: 2372815, 1000: 732923, 3000: 443413, 10000: 274467, 30000: 191789, 50000: 171320,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 2, 1],
      50000: [1, 1, 1],
    },
    startDate: '2020.03.23.',
    endDate: '2020.03.31.',
  },
  13: {
    name: 'ベジタブル☆クッキング！',
    eventTypeId: 2,
    rankBorder: {
      1: 7668220, 10: 5099090, 50: 3040635, 100: 2640986, 500: 861049, 1000: 644836, 2000: 431067, 3000: 379775, 4000: 318968, 5000: 289521,
      6000: 266129, 7000: 251486, 8000: 241690, 9000: 235191, 10000: 229730, 20000: 177253, 30000: 160368, 40000: 150522, 50000: 142880,
    },
    voltageRankBorder: {
      1: 14167325, 10: 13093899, 50: 12205787, 100: 11803780, 300: 11123339, 500: 10763463, 1000: 10185320, 2000: 9277545, 3000: 8674999, 4000: 8204009, 5000: 7817113,
      6000: 7487932, 7000: 7211651, 8000: 6967599, 9000: 6760919, 10000: 6599443, 15000: 5729405, 20000: 4987966, 25000: 4170711,
    },
    voltageRankSongs: ['Music S.T.A.R.T!!', 'Step! ZERO to ONE', 'ドキピポ☆エモーション'],
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 2, 1],
      50000: [1, 1, 1],
    },
    startDate: '2020.04.06.',
    endDate: '2020.04.15.',
  },
  14: {
    name: '青春のアイススケート',
    eventTypeId: 1,
    rankBorder: {
      1: 10424502, 10: 6806417, 50: 4157398, 100: 3575670, 1000: 909654, 3000: 475152, 10000: 286105, 30000: 206544, 50000: 190080,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 2, 1],
      50000: [1, 1, 1],
    },
    startDate: '2020.04.21.',
    endDate: '2020.04.30.',
  },
  15: {
    name: '温泉旅行ラプソディ',
    eventTypeId: 2,
    rankBorder: {},
    voltageRankBorder: {},
    voltageRankSongs: ['NO EXIT ORION', 'HAPPY PARTY TRAIN', 'TOKIMEKI Runners'],
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 2, 1],
      50000: [1, 1, 1],
    },
    startDate: '2020.05.07.',
    endDate: '2020.05.15.',
  },
  16: {
    name: '取り戻せ！笑顔のラーメン',
    eventTypeId: 1,
    rankBorder: {
      1000: 658394, 3000: 374081, 10000: 232052, 30000: 180277, 50000: 153830,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 2, 1],
      50000: [1, 1, 1],
    },
    startDate: '2020.05.21.',
    endDate: '2020.05.29.',
  },
  17: {
    name: '3人のプリンセス',
    eventTypeId: 2,
    rankBorder: {
      1: 6060260, 10: 4075535, 50: 2332365, 100: 2023006, 500: 733403, 1000: 543080, 2000: 379242, 3000: 336840, 4000: 286625, 5000: 260947,
      6000: 242347, 7000: 230248, 8000: 222806, 9000: 217616, 10000: 213385, 20000: 177042, 30000: 161961, 40000: 151777, 50000: 141562,
    },
    voltageRankBorder: {
      1: 12506143, 10: 12104394, 50: 11679598, 100: 11407640, 300: 10742583, 500: 10411298, 1000: 9947739, 2000: 9256237, 3000: 8769017, 4000: 8413622, 5000: 8100509,
      6000: 7815689, 7000: 7564277, 8000: 7340749, 9000: 7138496, 10000: 6975373, 15000: 6090043, 20000: 5275461, 25000: 4395224,
    },
    voltageRankSongs: ['START:DASH!!', 'Strawberry Trapper', 'オードリー'],
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 2, 1],
      50000: [1, 1, 1],
    },
    startDate: '2020.06.05.',
    endDate: '2020.06.15.',
  },
  18: {
    name: '君と、雨に歌えば',
    eventTypeId: 1,
    rankBorder: {
      1: 10267727, 10: 6160945, 50: 2778526, 100: 2326584, 1000: 657080, 3000: 397437, 10000: 231556, 30000: 167337, 50000: 143633,
    },
    rewardBorder: {
      100: [2, 2, 2],
      3000: [1, 2, 2],
      10000: [1, 2, 1],
      50000: [1, 1, 1],
    },
    startDate: '2020.06.22.',
    endDate: '2020.06.30.',
  },
  19: {
    name: 'ヨハネと花陽の事件簿',
    eventTypeId: 2,
    rankBorder: {},
    voltageRankBorder: {},
    voltageRankSongs: ['ユメノトビラ', 'スリリング・ワンウェイ', 'テレテレパシー'],
    rewardBorder: {},
    startDate: '2020.07.06.',
    endDate: '2020.07.15.',
  },
  10001: {
    name: 'スクスタビックライブ',
    eventTypeId: 3,
    rankBorder: {
      1: 132625656, 10: 129746664, 50: 124352736, 100: 120717037, 300: 113426887, 500: 109610360, 1000: 102102577, 2000: 92143210,
      3000: 85395754, 4000: 80156502, 5000: 75845631, 6000: 72329974, 7000: 69404886, 8000: 66764268, 9000: 64498070, 10000: 62488562,
      20000: 48179600, 30000: 38952424, 40000: 30567450, 50000: 22458670,
    },
    rewardBorder: {},
    targetSongs: ['嵐のなかの恋だから', '元気全開DAY! DAY! DAY!', '眠れる森に行きたいな'],
    bonusTarget: '3학년 +10%',
    prizes: [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    startDate: '2020.03.19.',
    endDate: '2020.03.23.',
  },
  10002: {
    name: '第1回スクスタビックライブ',
    eventTypeId: 3,
    rankBorder: {
      1: 158621927, 10: 155452440, 50: 147539654, 100: 142600777, 300: 134690453, 500: 130847256, 1000: 124227590, 2000: 115499656,
      3000: 108949653, 4000: 103877897, 5000: 99406162, 6000: 95818470, 7000: 92685384, 8000: 89960450, 9000: 87425658, 10000: 84893458,
      20000: 66215580, 30000: 53208002, 40000: 42821651, 50000: 32257801,
    },
    rewardBorder: {},
    targetSongs: ['それは僕たちの奇跡', 'Strawberry Trapper', 'Starlight'],
    bonusTarget: '1학년 +20%',
    prizes: [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    startDate: '2020.04.16.',
    endDate: '2020.04.20.',
  },
  10003: {
    name: '第2回スクスタビックライブ',
    eventTypeId: 3,
    rankBorder: {},
    rewardBorder: {},
    targetSongs: ['僕らのLIVE 君とのLIFE', 'トリコリコPLEASE!!', 'CHASE!!'],
    bonusTarget: '2학년 +20%',
    prizes: [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    startDate: '2020.05.16.',
    endDate: '2020.05.20.',
  },
  10004: {
    name: '第3回スクスタビックライブ',
    eventTypeId: 3,
    rankBorder: {
      1: 181844777, 10: 178496511, 50: 171428771, 100: 165976802, 300: 159323371, 500: 155848258, 1000: 150560174, 2000: 143190420,
      3000: 137735183, 4000: 132927965, 5000: 128855159, 6000: 125042416, 7000: 121528657, 8000: 118245417, 9000: 115060614, 10000: 112005700,
      20000: 86165207, 30000: 65521014, 40000: 48286043, 50000: 30891294,
    },
    rewardBorder: {},
    targetSongs: ['NO EXIT ORION', '青空Jumping Heart', '夢への一歩'],
    bonusTarget: 'Aqours +20%',
    prizes: [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    startDate: '2020.07.01.',
    endDate: '2020.07.05.',
  },
};
/* eslint-enable max-len, object-property-newline */
