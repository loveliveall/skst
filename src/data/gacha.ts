export interface Gacha {
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
    } | {
      type: 'reprint',
      desc: string,
    }
  ),
}

/* eslint-disable object-curly-newline, max-len */
export const GACHA: Gacha = {
  1: { type: 'normal', name: 'リリース記念ガチャ', startDate: '2019.09.26.', endDate: '2019.10.31.' },
  2: { type: 'normal', name: 'オールスターガチャ', startDate: '2019.10.31.', endDate: '2019.11.30.' },
  3: { type: 'normal', name: 'オールスターガチャ', startDate: '2019.11.30.', endDate: '2019.12.31.' },
  4: { type: 'normal', name: 'オールスターガチャ', startDate: '2019.12.31.', endDate: '2020.01.31.' },
  5: { type: 'normal', name: 'オールスターガチャ', startDate: '2020.01.31.', endDate: '2020.02.28.' },
  6: { type: 'normal', name: 'オールスターガチャ', startDate: '2020.02.28.', endDate: '2020.03.31.' },
  7: { type: 'normal', name: 'オールスターガチャ', startDate: '2020.03.31.', endDate: '2020.04.30.' },
  8: { type: 'normal', name: 'オールスターガチャ', startDate: '2020.04.30.', endDate: '2020.05.29.' },
  9: { type: 'normal', name: 'オールスターガチャ', startDate: '2020.05.29.', endDate: '2020.06.30.' },
  10: { type: 'normal', name: 'オールスターガチャ', startDate: '2020.06.30.', endDate: '2020.07.31.' },

  10001: { type: 'event', name: '秘密のパーティー！ガチャ', startDate: '2019.10.03.', endDate: '2019.10.15.', eventId: 1 },
  10002: { type: 'event', name: '和装モデルはお任せあれ！ガチャ', startDate: '2019.10.21.', endDate: '2019.10.31.', eventId: 2 },
  10003: { type: 'event', name: '下町巡り珍道中ガチャ', startDate: '2019.11.06.', endDate: '2019.11.15.', eventId: 3 },
  10004: { type: 'event', name: 'ハイキングでリフレッシュ！ガチャ', startDate: '2019.11.21.', endDate: '2019.11.30.', eventId: 4 },
  10005: { type: 'event', name: '素敵なところへご招待！ガチャ', startDate: '2019.12.06.', endDate: '2019.12.16.', eventId: 5 },
  10006: { type: 'event', name: 'スクールアイドルトレイン発車！ガチャ', startDate: '2019.12.23.', endDate: '2019.12.31.', eventId: 6 },
  10007: { type: 'event', name: '海の上の大熱戦ガチャ前編', startDate: '2020.01.06.', endDate: '2020.01.10.', eventId: 7 },
  10008: { type: 'event', name: '海の上の大熱戦ガチャ後編', startDate: '2020.01.10.', endDate: '2020.01.15.', eventId: 7 },
  10009: { type: 'event', name: 'スペシャルスイーツを召し上がれ♡ガチャ前編', startDate: '2020.01.22.', endDate: '2020.01.26.', eventId: 8 },
  10010: { type: 'event', name: 'スペシャルスイーツを召し上がれ♡ガチャ後編', startDate: '2020.01.26.', endDate: '2020.01.31.', eventId: 8 },
  10011: { type: 'event', name: '二人の奏でる音ガチャ前編', startDate: '2020.02.06.', endDate: '2020.02.10.', eventId: 9 },
  10012: { type: 'event', name: '二人の奏でる音ガチャ後編', startDate: '2020.02.10.', endDate: '2020.02.14.', eventId: 9 },
  10013: { type: 'event', name: 'それゆけUMA捜索隊ガチャ前編', startDate: '2020.02.20.', endDate: '2020.02.24.', eventId: 10 },
  10014: { type: 'event', name: 'それゆけUMA捜索隊ガチャ後編', startDate: '2020.02.24.', endDate: '2020.02.28.', eventId: 10 },
  10015: { type: 'event', name: 'いたずらオオカミを捕まえろ！ガチャ前編', startDate: '2020.03.06.', endDate: '2020.03.11.', eventId: 11 },
  10016: { type: 'event', name: 'いたずらオオカミを捕まえろ！ガチャ後編', startDate: '2020.03.11.', endDate: '2020.03.16.', eventId: 11 },
  10017: { type: 'event', name: 'マジカル・タイム！ガチャ前編', startDate: '2020.03.23.', endDate: '2020.03.27.', eventId: 12 },
  10018: { type: 'event', name: 'マジカル・タイム！ガチャ後編', startDate: '2020.03.27.', endDate: '2020.03.31.', eventId: 12 },
  10019: { type: 'event', name: 'ベジタブル☆クッキング！ガチャ前編', startDate: '2020.04.06.', endDate: '2020.04.11.', eventId: 13 },
  10020: { type: 'event', name: 'ベジタブル☆クッキング！ガチャ後編', startDate: '2020.04.11.', endDate: '2020.04.15.', eventId: 13 },
  10021: { type: 'event', name: '青春のアイススケートガチャ前編', startDate: '2020.04.21.', endDate: '2020.04.25.', eventId: 14 },
  10022: { type: 'event', name: '青春のアイススケートガチャ後編', startDate: '2020.04.25.', endDate: '2020.04.30.', eventId: 14 },
  10023: { type: 'event', name: '温泉旅行ラプソディガチャ前編', startDate: '2020.05.07.', endDate: '2020.05.11.', eventId: 15 },
  10024: { type: 'event', name: '温泉旅行ラプソディガチャ後編', startDate: '2020.05.11.', endDate: '2020.05.15.', eventId: 15 },
  10025: { type: 'event', name: '取り戻せ！笑顔のラーメンガチャ前編', startDate: '2020.05.21.', endDate: '2020.05.25.', eventId: 16 },
  10026: { type: 'event', name: '取り戻せ！笑顔のラーメンガチャ後編', startDate: '2020.05.25.', endDate: '2020.05.29.', eventId: 16 },
  10027: { type: 'event', name: '3人のプリンセスガチャ前編', startDate: '2020.06.05.', endDate: '2020.06.10.', eventId: 17 },
  10028: { type: 'event', name: '3人のプリンセスガチャ後編', startDate: '2020.06.10.', endDate: '2020.06.15.', eventId: 17 },
  10029: { type: 'event', name: '君と、雨に歌えばガチャ前編', startDate: '2020.06.22.', endDate: '2020.06.26.', eventId: 18 },
  10030: { type: 'event', name: '君と、雨に歌えばガチャ後編', startDate: '2020.06.26.', endDate: '2020.06.30.', eventId: 18 },
  10031: { type: 'event', name: 'ヨハネと花陽の事件簿ガチャ前編', startDate: '2020.07.06.', endDate: '2020.07.10.', eventId: 19 },
  10032: { type: 'event', name: 'ヨハネと花陽の事件簿ガチャ後編', startDate: '2020.07.10.', endDate: '2020.07.15.', eventId: 19 },
  10033: { type: 'event', name: '璃奈のビックリお化け屋敷ガチャ前編', startDate: '2020.07.22.', endDate: '2020.07.26.', eventId: 20 },
  10034: { type: 'event', name: '璃奈のビックリお化け屋敷ガチャ後編', startDate: '2020.07.26.', endDate: '2020.07.31.', eventId: 20 },

  20001: { type: 'pickup', name: 'ピックアップガチャ (UR 요시코)', startDate: '2019.10.15.', endDate: '2019.10.21.' },
  20002: { type: 'pickup', name: 'ピックアップガチャ (UR 우미)', startDate: '2019.10.31.', endDate: '2019.11.06.' },
  20003: { type: 'pickup', name: 'ピックアップガチャ (UR 리코)', startDate: '2019.11.15.', endDate: '2019.11.21.' },
  20004: { type: 'pickup', name: 'ピックアップガチャ (UR 린)', startDate: '2019.12.16.', endDate: '2019.12.23.' },
  20005: { type: 'pickup', name: 'ピックアップガチャ (UR 하나요)', startDate: '2020.01.15.', endDate: '2020.01.22.' },
  20006: { type: 'pickup', name: 'ピックアップガチャ (UR 리나)', startDate: '2020.02.14.', endDate: '2020.02.20' },
  20007: { type: 'pickup', name: 'ピックアップガチャ (UR 카린)', startDate: '2020.03.16.', endDate: '2020.03.23.' },
  20008: { type: 'pickup', name: 'メンバーピックアップガチャ (시즈쿠, 하나요)', startDate: '2020.04.15.', endDate: '2020.04.21.' },
  20009: { type: 'pickup', name: 'メンバーピックアップガチャ (마리, 우미)', startDate: '2020.05.15.', endDate: '2020.05.21.' },
  20010: { type: 'pickup', name: 'メンバーピックアップガチャ (카스미, 코토리)', startDate: '2020.06.15.', endDate: '2020.06.22.' },
  20011: { type: 'pickup', name: 'メンバーピックアップガチャ (마키, 세츠나)', startDate: '2020.07.15.', endDate: '2020.07.22.' },

  30001: { type: 'fes', name: 'スクスタフェス', startDate: '2019.11.30.', endDate: '2019.12.06.' },
  30002: { type: 'fes', name: 'スクスタフェス', startDate: '2019.12.31.', endDate: '2020.01.06.' },
  30003: { type: 'fes', name: 'スクスタフェス', startDate: '2020.01.31.', endDate: '2020.02.06.' },
  30004: { type: 'fes', name: 'スクスタフェス', startDate: '2020.02.28.', endDate: '2020.03.06.' },
  30005: { type: 'fes', name: 'スクスタフェス', startDate: '2020.03.31.', endDate: '2020.04.06.' },
  30006: { type: 'fes', name: 'スクスタフェス', startDate: '2020.04.30.', endDate: '2020.05.07.' },
  30007: { type: 'fes', name: 'スクスタフェス', startDate: '2020.05.29.', endDate: '2020.06.05.' },
  30008: { type: 'fes', name: 'スクスタフェス', startDate: '2020.06.30.', endDate: '2020.07.06.' },
  30009: { type: 'fes', name: 'スクスタフェス', startDate: '2020.07.28.', endDate: '2020.08.06.' },

  40001: { type: 'reprint', name: 'スクスタハーフアニバーサリー記念♪衣装復刻ガチャ', startDate: '2020.03.09.', endDate: '2020.03.27.', desc: 'Snow halation, 君のこころは輝いてるかい？, わくわくアニマル 의상의 SR 27인 복각' },
};
/* eslint-enable object-curly-newline, max-len */
