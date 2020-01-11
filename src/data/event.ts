interface EventType {
  readonly [id: number]: {
    readonly type: string,
    readonly krName: string,
  },
}

export const EVENT_TYPE: EventType = {
  1: { type: 'story', krName: '스토리 이벤트' },
  2: { type: 'exchange', krName: '교환소 이벤트' },
};

interface Event {
  readonly [id: number]: (
    {
      readonly name: string,
      readonly rankBorder: {
        readonly [rank: number]: number,
      },
      readonly ingameInfo: number[],
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
      readonly voltageRankBorderIngameInfo: number[],
      readonly voltageRankSongs: string[], // TODO: Let it link with songs table
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
    ingameInfo: [2000, 4000, 9000, 30000, 50000],
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
    ingameInfo: [2000, 4000, 9000, 30000, 50000],
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
    ingameInfo: [2000, 4000, 9000, 30000, 50000],
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
    ingameInfo: [1000, 3000, 10000, 30000, 50000],
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
    ingameInfo: [1000, 3000, 10000, 30000, 50000],
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
    ingameInfo: [1000, 3000, 10000, 30000, 50000],
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
      1: 0, 10: 0, 50: 0, 100: 0, 500: 0, 1000: 0, 2000: 0, 3000: 0, 4000: 0, 5000: 0,
      6000: 0, 7000: 0, 8000: 0, 9000: 0, 10000: 0, 20000: 0, 30000: 0, 40000: 0, 50000: 0,
    },
    ingameInfo: [500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000],
    voltageRankBorder: {
      1: 0, 10: 0, 50: 0, 100: 0, 300: 0, 500: 0, 1000: 0, 2000: 0, 3000: 0, 4000: 0, 5000: 0,
      6000: 0, 7000: 0, 8000: 0, 9000: 0, 10000: 0, 15000: 0, 20000: 0, 25000: 0,
    },
    voltageRankBorderIngameInfo: [50, 100, 300, 500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000, 20000, 25000],
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
};
/* eslint-enable max-len, object-property-newline */
