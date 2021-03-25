export type Gacha = {
  readonly [id: number]: (
    {
      name: string,
      startDate: string,
      endDate: string,
    }
  ) & (
    {
      type: 'allstar',
    } | {
      type: 'pickup',
    } | {
      type: 'event',
      eventId: number,
    } | {
      type: 'fes',
      desc?: string,
    } | {
      type: 'party',
    }
  ),
};
export type GachaType = Gacha[number]['type'];

export const GACHA_TYPES: GachaType[] = ['allstar', 'pickup', 'event', 'fes', 'party'];

/* eslint-disable object-curly-newline, max-len */
export const GACHA: Gacha = {
  1: { type: 'allstar', name: 'リリース記念ガチャ', startDate: '2019.09.26.', endDate: '2019.10.31.' },
  2: { type: 'allstar', name: 'オールスターガチャ', startDate: '2019.10.31.', endDate: '2019.11.30.' },
  3: { type: 'allstar', name: 'オールスターガチャ', startDate: '2019.11.30.', endDate: '2019.12.31.' },
  4: { type: 'allstar', name: 'オールスターガチャ', startDate: '2019.12.31.', endDate: '2020.01.31.' },
  5: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.01.31.', endDate: '2020.02.28.' },
  6: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.02.28.', endDate: '2020.03.31.' },
  7: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.03.31.', endDate: '2020.04.30.' },
  8: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.04.30.', endDate: '2020.05.29.' },
  9: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.05.29.', endDate: '2020.06.30.' },
  10: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.06.30.', endDate: '2020.07.31.' },
  11: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.07.31.', endDate: '2020.08.31.' },
  12: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.08.31.', endDate: '2020.09.30.' },
  13: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.09.30.', endDate: '2020.10.31.' },
  14: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.10.31.', endDate: '2020.11.30.' },
  15: { type: 'allstar', name: 'オールスターガチャ', startDate: '2020.12.01.', endDate: '2020.12.31.' },
  16: { type: 'allstar', name: 'オールスターガチャ', startDate: '2021.01.01.', endDate: '2021.01.31.' },

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
  10035: { type: 'event', name: '勝ち抜け！スポーツバトルガチャ前編', startDate: '2020.08.06.', endDate: '2020.08.10.', eventId: 21 },
  10036: { type: 'event', name: '勝ち抜け！スポーツバトルガチャ後編', startDate: '2020.08.10.', endDate: '2020.08.14.', eventId: 21 },
  10037: { type: 'event', name: 'オモチャ屋さんパニック☆ガチャ前編', startDate: '2020.08.18.', endDate: '2020.08.31.', eventId: 22 },
  10038: { type: 'event', name: 'オモチャ屋さんパニック☆ガチャ後編', startDate: '2020.08.21.', endDate: '2020.08.31.', eventId: 22 },
  10039: { type: 'event', name: 'チョイ悪イメチェン計画ガチャ前編', startDate: '2020.09.04.', endDate: '2020.09.15.', eventId: 23 },
  10040: { type: 'event', name: 'チョイ悪イメチェン計画ガチャ後編', startDate: '2020.09.07.', endDate: '2020.09.15.', eventId: 23 },
  10041: { type: 'event', name: '秋の味覚を召し上がれ！ガチャ前編', startDate: '2020.09.18.', endDate: '2020.09.30.', eventId: 24 },
  10042: { type: 'event', name: '秋の味覚を召し上がれ！ガチャ後編', startDate: '2020.09.21.', endDate: '2020.09.30.', eventId: 24 },
  10043: { type: 'event', name: '月のウサギと女神様ガチャ前編', startDate: '2020.10.04.', endDate: '2020.10.15.', eventId: 25 },
  10044: { type: 'event', name: '月のウサギと女神様ガチャ後編', startDate: '2020.10.07.', endDate: '2020.10.15.', eventId: 25 },
  10045: { type: 'event', name: '楽しいハロウィンパーティーガチャ前編', startDate: '2020.10.19.', endDate: '2020.10.30.', eventId: 26 },
  10046: { type: 'event', name: '楽しいハロウィンパーティーガチャ後編', startDate: '2020.10.22.', endDate: '2020.10.30.', eventId: 26 },
  10047: { type: 'event', name: '駆け抜けろランウェイガチャ前編', startDate: '2020.11.05.', endDate: '2020.11.15.', eventId: 27 },
  10048: { type: 'event', name: '駆け抜けろランウェイガチャ後編', startDate: '2020.11.08.', endDate: '2020.11.15.', eventId: 27 },
  10049: { type: 'event', name: '最高の遊園地攻略法！？ガチャ前編', startDate: '2020.11.19.', endDate: '2020.11.30.', eventId: 28 },
  10050: { type: 'event', name: '最高の遊園地攻略法！？ガチャ後編', startDate: '2020.11.22.', endDate: '2020.11.30.', eventId: 28 },
  10051: { type: 'event', name: '１番のクリスマスプレゼントガチャ前編', startDate: '2020.12.04.', endDate: '2020.12.14.', eventId: 29 },
  10052: { type: 'event', name: '１番のクリスマスプレゼントガチャ後編', startDate: '2020.12.07.', endDate: '2020.12.14.', eventId: 29 },
  10053: { type: 'event', name: 'イルミネーションナイトガチャ前編', startDate: '2020.12.18.', endDate: '2020.12.28.', eventId: 30 },
  10054: { type: 'event', name: 'イルミネーションナイトガチャ後編', startDate: '2020.12.21.', endDate: '2020.12.28.', eventId: 30 },
  10055: { type: 'event', name: 'あけまして、浦の星流初詣ガチャ', startDate: '2021.01.01.', endDate: '2021.01.14.', eventId: 31 },
  10056: { type: 'event', name: '新春丑年特別エクササイズガチャ前編', startDate: '2021.01.19.', endDate: '2021.01.30.', eventId: 32 },
  10057: { type: 'event', name: '新春丑年特別エクササイズガチャ後編', startDate: '2021.01.22.', endDate: '2021.01.30.', eventId: 32 },
  10058: { type: 'event', name: '愛がたっぷり、バレンタイン♪ガチャ前編', startDate: '2021.02.04.', endDate: '2021.02.14.', eventId: 33 },
  10059: { type: 'event', name: '愛がたっぷり、バレンタイン♪ガチャ後編', startDate: '2021.02.07.', endDate: '2021.02.14.', eventId: 33 },
  10060: { type: 'event', name: '未来のラボは大騒ぎガチャ前編', startDate: '2021.02.17.', endDate: '2021.02.27.', eventId: 34 },
  10061: { type: 'event', name: '未来のラボは大騒ぎガチャ後編', startDate: '2021.02.20.', endDate: '2021.02.27.', eventId: 34 },
  10062: { type: 'event', name: '思いよ届け、ホワイトデーガチャ前編', startDate: '2021.03.04.', endDate: '2021.03.14.', eventId: 35 },
  10063: { type: 'event', name: '思いよ届け、ホワイトデーガチャ後編', startDate: '2021.03.07.', endDate: '2021.03.14.', eventId: 35 },
  10064: { type: 'event', name: 'レーザーサバイバル戦線！ガチャ前編', startDate: '2021.03.20.', endDate: '2021.03.30.', eventId: 36 },
  10065: { type: 'event', name: 'レーザーサバイバル戦線！ガチャ後編', startDate: '2021.03.23.', endDate: '2021.03.30.', eventId: 36 },

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
  20012: { type: 'pickup', name: 'メンバーピックアップガチャ (아유무, 치카)', startDate: '2020.08.14.', endDate: '2020.08.25.' },
  20013: { type: 'pickup', name: 'メンバーピックアップガチャ (노조미, 아이)', startDate: '2020.09.13.', endDate: '2020.09.25.' },
  20014: { type: 'pickup', name: 'メンバーピックアップガチャ (루비, 에리)', startDate: '2020.10.12.', endDate: '2020.10.25.' },
  20015: { type: 'pickup', name: 'メンバーピックアップガチャ (치카, 마키)', startDate: '2020.11.14.', endDate: '2020.11.26.' },
  20016: { type: 'pickup', name: 'メンバーピックアップガチャ (니코, 다이아)', startDate: '2020.12.14.', endDate: '2020.12.26.' },
  20017: { type: 'pickup', name: 'メンバーピックアップガチャ (아유무, 다이아)', startDate: '2021.01.14.', endDate: '2021.01.30.' },

  30001: { type: 'fes', name: 'スクスタフェス', startDate: '2019.11.30.', endDate: '2019.12.06.' },
  30002: { type: 'fes', name: 'スクスタフェス', startDate: '2019.12.31.', endDate: '2020.01.06.' },
  30003: { type: 'fes', name: 'スクスタフェス', startDate: '2020.01.31.', endDate: '2020.02.06.' },
  30004: { type: 'fes', name: 'スクスタフェス', startDate: '2020.02.28.', endDate: '2020.03.06.' },
  30005: { type: 'fes', name: 'スクスタフェス', startDate: '2020.03.31.', endDate: '2020.04.06.' },
  30006: { type: 'fes', name: 'スクスタフェス', startDate: '2020.04.30.', endDate: '2020.05.07.' },
  30007: { type: 'fes', name: 'スクスタフェス', startDate: '2020.05.29.', endDate: '2020.06.05.' },
  30008: { type: 'fes', name: 'スクスタフェス', startDate: '2020.06.30.', endDate: '2020.07.06.' },
  30009: { type: 'fes', name: 'スクスタフェス', startDate: '2020.07.28.', endDate: '2020.08.06.' },
  30010: { type: 'fes', name: 'ニジガクフェス', startDate: '2020.08.05.', endDate: '2020.08.14.', desc: '페스 카린, 세츠나, 엠마, 카나타, 아이 복각 및 시오리코 참전' },
  30011: { type: 'fes', name: 'スクスタフェス', startDate: '2020.08.26.', endDate: '2020.09.12.' },
  30012: { type: 'fes', name: '1st Anniversary μ\'sフェス', startDate: '2020.09.26.', endDate: '2020.10.11.', desc: '페스 마키, 코토리, 니코, 하나요, 우미, 에리, 린, 호노카 복각' },
  30013: { type: 'fes', name: '1st Anniversary Aqoursフェス', startDate: '2020.09.26.', endDate: '2020.10.11.', desc: '페스 요우, 요시코, 마리, 하나마루, 루비, 치카, 다이아, 리코 복각' },
  30014: { type: 'fes', name: 'スクスタフェス', startDate: '2020.09.30.', endDate: '2020.10.11.' },
  30015: { type: 'fes', name: 'スクスタフェス', startDate: '2020.10.26.', endDate: '2020.11.13.' },
  30016: { type: 'fes', name: 'スクスタフェス', startDate: '2020.11.26.', endDate: '2020.12.11.' },
  30017: { type: 'fes', name: 'スクスタフェス', startDate: '2020.12.26.', endDate: '2021.01.14.' },
  30018: { type: 'fes', name: 'スクスタフェス', startDate: '2021.01.30.', endDate: '2021.02.14.' },
  30019: { type: 'fes', name: 'スクスタフェス', startDate: '2021.02.28.', endDate: '2021.03.15.' },
  30020: { type: 'fes', name: 'スクスタフェス', startDate: '2021.03.26.', endDate: '2021.04.14.' },

  40001: { type: 'party', name: 'パーティーガチャ', startDate: '2021.02.14.', endDate: '2021.02.28.' },
  40002: { type: 'party', name: 'パーティーガチャ', startDate: '2021.03.15.', endDate: '2021.03.26.' },
};
/* eslint-enable object-curly-newline, max-len */
