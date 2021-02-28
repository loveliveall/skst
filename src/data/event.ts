export type EventType = {
  readonly [id: number]: {
    readonly type: string,
    readonly krName: string,
  },
};

export const EVENT_TYPE: EventType = {
  1: { type: 'story', krName: '스토리 이벤트' },
  2: { type: 'exchange', krName: '교환소 이벤트' },
};

export type Event = {
  readonly [id: number]: (
    {
      readonly name: string,
      readonly startDate: string,
      readonly endDate: string,
    }
  ) & (
    {
      readonly eventTypeId: 1,
    } | {
      readonly eventTypeId: 2,
      readonly voltageRankSongs: string[], // TODO: Let it link with songs table
    }
  ),
};

export const EVENT: Event = {
  1: {
    name: '秘密のパーティー！',
    eventTypeId: 1,
    startDate: '2019.10.03.',
    endDate: '2019.10.15.',
  },
  2: {
    name: '和装モデルはお任せあれ！',
    eventTypeId: 1,
    startDate: '2019.10.21.',
    endDate: '2019.10.31.',
  },
  3: {
    name: '下町巡り珍道中',
    eventTypeId: 1,
    startDate: '2019.11.06.',
    endDate: '2019.11.15.',
  },
  4: {
    name: 'ハイキングでリフレッシュ！',
    eventTypeId: 1,
    startDate: '2019.11.21.',
    endDate: '2019.11.30.',
  },
  5: {
    name: '素敵なところへご招待！',
    eventTypeId: 1,
    startDate: '2019.12.06.',
    endDate: '2019.12.16.',
  },
  6: {
    name: 'スクールアイドルトレイン発車！',
    eventTypeId: 1,
    startDate: '2019.12.23.',
    endDate: '2019.12.31.',
  },
  7: {
    name: '海の上の大熱戦',
    eventTypeId: 2,
    voltageRankSongs: ['あなたの理想のヒロイン', '青空Jumping Heart', 'それは僕たちの奇跡'],
    startDate: '2020.01.06.',
    endDate: '2020.01.15.',
  },
  8: {
    name: 'スペシャルスイーツを召し上がれ♡',
    eventTypeId: 1,
    startDate: '2020.01.22.',
    endDate: '2020.01.31.',
  },
  9: {
    name: '二人の奏でる音',
    eventTypeId: 2,
    voltageRankSongs: ['PSYCHIC FIRE', '未來の僕らは知ってるよ', 'ダイアモンド'],
    startDate: '2020.02.06.',
    endDate: '2020.02.14.',
  },
  10: {
    name: 'それゆけUMA捜索隊',
    eventTypeId: 1,
    startDate: '2020.02.20.',
    endDate: '2020.02.28.',
  },
  11: {
    name: 'いたずらオオカミを捕まえろ！',
    eventTypeId: 2,
    voltageRankSongs: ['Evergreen', 'KOKORO Magic "A to Z"', 'Snow halation'],
    startDate: '2020.03.06.',
    endDate: '2020.03.16.',
  },
  12: {
    name: 'マジカル・タイム！',
    eventTypeId: 1,
    startDate: '2020.03.23.',
    endDate: '2020.03.31.',
  },
  13: {
    name: 'ベジタブル☆クッキング！',
    eventTypeId: 2,
    voltageRankSongs: ['Music S.T.A.R.T!!', 'Step! ZERO to ONE', 'ドキピポ☆エモーション'],
    startDate: '2020.04.06.',
    endDate: '2020.04.15.',
  },
  14: {
    name: '青春のアイススケート',
    eventTypeId: 1,
    startDate: '2020.04.21.',
    endDate: '2020.04.30.',
  },
  15: {
    name: '温泉旅行ラプソディ',
    eventTypeId: 2,
    voltageRankSongs: ['NO EXIT ORION', 'HAPPY PARTY TRAIN', 'TOKIMEKI Runners'],
    startDate: '2020.05.07.',
    endDate: '2020.05.15.',
  },
  16: {
    name: '取り戻せ！笑顔のラーメン',
    eventTypeId: 1,
    startDate: '2020.05.21.',
    endDate: '2020.05.29.',
  },
  17: {
    name: '3人のプリンセス',
    eventTypeId: 2,
    voltageRankSongs: ['START:DASH!!', 'Strawberry Trapper', 'オードリー'],
    startDate: '2020.06.05.',
    endDate: '2020.06.15.',
  },
  18: {
    name: '君と、雨に歌えば',
    eventTypeId: 1,
    startDate: '2020.06.22.',
    endDate: '2020.06.30.',
  },
  19: {
    name: 'ヨハネと花陽の事件簿',
    eventTypeId: 2,
    voltageRankSongs: ['ユメノトビラ', 'スリリング・ワンウェイ', 'テレテレパシー'],
    startDate: '2020.07.06.',
    endDate: '2020.07.15.',
  },
  20: {
    name: '璃奈のビックリお化け屋敷',
    eventTypeId: 1,
    startDate: '2020.07.22.',
    endDate: '2020.07.31.',
  },
  21: {
    name: '勝ち抜け！スポーツバトル',
    eventTypeId: 2,
    voltageRankSongs: ['僕らのLIVE 君とのLIFE', 'Wake up, Challenger!!', 'MELODY'],
    startDate: '2020.08.06.',
    endDate: '2020.08.14.',
  },
  22: {
    name: 'オモチャ屋さんパニック☆',
    eventTypeId: 1,
    startDate: '2020.08.21.',
    endDate: '2020.08.31.',
  },
  23: {
    name: 'チョイ悪イメチェン計画',
    eventTypeId: 2,
    voltageRankSongs: ['HEART to HEART!', 'SKY JOURNEY', 'あなたの理想のヒロイン'],
    startDate: '2020.09.07.',
    endDate: '2020.09.15.',
  },
  24: {
    name: '秋の味覚を召し上がれ！',
    eventTypeId: 1,
    startDate: '2020.09.21.',
    endDate: '2020.09.30.',
  },
  25: {
    name: '月のウサギと女神様',
    eventTypeId: 2,
    voltageRankSongs: ['LOVELESS WORLD', '恋になりたいAQUARIUM', '哀温ノ詩'],
    startDate: '2020.10.07.',
    endDate: '2020.10.15.',
  },
  26: {
    name: '楽しいハロウィンパーティー',
    eventTypeId: 1,
    startDate: '2020.10.22.',
    endDate: '2020.10.30.',
  },
  27: {
    name: '駆け抜けろランウェイ',
    eventTypeId: 2,
    voltageRankSongs: ['Wonder zone', 'トリコリコPLEASE!!', 'My Own Fairy-Tale'],
    startDate: '2020.11.08.',
    endDate: '2020.11.15.',
  },
  28: {
    name: '最高の遊園地攻略法！？',
    eventTypeId: 1,
    startDate: '2020.11.22.',
    endDate: '2020.11.30.',
  },
  29: {
    name: '１番のクリスマスプレゼント',
    eventTypeId: 2,
    voltageRankSongs: ['Snow halation', 'MIRACLE WAVE', 'Margaret'],
    startDate: '2020.12.07.',
    endDate: '2020.12.14.',
  },
  30: {
    name: 'イルミネーションナイト',
    eventTypeId: 1,
    startDate: '2020.12.21.',
    endDate: '2020.12.28.',
  },
  31: {
    name: 'あけまして、浦の星流初詣',
    eventTypeId: 2,
    voltageRankSongs: ['それは僕たちの奇跡', 'Landing action Yeah!!', '開花宣言'],
    startDate: '2021.01.07.',
    endDate: '2021.01.14.',
  },
  32: {
    name: '新春丑年特別エクササイズ',
    eventTypeId: 1,
    startDate: '2021.01.22.',
    endDate: '2021.01.30.',
  },
  33: {
    name: '愛がたっぷり、バレンタイン♪',
    eventTypeId: 2,
    voltageRankSongs: ['Wonderful Rush', '君のこころは輝いてるかい？', 'アナログハート'],
    startDate: '2021.02.07.',
    endDate: '2021.02.14.',
  },
  34: {
    name: '未来のラボは大騒ぎ',
    eventTypeId: 1,
    startDate: '2021.02.20.',
    endDate: '2021.02.27.',
  },
};
