interface GachaList {
  readonly [id: number]: {
    type: 'normal' | 'event' | 'pickup' | 'fes',
    name: string,
    startDate: string,
    endDate: string,
  },
}

/* eslint-disable object-curly-newline, max-len */
export const GACHA_LIST: GachaList = {
  1: { type: 'normal', name: 'リリース記念ガチャ', startDate: '2019.09.26.', endDate: '2019.10.31.' },
  2: { type: 'normal', name: 'オールスターガチャ', startDate: '2019.10.31.', endDate: '2019.11.30.' },
  3: { type: 'normal', name: 'オールスターガチャ', startDate: '2019.11.30.', endDate: '2019.12.31.' },

  10001: { type: 'event', name: '秘密のパーティー！ガチャ', startDate: '2019.10.03.', endDate: '2019.10.15.' },
  10002: { type: 'event', name: '和装モデルはお任せあれ！ガチャ', startDate: '2019.10.21.', endDate: '2019.10.31.' },
  10003: { type: 'event', name: '下町巡り珍道中ガチャ', startDate: '2019.11.06.', endDate: '2019.11.15.' },
  10004: { type: 'event', name: 'ハイキングでリフレッシュ！ガチャ', startDate: '2019.11.21.', endDate: '2019.11.30.' },
  10005: { type: 'event', name: '素敵なところへご招待！ガチャ', startDate: '2019.12.06.', endDate: '2019.12.16.' },

  20001: { type: 'pickup', name: 'ピックアップガチャ (UR 요시코)', startDate: '2019.10.15.', endDate: '2019.10.21.' },
  20002: { type: 'pickup', name: 'ピックアップガチャ (UR 우미)', startDate: '2019.10.31.', endDate: '2019.11.06.' },
  20003: { type: 'pickup', name: 'ピックアップガチャ (UR 리코)', startDate: '2019.11.15.', endDate: '2019.11.21.' },

  30001: { type: 'fes', name: 'スクスタフェス', startDate: '2019.11.30.', endDate: '2019.12.06.' },
};
/* eslint-enable object-curly-newline, max-len */
