interface Gacha {
  readonly [id: number]: (
    {
      name: string,
      startDate: string,
      endDate: string,
    }
  ) & (
    {
      type: 'normal' | 'pickup' | 'fes',
    } | {
      type: 'event',
      eventId: number,
    }
  ),
}

/* eslint-disable object-curly-newline, max-len */
export const GACHA: Gacha = {
  1: { type: 'normal', name: 'リリース記念ガチャ', startDate: '2019.09.26.', endDate: '2019.10.31.' },
  2: { type: 'normal', name: 'オールスターガチャ', startDate: '2019.10.31.', endDate: '2019.11.30.' },
  3: { type: 'normal', name: 'オールスターガチャ', startDate: '2019.11.30.', endDate: '2019.12.31.' },
  4: { type: 'normal', name: 'オールスターガチャ', startDate: '2019.12.31.', endDate: '2020.01.31.' },

  10001: { type: 'event', name: '秘密のパーティー！ガチャ', startDate: '2019.10.03.', endDate: '2019.10.15.', eventId: 1 },
  10002: { type: 'event', name: '和装モデルはお任せあれ！ガチャ', startDate: '2019.10.21.', endDate: '2019.10.31.', eventId: 2 },
  10003: { type: 'event', name: '下町巡り珍道中ガチャ', startDate: '2019.11.06.', endDate: '2019.11.15.', eventId: 3 },
  10004: { type: 'event', name: 'ハイキングでリフレッシュ！ガチャ', startDate: '2019.11.21.', endDate: '2019.11.30.', eventId: 4 },
  10005: { type: 'event', name: '素敵なところへご招待！ガチャ', startDate: '2019.12.06.', endDate: '2019.12.16.', eventId: 5 },
  10006: { type: 'event', name: 'スクールアイドルトレイン発車！ガチャ', startDate: '2019.12.23.', endDate: '2019.12.31.', eventId: 6 },
  10007: { type: 'event', name: '海の上の大熱戦ガチャ前編', startDate: '2020.01.06.', endDate: '2020.01.10.', eventId: 7 },
  10008: { type: 'event', name: '海の上の大熱戦ガチャ後編', startDate: '2020.01.10.', endDate: '2020.01.15.', eventId: 7 },

  20001: { type: 'pickup', name: 'ピックアップガチャ (UR 요시코)', startDate: '2019.10.15.', endDate: '2019.10.21.' },
  20002: { type: 'pickup', name: 'ピックアップガチャ (UR 우미)', startDate: '2019.10.31.', endDate: '2019.11.06.' },
  20003: { type: 'pickup', name: 'ピックアップガチャ (UR 리코)', startDate: '2019.11.15.', endDate: '2019.11.21.' },
  20004: { type: 'pickup', name: 'ピックアップガチャ (UR 린)', startDate: '2019.12.16.', endDate: '2019.12.23.' },
  20005: { type: 'pickup', name: 'ピックアップガチャ (UR 하나요)', startDate: '2020.01.15.', endDate: '2020.01.22.' },

  30001: { type: 'fes', name: 'スクスタフェス', startDate: '2019.11.30.', endDate: '2019.12.06.' },
  30002: { type: 'fes', name: 'スクスタフェス', startDate: '2019.12.31.', endDate: '2020.01.06.' },
};
/* eslint-enable object-curly-newline, max-len */
