import { MEMBER } from './memberMetadata';
import { RARITY, ATTRIBUTE, ROLE } from './cardMetadata';
import { PARAMETER } from './cardParameter';

export const FROM_MAP = {
  gacha: '가챠',
  event: '이벤트',
} as const;
export type FromTag = keyof typeof FROM_MAP;

export type Card = {
  readonly [id: number]: {
    readonly memberId: keyof typeof MEMBER,
    readonly title: string,
    readonly awakenTitle: string,
    readonly rarityId: keyof typeof RARITY,
    readonly attributeId: keyof typeof ATTRIBUTE,
    readonly roleId: keyof typeof ROLE,
    readonly fromId: [FromTag, number], // When the card first added?
    readonly outfitSeriesId?: number,
  },
};

/* eslint-disable object-curly-newline, max-len */
export const CARD: Card = {
  1: { memberId: 1, title: '音ノ木坂学院2年生', awakenTitle: '笑顔でいっぱいの女の子', rarityId: 1, attributeId: 1, roleId: 1, fromId: ['gacha', 1] },
  2: { memberId: 1, title: 'μ’ｓのリーダー', awakenTitle: '飽くなき挑戦', rarityId: 1, attributeId: 4, roleId: 2, fromId: ['gacha', 1] },
  3: { memberId: 1, title: 'ことりちゃんと食べるパン', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 2, roleId: 4, fromId: ['gacha', 1], outfitSeriesId: 1 },
  4: { memberId: 1, title: '動物園で対決！', awakenTitle: 'はいからロマンス', rarityId: 3, attributeId: 6, roleId: 3, fromId: ['gacha', 1] },
  5: { memberId: 2, title: '音ノ木坂学院3年生', awakenTitle: '才色兼備の生徒会長', rarityId: 1, attributeId: 3, roleId: 2, fromId: ['gacha', 1] },
  6: { memberId: 2, title: 'μ’ｓのムードメーカー', awakenTitle: 'かしこい、かわいい、エリーチカ', rarityId: 1, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  7: { memberId: 2, title: 'あなたのことを知りたくて', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 1], outfitSeriesId: 1 },
  8: { memberId: 2, title: 'エリーチカ先生のボウリング講座', awakenTitle: 'エターナルプロミス', rarityId: 3, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  9: { memberId: 3, title: '音ノ木坂学院2年生', awakenTitle: '幻のミナリンスキー', rarityId: 1, attributeId: 2, roleId: 2, fromId: ['gacha', 1] },
  10: { memberId: 3, title: 'μ’ｓの衣装担当', awakenTitle: 'おっとり優等生', rarityId: 1, attributeId: 5, roleId: 4, fromId: ['gacha', 1] },
  11: { memberId: 3, title: '眠れない日々', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 1, roleId: 3, fromId: ['gacha', 1], outfitSeriesId: 1 },
  12: { memberId: 3, title: 'あなたとの初めての思い出', awakenTitle: 'ラブリーポリス', rarityId: 3, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  13: { memberId: 4, title: '音ノ木坂学院2年生', awakenTitle: 'スクールアイドル兼弓道部員', rarityId: 1, attributeId: 3, roleId: 4, fromId: ['gacha', 1] },
  14: { memberId: 4, title: 'μ’ｓの歌詞担当', awakenTitle: 'みんなのしっかり者', rarityId: 1, attributeId: 4, roleId: 1, fromId: ['gacha', 1] },
  15: { memberId: 4, title: 'ほたる玉は海未の色', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 5, roleId: 3, fromId: ['gacha', 1], outfitSeriesId: 1 },
  16: { memberId: 4, title: '大和撫子パニック', awakenTitle: '夏祭りシンフォニー', rarityId: 3, attributeId: 1, roleId: 2, fromId: ['gacha', 1] },
  17: { memberId: 5, title: '音ノ木坂学院1年生', awakenTitle: 'スポーツ万能少女', rarityId: 1, attributeId: 4, roleId: 3, fromId: ['gacha', 1] },
  18: { memberId: 5, title: 'μ’ｓの元気印', awakenTitle: 'アスレチックスクールアイドル', rarityId: 1, attributeId: 2, roleId: 1, fromId: ['gacha', 1] },
  19: { memberId: 5, title: '至福の昼下がり', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['gacha', 1], outfitSeriesId: 1 },
  20: { memberId: 5, title: '凛がいるから大丈夫！', awakenTitle: '月光の踊り子', rarityId: 3, attributeId: 5, roleId: 2, fromId: ['gacha', 1] },
  21: { memberId: 6, title: '音ノ木坂学院1年生', awakenTitle: 'クールビューティー', rarityId: 1, attributeId: 6, roleId: 1, fromId: ['gacha', 1] },
  22: { memberId: 6, title: 'μ’ｓの作曲担当', awakenTitle: '信念を持つ才女', rarityId: 1, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  23: { memberId: 6, title: 'どっちが子ども？', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['gacha', 1], outfitSeriesId: 1 },
  24: { memberId: 6, title: '「真姫ちゃんと映画デート」', awakenTitle: 'スカーレットロワイヤル', rarityId: 3, attributeId: 3, roleId: 4, fromId: ['gacha', 1] },
  25: { memberId: 7, title: '音ノ木坂学院3年生', awakenTitle: 'オールラウンドな副会長', rarityId: 1, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  26: { memberId: 7, title: 'μ’ｓの導き手', awakenTitle: '音ノ木坂の魔女', rarityId: 1, attributeId: 3, roleId: 2, fromId: ['gacha', 1] },
  27: { memberId: 7, title: 'ため息なんか吹きとばせ！', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 1], outfitSeriesId: 1 },
  28: { memberId: 7, title: '星空の下で', awakenTitle: 'スイートナイトパレード', rarityId: 3, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  29: { memberId: 8, title: '音ノ木坂学院1年生', awakenTitle: '音ノ木坂の飼育係', rarityId: 1, attributeId: 5, roleId: 2, fromId: ['gacha', 1] },
  30: { memberId: 8, title: 'μ’ｓのスクールアイドル博士', awakenTitle: '控えめスクールアイドル', rarityId: 1, attributeId: 6, roleId: 4, fromId: ['gacha', 1] },
  31: { memberId: 8, title: '今までも、これからも', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 1, roleId: 1, fromId: ['gacha', 1], outfitSeriesId: 1 },
  32: { memberId: 8, title: 'これからが本番！', awakenTitle: 'チェリーフラッター', rarityId: 3, attributeId: 4, roleId: 3, fromId: ['gacha', 1] },
  33: { memberId: 9, title: '音ノ木坂学院3年生', awakenTitle: 'アイドル研究部部長', rarityId: 1, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  34: { memberId: 9, title: 'μ’ｓの小悪魔', awakenTitle: '大銀河宇宙No.1アイドル', rarityId: 1, attributeId: 2, roleId: 2, fromId: ['gacha', 1] },
  35: { memberId: 9, title: '本日のラッキーアイテム', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 5, roleId: 3, fromId: ['gacha', 1], outfitSeriesId: 1 },
  36: { memberId: 9, title: 'サプライズプレゼント', awakenTitle: 'My Sweet Devil', rarityId: 3, attributeId: 6, roleId: 1, fromId: ['gacha', 1] },

  37: { memberId: 11, title: '浦の星女学院2年生', awakenTitle: '普通怪獣ちかちー', rarityId: 1, attributeId: 1, roleId: 2, fromId: ['gacha', 1] },
  38: { memberId: 11, title: 'Aqoursのリーダー', awakenTitle: '諦めない心', rarityId: 1, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  39: { memberId: 11, title: '素直なキモチ', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['gacha', 1], outfitSeriesId: 2 },
  40: { memberId: 11, title: '浜辺をさんぽ', awakenTitle: 'サマーアドベンチャー', rarityId: 3, attributeId: 4, roleId: 4, fromId: ['gacha', 1] },
  41: { memberId: 12, title: '浦の星女学院2年生', awakenTitle: '東京からの転校生', rarityId: 1, attributeId: 5, roleId: 4, fromId: ['gacha', 1] },
  42: { memberId: 12, title: 'Aqoursの作曲担当', awakenTitle: 'あわてんぼうなピアニスト', rarityId: 1, attributeId: 4, roleId: 1, fromId: ['gacha', 1] },
  43: { memberId: 12, title: 'リトルデーモンリリー', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 6, roleId: 2, fromId: ['gacha', 1], outfitSeriesId: 2 },
  44: { memberId: 12, title: '水のシンフォニー', awakenTitle: 'ロイヤルエンジェル', rarityId: 3, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  45: { memberId: 13, title: '浦の星女学院3年生', awakenTitle: '浦の星のアクアダイバー', rarityId: 1, attributeId: 2, roleId: 4, fromId: ['gacha', 1] },
  46: { memberId: 13, title: 'Aqours専任コーチ', awakenTitle: 'みんなのお姉さん', rarityId: 1, attributeId: 6, roleId: 3, fromId: ['gacha', 1] },
  47: { memberId: 13, title: '大切な思い出', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 3, roleId: 2, fromId: ['gacha', 1], outfitSeriesId: 2 },
  48: { memberId: 13, title: 'そろそろ一緒に潜ってみる？', awakenTitle: '海神の巫女', rarityId: 3, attributeId: 5, roleId: 1, fromId: ['gacha', 1] },
  49: { memberId: 14, title: '浦の星女学院3年生', awakenTitle: '浦の星の生徒会長', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  50: { memberId: 14, title: 'Aqoursのツッコミ担当', awakenTitle: 'スクールアイドルマニア', rarityId: 1, attributeId: 5, roleId: 2, fromId: ['gacha', 1] },
  51: { memberId: 14, title: 'あなたという人は！', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 1, roleId: 3, fromId: ['gacha', 1], outfitSeriesId: 2 },
  52: { memberId: 14, title: '内緒ですわよ', awakenTitle: '巫女舞ステップ', rarityId: 3, attributeId: 6, roleId: 4, fromId: ['gacha', 1] },
  53: { memberId: 15, title: '浦の星女学院2年生', awakenTitle: '陽気な人気者', rarityId: 1, attributeId: 4, roleId: 1, fromId: ['gacha', 1] },
  54: { memberId: 15, title: 'Aqours料理担当', awakenTitle: '敬礼っ！', rarityId: 1, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  55: { memberId: 15, title: '放課後ホリデー', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 1], outfitSeriesId: 2 },
  56: { memberId: 15, title: '水族館デート', awakenTitle: 'ラビットインワンダーランド', rarityId: 3, attributeId: 3, roleId: 3, fromId: ['gacha', 1] },
  57: { memberId: 16, title: '浦の星女学院1年生', awakenTitle: '浦の星の有名？配信者', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  58: { memberId: 16, title: 'Aqoursの堕天使', awakenTitle: '堕天使ヨハネ', rarityId: 1, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  59: { memberId: 16, title: '正座対決', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['gacha', 1], outfitSeriesId: 2 },
  60: { memberId: 16, title: 'エンジェルスナイパー', awakenTitle: 'ホーンテッドプリンセス', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 1] },
  61: { memberId: 17, title: '浦の星女学院1年生', awakenTitle: '浦の星の図書委員', rarityId: 1, attributeId: 1, roleId: 3, fromId: ['gacha', 1] },
  62: { memberId: 17, title: 'Aqoursの歩く図書館', awakenTitle: '天然素材スクールアイドル', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  63: { memberId: 17, title: '二人は親友', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 5, roleId: 4, fromId: ['gacha', 1], outfitSeriesId: 2 },
  64: { memberId: 17, title: '紙越しの緑', awakenTitle: 'ドリーミングシープ', rarityId: 3, attributeId: 2, roleId: 2, fromId: ['gacha', 1] },
  65: { memberId: 18, title: '浦の星女学院3年生', awakenTitle: '浦の星の理事長', rarityId: 1, attributeId: 6, roleId: 2, fromId: ['gacha', 1] },
  66: { memberId: 18, title: 'Aqoursのムードメーカー', awakenTitle: 'さらに上を目指して', rarityId: 1, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  67: { memberId: 18, title: '一番ちかくに', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 4, roleId: 4, fromId: ['gacha', 1], outfitSeriesId: 2 },
  68: { memberId: 18, title: '初めてのツーショット', awakenTitle: 'Bitter & Sweet', rarityId: 3, attributeId: 5, roleId: 1, fromId: ['gacha', 1] },
  69: { memberId: 19, title: '浦の星女学院1年生', awakenTitle: '芯ある泣き虫', rarityId: 1, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  70: { memberId: 19, title: 'Aqoursのマスコット', awakenTitle: '優しい妹', rarityId: 1, attributeId: 1, roleId: 2, fromId: ['gacha', 1] },
  71: { memberId: 19, title: '姉妹の休日', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 3, roleId: 1, fromId: ['gacha', 1], outfitSeriesId: 2 },
  72: { memberId: 19, title: '夢のスイートポテト', awakenTitle: 'ファンタスティックピエロ', rarityId: 3, attributeId: 4, roleId: 4, fromId: ['gacha', 1] },

  73: { memberId: 21, title: '虹ヶ咲学園2年生', awakenTitle: '真面目な努力家', rarityId: 1, attributeId: 1, roleId: 2, fromId: ['gacha', 1] },
  74: { memberId: 21, title: '努力家スクールアイドル', awakenTitle: '昨日より一歩前へ', rarityId: 1, attributeId: 6, roleId: 4, fromId: ['gacha', 1] },
  75: { memberId: 21, title: '食べ過ぎ注意報', awakenTitle: '夢への一歩', rarityId: 2, attributeId: 4, roleId: 3, fromId: ['gacha', 1], outfitSeriesId: 3 },
  76: { memberId: 22, title: '虹ヶ咲学園1年生', awakenTitle: 'プリティーマスコット', rarityId: 1, attributeId: 6, roleId: 1, fromId: ['gacha', 1] },
  77: { memberId: 22, title: '虎視眈々スクールアイドル', awakenTitle: 'スクールアイドル研究家', rarityId: 1, attributeId: 1, roleId: 3, fromId: ['gacha', 1] },
  78: { memberId: 22, title: '楽しみなご褒美！', awakenTitle: 'ダイアモンド', rarityId: 2, attributeId: 4, roleId: 4, fromId: ['gacha', 1], outfitSeriesId: 3 },
  79: { memberId: 23, title: '虹ヶ咲学園1年生', awakenTitle: 'しっかり者の優等生', rarityId: 1, attributeId: 6, roleId: 4, fromId: ['gacha', 1] },
  80: { memberId: 23, title: '演劇部兼スクールアイドル', awakenTitle: '高い表現力', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  81: { memberId: 23, title: '女優を夢見て', awakenTitle: 'あなたの理想のヒロイン', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 1], outfitSeriesId: 3 },
  82: { memberId: 24, title: '虹ヶ咲学園3年生', awakenTitle: '孤高の花', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  83: { memberId: 24, title: 'モデル兼スクールアイドル', awakenTitle: '美の追求', rarityId: 1, attributeId: 6, roleId: 2, fromId: ['gacha', 1] },
  84: { memberId: 24, title: '教えてあげる', awakenTitle: 'Starlight', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['gacha', 1], outfitSeriesId: 3 },
  85: { memberId: 25, title: '虹ヶ咲学園2年生', awakenTitle: '虹ヶ咲の人気者', rarityId: 1, attributeId: 4, roleId: 1, fromId: ['gacha', 1] },
  86: { memberId: 25, title: 'ダジャレ大好きスクールアイドル', awakenTitle: 'チャレンジャー愛', rarityId: 1, attributeId: 3, roleId: 4, fromId: ['gacha', 1] },
  87: { memberId: 25, title: '愛のメモリー', awakenTitle: 'めっちゃGoing!!', rarityId: 2, attributeId: 5, roleId: 3, fromId: ['gacha', 1], outfitSeriesId: 3 },
  88: { memberId: 26, title: '虹ヶ咲学園3年生', awakenTitle: '中庭の眠り姫', rarityId: 1, attributeId: 2, roleId: 4, fromId: ['gacha', 1] },
  89: { memberId: 26, title: '眠れるスクールアイドル', awakenTitle: 'スリーピングビューティー', rarityId: 1, attributeId: 1, roleId: 3, fromId: ['gacha', 1] },
  90: { memberId: 26, title: '夢見心地のティータイム', awakenTitle: '眠れる森に行きたいな', rarityId: 2, attributeId: 5, roleId: 2, fromId: ['gacha', 1], outfitSeriesId: 3 },
  91: { memberId: 27, title: '虹ヶ咲学園2年生', awakenTitle: '？？？？系スクールアイドル', rarityId: 1, attributeId: 4, roleId: 2, fromId: ['gacha', 1] },
  92: { memberId: 27, title: '期待のスクールアイドル', awakenTitle: '頼れる才女', rarityId: 1, attributeId: 5, roleId: 1, fromId: ['gacha', 1] },
  93: { memberId: 27, title: 'もっと教えてください！', awakenTitle: 'CHASE!', rarityId: 2, attributeId: 6, roleId: 3, fromId: ['gacha', 1], outfitSeriesId: 3 },
  94: { memberId: 28, title: '虹ヶ咲学園3年生', awakenTitle: 'おっとりマイペース', rarityId: 1, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  95: { memberId: 28, title: 'スイスから来たスクールアイドル', awakenTitle: 'アルプスの少女', rarityId: 1, attributeId: 2, roleId: 4, fromId: ['gacha', 1] },
  96: { memberId: 28, title: 'ぽかぽか天使', awakenTitle: 'Evergreen', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 1], outfitSeriesId: 3 },
  97: { memberId: 29, title: '虹ヶ咲学園1年生', awakenTitle: '秘められた素顔', rarityId: 1, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  98: { memberId: 29, title: '顔出しNG系スクールアイドル', awakenTitle: '璃奈ちゃんボード', rarityId: 1, attributeId: 4, roleId: 2, fromId: ['gacha', 1] },
  99: { memberId: 29, title: 'はい！チーズ', awakenTitle: 'ドキピポ☆エモーション', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['gacha', 1], outfitSeriesId: 3 },

  100: { memberId: 3, title: 'こっち手伝ってくれる？', awakenTitle: 'welcome to the party', rarityId: 3, attributeId: 5, roleId: 4, fromId: ['gacha', 10001] },
  101: { memberId: 15, title: 'つまみ食いしちゃダメだよ？', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['gacha', 10001], outfitSeriesId: 4 },
  102: { memberId: 1, title: '今日は目一杯楽しもー！', awakenTitle: 'welcome to the party', rarityId: 3, attributeId: 1, roleId: 2, fromId: ['event', 1] },
  103: { memberId: 11, title: '沼津の名産', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 1, roleId: 3, fromId: ['event', 1], outfitSeriesId: 4 },
  104: { memberId: 21, title: 'みんな喜んでくれるかな？', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['event', 1], outfitSeriesId: 5 },

  105: { memberId: 16, title: '堕天使降臨っ！', awakenTitle: 'トワイライトデーモン', rarityId: 3, attributeId: 3, roleId: 3, fromId: ['gacha', 20001] },
  106: { memberId: 2, title: '少し隣で待っててくれる？', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 4, roleId: 4, fromId: ['gacha', 20001], outfitSeriesId: 6 },

  107: { memberId: 14, title: '次のポーズはどのように？', awakenTitle: 'ラピヌ・ミミ', rarityId: 3, attributeId: 3, roleId: 2, fromId: ['gacha', 10002] },
  108: { memberId: 6, title: 'あまりジロジロ見ないでくれる？', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 6, roleId: 4, fromId: ['gacha', 10002], outfitSeriesId: 6 },
  109: { memberId: 19, title: 'こ、こう、ですか？', awakenTitle: 'ラピヌ・ミミ', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['event', 2] },
  110: { memberId: 9, title: '誰が七五三よ！', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['event', 2], outfitSeriesId: 6 },
  111: { memberId: 22, title: 'かすみんに死角はないですよ～', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['event', 2], outfitSeriesId: 5 },

  112: { memberId: 4, title: '一射入魂', awakenTitle: 'ブルーアモール', rarityId: 3, attributeId: 4, roleId: 1, fromId: ['gacha', 20002] },
  113: { memberId: 17, title: 'マルの大好きな本！', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 3, roleId: 3, fromId: ['gacha', 20002], outfitSeriesId: 4 },
  114: { memberId: 23, title: '虹ヶ咲のジュリエット', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 3, roleId: 1, fromId: ['gacha', 20002], outfitSeriesId: 5 },

  115: { memberId: 13, title: 'ちゃんと繋がれたんだから', awakenTitle: 'ブルーレーヴ', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 10003] },
  116: { memberId: 5, title: 'お布団気持ちいいにゃ～♪♪', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['gacha', 10003], outfitSeriesId: 6 },
  117: { memberId: 8, title: '一歩きりで終わらせないように', awakenTitle: 'フルールレーヴ', rarityId: 3, attributeId: 2, roleId: 4, fromId: ['event', 3] },
  118: { memberId: 18, title: 'これが下町マジック……！', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 2, roleId: 3, fromId: ['event', 3], outfitSeriesId: 4 },
  119: { memberId: 25, title: '特別なお出かけ', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['event', 3], outfitSeriesId: 5 },

  120: { memberId: 12, title: '迷いのない澄んだ旋律', awakenTitle: 'プレリュードブロッサム', rarityId: 3, attributeId: 1, roleId: 4, fromId: ['gacha', 20003] },
  121: { memberId: 7, title: 'あなたのことも占ってあげる', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 6, roleId: 2, fromId: ['gacha', 20003], outfitSeriesId: 6 },

  122: { memberId: 2, title: 'い、今、そこの茂みが揺れて……', awakenTitle: 'フォレストフェアリー', rarityId: 3, attributeId: 5, roleId: 1, fromId: ['gacha', 10004] },
  123: { memberId: 16, title: '嘆くのはおやめなさい', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 6, roleId: 3, fromId: ['gacha', 10004], outfitSeriesId: 4 },
  124: { memberId: 17, title: 'それが、野鳥観察の入り口ずら！', awakenTitle: 'フォレストフェアリー', rarityId: 3, attributeId: 4, roleId: 1, fromId: ['event', 4] },
  125: { memberId: 4, title: '計画を立てましょう！', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['event', 4], outfitSeriesId: 6 },
  126: { memberId: 26, title: '遅れてごめんね～', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 3, roleId: 1, fromId: ['event', 4], outfitSeriesId: 5 },

  127: { memberId: 6, title: '私をこんなに待たせるなんて', awakenTitle: 'ドラマティックローズ', rarityId: 3, attributeId: 6, roleId: 3, fromId: ['gacha', 30001] },
  128: { memberId: 15, title: 'せっかく一緒に海に来たんだし', awakenTitle: 'スプラッシュマリン', rarityId: 3, attributeId: 2, roleId: 1, fromId: ['gacha', 30001] },
  129: { memberId: 24, title: 'キミと二人きりだもの', awakenTitle: 'ブルータンタシオン', rarityId: 3, attributeId: 3, roleId: 2, fromId: ['gacha', 30001] },
  130: { memberId: 3, title: 'お手本を見せるね', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['gacha', 30001], outfitSeriesId: 6 },
  131: { memberId: 19, title: 'とことんこだわって作りたいな', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 30001], outfitSeriesId: 4 },

  132: { memberId: 11, title: '流星に囲まれて', awakenTitle: 'レオスターブライト', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['gacha', 10005] },
  133: { memberId: 8, title: 'お弁当と言えば……', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['gacha', 10005], outfitSeriesId: 6 },
  134: { memberId: 7, title: 'もしかしたら叶うかもしれないよ', awakenTitle: 'ジェミニスターブライト', rarityId: 3, attributeId: 4, roleId: 2, fromId: ['event', 5] },
  135: { memberId: 12, title: '千歌ちゃん、起きて！', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 3, roleId: 3, fromId: ['event', 5], outfitSeriesId: 4 },
  136: { memberId: 28, title: '言葉に言い表せない魅力', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['event', 5], outfitSeriesId: 5 },

  137: { memberId: 5, title: 'こっちこっち早くするにゃ！', awakenTitle: 'アフタースクールキャット', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['gacha', 20004] },
  138: { memberId: 13, title: 'ひと泳ぎしてたんだよ～', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 4, roleId: 4, fromId: ['gacha', 20004], outfitSeriesId: 4 },

  139: { memberId: 9, title: 'ニコの特製お弁当いかがですかぁ', awakenTitle: '明星の汽笛', rarityId: 3, attributeId: 4, roleId: 4, fromId: ['gacha', 10006] },
  140: { memberId: 14, title: '真面目なアナウンス', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 10006], outfitSeriesId: 4 },
  141: { memberId: 18, title: 'それじゃ、レッツゴー♪', awakenTitle: '明星の汽笛', rarityId: 3, attributeId: 2, roleId: 3, fromId: ['event', 6] },
  142: { memberId: 1, title: 'お荷物のせますね～', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 1, roleId: 1, fromId: ['event', 6], outfitSeriesId: 6 },
  143: { memberId: 29, title: 'にっこりんな飾りつけ', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['event', 6], outfitSeriesId: 5 },

  144: { memberId: 3, title: 'この水着すごくお気に入りなんだ', awakenTitle: 'ハミングエンジェル', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 30002] },
  145: { memberId: 16, title: 'あなたが一緒なら', awakenTitle: 'デビルロッカー', rarityId: 3, attributeId: 5, roleId: 4, fromId: ['gacha', 30002] },
  146: { memberId: 27, title: 'えへへ……嬉しいです！', awakenTitle: 'スカーレットカレッジ', rarityId: 3, attributeId: 4, roleId: 1, fromId: ['gacha', 30002] },
  147: { memberId: 1, title: 'あなたには特別おまけしちゃうよ', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['gacha', 30002], outfitSeriesId: 7 },
  148: { memberId: 11, title: '旅館のお手伝い', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 30002], outfitSeriesId: 8 },

  149: { memberId: 15, title: 'このアトラクション、面白ーい♪', awakenTitle: 'Miracle voyage', rarityId: 3, attributeId: 1, roleId: 2, fromId: ['gacha', 10007] },
  150: { memberId: 24, title: 'ほかのみんなには悪いけど', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['gacha', 10007], outfitSeriesId: 5 },
  151: { memberId: 4, title: '水上アスレチックで決めましょう', awakenTitle: 'Miracle voyage', rarityId: 3, attributeId: 5, roleId: 3, fromId: ['event', 7] },
  152: { memberId: 23, title: 'ここで転ぶわけにはいきません！', awakenTitle: 'Miracle voyage', rarityId: 3, attributeId: 2, roleId: 4, fromId: ['gacha', 10008] },
  153: { memberId: 6, title: '……ふふふ♪やっほ―――♪', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 1, roleId: 3, fromId: ['event', 7], outfitSeriesId: 7 },
  154: { memberId: 17, title: 'いただきまーす♪', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['event', 7], outfitSeriesId: 8 },

  155: { memberId: 8, title: 'もうかわいすぎるから、ぎゅ～', awakenTitle: 'ハッピーパレード', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['gacha', 20005] },
  156: { memberId: 14, title: '浦の星女学院の生徒として', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 5, roleId: 4, fromId: ['gacha', 20005], outfitSeriesId: 8 },

  157: { memberId: 19, title: 'ほっぺた落ちちゃいそう', awakenTitle: 'Sweets Deco', rarityId: 3, attributeId: 2, roleId: 2, fromId: ['gacha', 10009] },
  158: { memberId: 27, title: '作り立ての私の自信作です♪', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['gacha', 10009], outfitSeriesId: 5 },
  159: { memberId: 2, title: 'いや、私は本当にいいから！', awakenTitle: 'Sweets Deco', rarityId: 3, attributeId: 3, roleId: 4, fromId: ['event', 8] },
  160: { memberId: 21, title: 'あっ、みんな来てくれたの？', awakenTitle: 'Sweets Deco', rarityId: 3, attributeId: 4, roleId: 3, fromId: ['gacha', 10010] },
  161: { memberId: 13, title: 'ほら、早く早く', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['event', 8], outfitSeriesId: 8 },
  162: { memberId: 7, title: 'ウチが占ってあげる', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 5, roleId: 3, fromId: ['event', 8], outfitSeriesId: 7 },

  163: { memberId: 28, title: 'お花の冠？　あなたが作ったの？', awakenTitle: 'Delightful Waltz', rarityId: 3, attributeId: 5, roleId: 2, fromId: ['gacha', 30003] },
  164: { memberId: 9, title: '……ありがと。', awakenTitle: 'スマイリーエンジェル', rarityId: 3, attributeId: 1, roleId: 3, fromId: ['gacha', 30003] },
  165: { memberId: 22, title: '食べる人の顔が楽しみですね～♡', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 5, roleId: 2, fromId: ['gacha', 30003], outfitSeriesId: 9 },
  166: { memberId: 29, title: '一番気に入った璃奈ちゃんボード', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['gacha', 30003], outfitSeriesId: 9 },

  167: { memberId: 22, title: 'お待たせしましたぁ', awakenTitle: 'フラワーシンフォニー', rarityId: 3, attributeId: 1, roleId: 4, fromId: ['gacha', 10011] },
  168: { memberId: 2, title: 'まあっ……すごく綺麗なお花！', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 10011], outfitSeriesId: 7 },
  169: { memberId: 12, title: '今日だけしかできない二人の音', awakenTitle: 'フラワーシンフォニー', rarityId: 3, attributeId: 6, roleId: 1, fromId: ['event', 9] },
  170: { memberId: 6, title: '私の……誕生花だもの', awakenTitle: 'フラワーシンフォニー', rarityId: 3, attributeId: 4, roleId: 2, fromId: ['gacha', 10012] },
  171: { memberId: 16, title: 'ふっふっふ……待っててリリー！', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 4, roleId: 1, fromId: ['event', 9], outfitSeriesId: 8 },
  172: { memberId: 24, title: '私についていらっしゃい♪', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 6, roleId: 3, fromId: ['event', 9], outfitSeriesId: 9 },

  173: { memberId: 29, title: '絶対クリアする……！', awakenTitle: 'フィーリングシグナル', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 20006] },
  174: { memberId: 9, title: 'ワン、ツー、スリー、フォー', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['gacha', 20006], outfitSeriesId: 7 },

  175: { memberId: 1, title: 'ちょっと待って……ひゃあああっ', awakenTitle: '竜宮城の姫君', rarityId: 3, attributeId: 2, roleId: 1, fromId: ['gacha', 10013] },
  176: { memberId: 21, title: '明日もまた会いに来るね', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 6, roleId: 4, fromId: ['gacha', 10013], outfitSeriesId: 9 },
  177: { memberId: 25, title: 'UMAも絶対食いつくよ！', awakenTitle: '竜宮城の姫君', rarityId: 3, attributeId: 6, roleId: 3, fromId: ['gacha', 10014] },
  178: { memberId: 13, title: 'もう少し深く潜ってみようかな', awakenTitle: '竜宮城の姫君', rarityId: 3, attributeId: 2, roleId: 4, fromId: ['event', 10] },
  179: { memberId: 8, title: '役に立てることがあるなら', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['event', 10], outfitSeriesId: 7 },
  180: { memberId: 15, title: '水平線の先まで見渡せるよ！', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 1, roleId: 3, fromId: ['event', 10], outfitSeriesId: 8 },

  181: { memberId: 18, title: '私がサポートしてあげる♪', awakenTitle: 'ロイヤルプリンセス', rarityId: 3, attributeId: 3, roleId: 4, fromId: ['gacha', 30004] },
  182: { memberId: 26, title: '次は彼方ちゃんの番で～す♪', awakenTitle: '天使の子守歌', rarityId: 3, attributeId: 6, roleId: 1, fromId: ['gacha', 30004] },
  183: { memberId: 28, title: 'どれもこれも美味しそう', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 1, roleId: 2, fromId: ['gacha', 30004], outfitSeriesId: 9 },
  184: { memberId: 5, title: 'むにゃむにゃ……うへへ', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 4, roleId: 1, fromId: ['gacha', 30004], outfitSeriesId: 7 },

  185: { memberId: 28, title: '持ってきたんだよ', awakenTitle: '無邪気な赤ずきん', rarityId: 3, attributeId: 2, roleId: 3, fromId: ['gacha', 10015] },
  186: { memberId: 4, title: '全く、あなた達は……', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['gacha', 10015], outfitSeriesId: 7 },
  187: { memberId: 11, title: '結構上手くない？', awakenTitle: 'ミッドナイトウルフ', rarityId: 3, attributeId: 3, roleId: 2, fromId: ['event', 11] },
  188: { memberId: 5, title: '全速力で行くにゃ～♪', awakenTitle: '森のハンターガール', rarityId: 3, attributeId: 2, roleId: 4, fromId: ['gacha', 10016] },
  189: { memberId: 19, title: 'いいなぁ、食べたい……！', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 4, roleId: 3, fromId: ['event', 11], outfitSeriesId: 8 },
  190: { memberId: 27, title: '気を付けてくださいね～！', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 1, roleId: 1, fromId: ['event', 11], outfitSeriesId: 9 },

  191: { memberId: 24, title: 'キミをドキッとさせちゃった？', awakenTitle: 'セレブリティ・ブルー', rarityId: 3, attributeId: 6, roleId: 1, fromId: ['gacha', 20007] },
  192: { memberId: 18, title: 'はい♪　聞いてみて', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 6, roleId: 2, fromId: ['gacha', 20007], outfitSeriesId: 8 },

  193: { memberId: 7, title: 'いたいのいたいのとんでけ～♪', awakenTitle: 'マジカル☆フィーバー', rarityId: 3, attributeId: 3, roleId: 1, fromId: ['gacha', 10017] },
  194: { memberId: 12, title: '愛と勇気の魔法少女、りこっぴー', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 5, roleId: 4, fromId: ['gacha', 10017], outfitSeriesId: 8 },
  195: { memberId: 14, title: 'ハグしてさしあげますわ', awakenTitle: 'マジカル☆フィーバー', rarityId: 3, attributeId: 4, roleId: 3, fromId: ['gacha', 10018] },
  196: { memberId: 22, title: 'あなたにご覧にいれましょう！', awakenTitle: 'マジカル☆フィーバー', rarityId: 3, attributeId: 5, roleId: 1, fromId: ['event', 12] },
  197: { memberId: 3, title: '魔法でなおしてあげるよ♪', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['event', 12], outfitSeriesId: 7 },
  198: { memberId: 23, title: '水の精霊たちよ！', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 2, roleId: 3, fromId: ['event', 12], outfitSeriesId: 9 },

  199: { memberId: 8, title: 'あなたのために歌うね', awakenTitle: 'カラフルフェスタ', rarityId: 3, attributeId: 6, roleId: 4, fromId: ['gacha', 30005] },
  200: { memberId: 17, title: '天国ずら～！', awakenTitle: '楽園からの使者', rarityId: 3, attributeId: 5, roleId: 3, fromId: ['gacha', 30005] },
  201: { memberId: 26, title: 'すやあ～すぴ～すやすや～～', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 3, roleId: 3, fromId: ['gacha', 30005], outfitSeriesId: 9 },
  202: { memberId: 25, title: '来てくれたんだね！サンキュー♪', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['gacha', 30005], outfitSeriesId: 9 },

  203: { memberId: 21, title: 'ひたむきな努力家', awakenTitle: 'レッスンタイム・ニジガク', rarityId: 1, attributeId: 2, roleId: 1, fromId: ['gacha', 10019] },
  204: { memberId: 22, title: 'みんなのアイドルかすみん', awakenTitle: 'レッスンタイム・ニジガク', rarityId: 1, attributeId: 5, roleId: 2, fromId: ['gacha', 10019] },
  205: { memberId: 23, title: '大女優を目指して', awakenTitle: 'レッスンタイム・ニジガク', rarityId: 1, attributeId: 4, roleId: 3, fromId: ['gacha', 10019] },
  206: { memberId: 24, title: 'ストレッチは欠かせないわ！', awakenTitle: 'レッスンタイム・ニジガク', rarityId: 1, attributeId: 4, roleId: 4, fromId: ['gacha', 10019] },
  207: { memberId: 25, title: 'たのしーこと、してみない？', awakenTitle: 'レッスンタイム・ニジガク', rarityId: 1, attributeId: 6, roleId: 3, fromId: ['gacha', 10019] },
  208: { memberId: 26, title: 'お昼寝日和だね～♪', awakenTitle: 'レッスンタイム・ニジガク', rarityId: 1, attributeId: 6, roleId: 2, fromId: ['gacha', 10019] },
  209: { memberId: 27, title: '生徒会長モード', awakenTitle: 'レッスンタイム・ニジガク', rarityId: 1, attributeId: 3, roleId: 3, fromId: ['gacha', 10019] },
  210: { memberId: 28, title: '弟たちから手紙が届いたの♪', awakenTitle: 'レッスンタイム・ニジガク', rarityId: 1, attributeId: 1, roleId: 1, fromId: ['gacha', 10019] },
  211: { memberId: 29, title: 'ココロは繋がってるよ', awakenTitle: 'レッスンタイム・ニジガク', rarityId: 1, attributeId: 3, roleId: 4, fromId: ['gacha', 10019] },

  212: { memberId: 16, title: 'あっちにいって―――……あっ！！', awakenTitle: 'ベジタブル☆ワンダーランド', rarityId: 3, attributeId: 3, roleId: 1, fromId: ['gacha', 10019] },
  213: { memberId: 28, title: 'お野菜も入れるねー。それー♪', awakenTitle: 'マーチング・ハーモニー', rarityId: 2, attributeId: 5, roleId: 4, fromId: ['gacha', 10019], outfitSeriesId: 10 },
  214: { memberId: 3, title: '味見してみて', awakenTitle: 'ベジタブル☆ワンダーランド', rarityId: 3, attributeId: 3, roleId: 3, fromId: ['event', 13] },
  215: { memberId: 29, title: 'みんなと一緒にひとつのお鍋', awakenTitle: 'ベジタブル☆ワンダーランド', rarityId: 3, attributeId: 5, roleId: 4, fromId: ['gacha', 10020] },
  216: { memberId: 14, title: 'ん～、たまりませんわ！', awakenTitle: 'Brightest Melody', rarityId: 2, attributeId: 1, roleId: 2, fromId: ['event', 13], outfitSeriesId: 11 },
  217: { memberId: 2, title: 'なんなのいきなり……', awakenTitle: 'それは僕たちの奇跡', rarityId: 2, attributeId: 4, roleId: 1, fromId: ['event', 13], outfitSeriesId: 12 },

  218: { memberId: 23, title: 'もうくすぐったいってば！', awakenTitle: '薔薇の騎士', rarityId: 3, attributeId: 4, roleId: 2, fromId: ['gacha', 20008] },
  219: { memberId: 8, title: 'えっ……？', awakenTitle: 'それは僕たちの奇跡', rarityId: 2, attributeId: 1, roleId: 2, fromId: ['gacha', 20008], outfitSeriesId: 12 },

  220: { memberId: 6, title: 'ちょ、速い速い！', awakenTitle: 'Snow Crystal', rarityId: 3, attributeId: 6, roleId: 1, fromId: ['gacha', 10021] },
  221: { memberId: 22, title: 'ひえええ！足がふらふらする！', awakenTitle: 'マーチング・ハーモニー', rarityId: 2, attributeId: 6, roleId: 4, fromId: ['gacha', 10021], outfitSeriesId: 10 },
  222: { memberId: 27, title: 'アイススケート対決を始めます！', awakenTitle: 'Snow Crystal', rarityId: 3, attributeId: 1, roleId: 3, fromId: ['gacha', 10022] },
  223: { memberId: 15, title: '……いったたた～', awakenTitle: 'Snow Crystal', rarityId: 3, attributeId: 6, roleId: 4, fromId: ['event', 14] },
  224: { memberId: 5, title: 'どこまでだって行けちゃうにゃ～', awakenTitle: 'それは僕たちの奇跡', rarityId: 2, attributeId: 2, roleId: 3, fromId: ['event', 14], outfitSeriesId: 12 },
  225: { memberId: 18, title: 'マリバウアー！', awakenTitle: 'Brightest Melody', rarityId: 2, attributeId: 3, roleId: 1, fromId: ['event', 14], outfitSeriesId: 11 },

  226: { memberId: 4, title: '二人でひとつのストロー', awakenTitle: '月下の大和撫子', rarityId: 3, attributeId: 5, roleId: 2, fromId: ['gacha', 30006] },
  227: { memberId: 19, title: '……受け取ってください！', awakenTitle: '小悪魔の誘惑', rarityId: 3, attributeId: 6, roleId: 3, fromId: ['gacha', 30006] },
  228: { memberId: 21, title: 'ふふ、あの子らしいなあ', awakenTitle: 'マーチング・ハーモニー', rarityId: 2, attributeId: 3, roleId: 2, fromId: ['gacha', 30006], outfitSeriesId: 10 },
  229: { memberId: 12, title: '憧れちゃうシチュエーション', awakenTitle: 'Brightest Melody', rarityId: 2, attributeId: 4, roleId: 1, fromId: ['gacha', 30006], outfitSeriesId: 11 },

  230: { memberId: 17, title: '体も動いちゃうずら～！', awakenTitle: '湯けむり天女', rarityId: 3, attributeId: 3, roleId: 4, fromId: ['gacha', 10023] },
  231: { memberId: 7, title: 'ウチのお土産はね……', awakenTitle: 'それは僕たちの奇跡', rarityId: 2, attributeId: 4, roleId: 3, fromId: ['gacha', 10023], outfitSeriesId: 12 },
  232: { memberId: 26, title: '天国が見える……', awakenTitle: '湯けむり天女', rarityId: 3, attributeId: 5, roleId: 3, fromId: ['gacha', 10024] },
  233: { memberId: 9, title: 'おばけみたいな虫が～～～っっ！', awakenTitle: '湯けむり天女', rarityId: 3, attributeId: 2, roleId: 2, fromId: ['event', 15] },
  234: { memberId: 23, title: 'たあ―――――――っっ！！', awakenTitle: 'マーチング・ハーモニー', rarityId: 2, attributeId: 1, roleId: 1, fromId: ['event', 15], outfitSeriesId: 10 },
  235: { memberId: 11, title: 'もう1回温泉行って来るね', awakenTitle: 'Brightest Melody', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['event', 15], outfitSeriesId: 11 },

  236: { memberId: 18, title: '私たちの色', awakenTitle: 'カラフルスプラッシュ', rarityId: 3, attributeId: 1, roleId: 2, fromId: ['gacha', 20009] },
  237: { memberId: 4, title: '完成したら見せますね', awakenTitle: 'それは僕たちの奇跡', rarityId: 2, attributeId: 3, roleId: 3, fromId: ['gacha', 20009], outfitSeriesId: 12 },

  238: { memberId: 21, title: 'いらっしゃいませ♪', awakenTitle: '熱烈歓迎☆チャイナメイド', rarityId: 3, attributeId: 5, roleId: 4, fromId: ['gacha', 10025] },
  239: { memberId: 1, title: '私に任せて！', awakenTitle: 'それは僕たちの奇跡', rarityId: 2, attributeId: 3, roleId: 2, fromId: ['gacha', 10025], outfitSeriesId: 12 },
  240: { memberId: 5, title: 'やっった――――！！', awakenTitle: '熱烈歓迎☆チャイにゃメイド', rarityId: 3, attributeId: 4, roleId: 3, fromId: ['gacha', 10026] },
  241: { memberId: 14, title: 'もうひと頑張りいたしましょう！', awakenTitle: '熱烈歓迎☆チャイナメイド', rarityId: 3, attributeId: 5, roleId: 1, fromId: ['event', 16] },
  242: { memberId: 13, title: 'わかめラーメンを作ってみたんだ', awakenTitle: 'Brightest Melody', rarityId: 2, attributeId: 6, roleId: 3, fromId: ['event', 16], outfitSeriesId: 11 },
  243: { memberId: 29, title: '全てを正確に見極めて……えい！', awakenTitle: 'マーチング・ハーモニー', rarityId: 2, attributeId: 2, roleId: 4, fromId: ['event', 16], outfitSeriesId: 10 },

  244: { memberId: 25, title: '二人きりの時間を過ごしたい', awakenTitle: 'ハートビート★スクールガール', rarityId: 3, attributeId: 3, roleId: 1, fromId: ['gacha', 30007] },
  245: { memberId: 2, title: 'キミがそばにいてくれるなら', awakenTitle: 'トゥルーアラベスク', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 30007] },
  246: { memberId: 24, title: 'まだまだ終わらせないんだから！', awakenTitle: 'マーチング・ハーモニー', rarityId: 2, attributeId: 1, roleId: 2, fromId: ['gacha', 30007], outfitSeriesId: 10 },
  247: { memberId: 16, title: 'これが次の暗黒舞踏会の衣装よ！', awakenTitle: 'Brightest Melody', rarityId: 2, attributeId: 5, roleId: 3, fromId: ['gacha', 30007], outfitSeriesId: 11 },

  248: { memberId: 12, title: 'プリンセスに近づけたらいいな', awakenTitle: 'Noble Princess', rarityId: 3, attributeId: 5, roleId: 2, fromId: ['gacha', 10027] },
  249: { memberId: 6, title: 'そんな顔で私のこと見ないでよ', awakenTitle: 'それは僕たちの奇跡', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['gacha', 10027], outfitSeriesId: 12 },
  250: { memberId: 24, title: '困るわ……そんな風に言うなんて', awakenTitle: 'Noble Princess', rarityId: 3, attributeId: 2, roleId: 4, fromId: ['gacha', 10028] },
  251: { memberId: 1, title: '本物のプリンセスになれそう', awakenTitle: 'Noble Princess', rarityId: 3, attributeId: 4, roleId: 4, fromId: ['event', 17] },
  252: { memberId: 27, title: '私があなたの笑顔を守ります！', awakenTitle: 'マーチング・ハーモニー', rarityId: 2, attributeId: 3, roleId: 3, fromId: ['event', 17], outfitSeriesId: 10 },
  253: { memberId: 15, title: 'もうすぐできるからね～', awakenTitle: 'Brightest Melody', rarityId: 2, attributeId: 4, roleId: 4, fromId: ['event', 17], outfitSeriesId: 11 },

  254: { memberId: 22, title: 'かすみん、限界ですぅ！', awakenTitle: 'レディー・デビュー', rarityId: 3, attributeId: 3, roleId: 3, fromId: ['gacha', 20010] },
  255: { memberId: 3, title: 'おかえりなさいませ、ご主人様', awakenTitle: 'それは僕たちの奇跡', rarityId: 2, attributeId: 2, roleId: 4, fromId: ['gacha', 20010], outfitSeriesId: 12 },

  256: { memberId: 7, title: 'こうするの、っと！', awakenTitle: 'レインドロップ', rarityId: 3, attributeId: 2, roleId: 3, fromId: ['gacha', 10029] },
  257: { memberId: 17, title: '特別な道具を使うずら', awakenTitle: 'Brightest Melody', rarityId: 2, attributeId: 1, roleId: 1, fromId: ['gacha', 10029], outfitSeriesId: 11 },
  258: { memberId: 13, title: '雨に消えたりしないように', awakenTitle: 'レインドロップ', rarityId: 3, attributeId: 1, roleId: 4, fromId: ['gacha', 10030] },
  259: { memberId: 28, title: 'みんなも一緒に歌おうよ〜♪', awakenTitle: 'レインドロップ', rarityId: 3, attributeId: 4, roleId: 1, fromId: ['event', 18] },
  260: { memberId: 25, title: '愛さん特製スペシャルもんじゃ', awakenTitle: 'マーチング・ハーモニー', rarityId: 2, attributeId: 2, roleId: 3, fromId: ['event', 18], outfitSeriesId: 10 },
  261: { memberId: 9, title: 'にこもがんばっちゃおうかな〜', awakenTitle: 'それは僕たちの奇跡', rarityId: 2, attributeId: 6, roleId: 4, fromId: ['event', 18], outfitSeriesId: 12 },

  262: { memberId: 11, title: 'あなたと一緒に海を見ていたいな', awakenTitle: 'チカキュン☆サマー', rarityId: 3, attributeId: 2, roleId: 1, fromId: ['gacha', 30008] },
  263: { memberId: 5, title: 'にゃああっ……！', awakenTitle: 'Pom!☆', rarityId: 3, attributeId: 3, roleId: 2, fromId: ['gacha', 30008] },
  264: { memberId: 26, title: '遥ちゃん専用アルバムなの！', awakenTitle: 'マーチング・ハーモニー', rarityId: 2, attributeId: 2, roleId: 4, fromId: ['gacha', 30008], outfitSeriesId: 10 },
  265: { memberId: 19, title: '今日は絶対、すくうんだ', awakenTitle: 'Brightest Melody', rarityId: 2, attributeId: 5, roleId: 2, fromId: ['gacha', 30008], outfitSeriesId: 11 },

  266: { memberId: 8, title: '私わかったよ！', awakenTitle: '見習い探偵', rarityId: 3, attributeId: 2, roleId: 2, fromId: ['gacha', 10031] },
  267: { memberId: 13, title: '焦らなくていいからね', awakenTitle: '恋になりたいAQUARIUM', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['gacha', 10031], outfitSeriesId: 13 },
  268: { memberId: 16, title: '名探偵ヨハネよ！', awakenTitle: '堕天探偵☆ヨハネ', rarityId: 3, attributeId: 6, roleId: 3, fromId: ['event', 19] },
  269: { memberId: 26, title: '彼方ちゃん、ここに見参！', awakenTitle: '神出鬼没☆怪盗K', rarityId: 3, attributeId: 1, roleId: 4, fromId: ['gacha', 10032] },
  270: { memberId: 2, title: '怪盗からのメッセージが！！', awakenTitle: 'Wonderful Rush', rarityId: 2, attributeId: 3, roleId: 3, fromId: ['event', 19], outfitSeriesId: 14 },
  271: { memberId: 21, title: 'いい感じにできてるよ！', awakenTitle: 'Love U my friends', rarityId: 2, attributeId: 4, roleId: 1, fromId: ['event', 19], outfitSeriesId: 15 },

  272: { memberId: 6, title: '……そうね。すごくキレイ', awakenTitle: 'あなたに捧げるセレナーデ', rarityId: 3, attributeId: 5, roleId: 2, fromId: ['gacha', 20011] },
  273: { memberId: 27, title: '最高のステージでしたね！', awakenTitle: 'Love U my friends', rarityId: 2, attributeId: 5, roleId: 4, fromId: ['gacha', 20011] },

  274: { memberId: 29, title: '璃奈ちゃんボード「くふふ」', awakenTitle: 'もののけガール', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['gacha', 10033] },
  275: { memberId: 3, title: 'はぁ～……生き返る……', awakenTitle: 'Wonderful Rush', rarityId: 2, attributeId: 6, roleId: 3, fromId: ['gacha', 10033], outfitSeriesId: 14 },
  276: { memberId: 4, title: 'て、天井！！　壁にも！！', awakenTitle: 'もののけガール', rarityId: 3, attributeId: 6, roleId: 3, fromId: ['gacha', 10034] },
  277: { memberId: 19, title: 'ピギャアアアア！！', awakenTitle: 'もののけガール', rarityId: 3, attributeId: 5, roleId: 4, fromId: ['event', 20] },
  278: { memberId: 12, title: 'こ、こっちに向かってきてる！', awakenTitle: '恋になりたいAQUARIUM', rarityId: 2, attributeId: 1, roleId: 2, fromId: ['event', 20], outfitSeriesId: 13 },
  279: { memberId: 22, title: 'そういうの無理だもん！！', awakenTitle: 'Love U my friends', rarityId: 2, attributeId: 2, roleId: 3, fromId: ['event', 20], outfitSeriesId: 15 },

  280: { memberId: 23, title: '先輩、きっとあれです！', awakenTitle: 'ブルーミングガーデン', rarityId: 3, attributeId: 3, roleId: 3, fromId: ['gacha', 30009] },
  281: { memberId: 14, title: '……わ、わかりましたわ', awakenTitle: 'ラグジュアリー・ピンク', rarityId: 3, attributeId: 2, roleId: 4, fromId: ['gacha', 30009] },
  282: { memberId: 15, title: '本当に似合うかな……？', awakenTitle: '恋になりたいAQUARIUM', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 30009], outfitSeriesId: 13 },
  283: { memberId: 9, title: '育ち盛りだから', awakenTitle: 'Wonderful Rush', rarityId: 2, attributeId: 5, roleId: 2, fromId: ['gacha', 30009], outfitSeriesId: 14 },

  284: { memberId: 210, title: '虹ヶ咲学園1年生', awakenTitle: '理想は高く', rarityId: 1, attributeId: 1, roleId: 1, fromId: ['gacha', 30010] },
  285: { memberId: 210, title: '完璧主義スクールアイドル', awakenTitle: '虹ヶ咲ニューフェイス', rarityId: 1, attributeId: 3, roleId: 4, fromId: ['gacha', 30010] },
  286: { memberId: 210, title: 'えっ！？　真っ赤……？', awakenTitle: '決意の光', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 30010] },

  287: { memberId: 18, title: 'ウフフ♪　元気のいいコね！', awakenTitle: 'トワイライト・カウガール', rarityId: 3, attributeId: 5, roleId: 4, fromId: ['gacha', 10035] },
  288: { memberId: 29, title: '鞠莉さんの部屋に泊まってみたい', awakenTitle: 'Love U my friends', rarityId: 2, attributeId: 4, roleId: 3, fromId: ['gacha', 10035], outfitSeriesId: 15 },
  289: { memberId: 2, title: '優勝は……私のものよ！', awakenTitle: 'Queen of the Circuit', rarityId: 3, attributeId: 3, roleId: 1, fromId: ['gacha', 10036] },
  290: { memberId: 27, title: 'レインボートルマリンアロ―！！', awakenTitle: 'ジャスティス・アーチャー', rarityId: 3, attributeId: 2, roleId: 2, fromId: ['event', 21] },
  291: { memberId: 5, title: 'もう１回やりたいにゃ！', awakenTitle: 'Wonderful Rush', rarityId: 2, attributeId: 5, roleId: 2, fromId: ['event', 21], outfitSeriesId: 14 },
  292: { memberId: 17, title: '落ちるずら～！', awakenTitle: '恋になりたいAQUARIUM', rarityId: 2, attributeId: 6, roleId: 4, fromId: ['event', 21], outfitSeriesId: 13 },

  293: { memberId: 21, title: 'ぎゅって捕まってもいい？', awakenTitle: 'Present For You♡', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 20012] },
  294: { memberId: 11, title: '一緒に涼もう', awakenTitle: '恋になりたいAQUARIUM', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['gacha', 20012], outfitSeriesId: 13 },

  295: { memberId: 15, title: '電車を走らせるよ〜！いけーー！', awakenTitle: 'おもちゃの世界へようこそ', rarityId: 3, attributeId: 4, roleId: 1, fromId: ['gacha', 10037] },
  296: { memberId: 24, title: 'このシリーズの人形、持ってたわ', awakenTitle: 'Love U my friends', rarityId: 2, attributeId: 3, roleId: 2, fromId: ['gacha', 10037], outfitSeriesId: 15 },
  297: { memberId: 9, title: 'ままごとセットを使いましょう！', awakenTitle: 'おもちゃの世界へようこそ', rarityId: 3, attributeId: 3, roleId: 3, fromId: ['gacha', 10038] },
  298: { memberId: 25, title: '愛さんを捕まえてみな～！', awakenTitle: 'おもちゃの世界へようこそ', rarityId: 3, attributeId: 2, roleId: 2, fromId: ['event', 22] },
  299: { memberId: 14, title: '思い出し笑いですわ', awakenTitle: '恋になりたいAQUARIUM', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['event', 22], outfitSeriesId: 13 },
  300: { memberId: 8, title: 'あ、あれっ、あれー！？', awakenTitle: 'Wonderful Rush', rarityId: 2, attributeId: 4, roleId: 3, fromId: ['event', 22], outfitSeriesId: 14 },

  301: { memberId: 1, title: 'ほらほら、じっとして〜', awakenTitle: 'コスミック☆ドライバー', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['gacha', 30011] },
  302: { memberId: 12, title: '私とあなた、二人だけの時間', awakenTitle: '薔薇のしらべ', rarityId: 3, attributeId: 4, roleId: 3, fromId: ['gacha', 30011] },
  303: { memberId: 7, title: '神様に聞いてみる？', awakenTitle: 'Wonderful Rush', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['gacha', 30011], outfitSeriesId: 14 },
  304: { memberId: 28, title: 'ふわふわで、カラフルでキラキラ', awakenTitle: 'Love U my friends', rarityId: 2, attributeId: 3, roleId: 3, fromId: ['gacha', 30011], outfitSeriesId: 15 },

  305: { memberId: 3, title: '２人とも……そこまでにして！', awakenTitle: 'Pioneering a new World', rarityId: 3, attributeId: 1, roleId: 2, fromId: ['gacha', 10039] },
  306: { memberId: 23, title: '風になったような気分', awakenTitle: 'Love U my friends', rarityId: 2, attributeId: 5, roleId: 4, fromId: ['gacha', 10039], outfitSeriesId: 15 },
  307: { memberId: 11, title: 'やるからには負けられない！', awakenTitle: 'Pioneering a new World', rarityId: 3, attributeId: 5, roleId: 3, fromId: ['event', 23] },
  308: { memberId: 27, title: 'やらないわけにはいきません', awakenTitle: 'Pioneering a new World', rarityId: 3, attributeId: 6, roleId: 4, fromId: ['gacha', 10040] },
  309: { memberId: 6, title: 'なんでこんなことになるのよ～！', awakenTitle: 'Wonderful Rush', rarityId: 2, attributeId: 3, roleId: 1, fromId: ['event', 23], outfitSeriesId: 14 },
  310: { memberId: 16, title: '設定言うな！', awakenTitle: '恋になりたいAQUARIUM', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['event', 23], outfitSeriesId: 13 },

  311: { memberId: 7, title: 'ほーら、ごはんだよ～', awakenTitle: '彩り金平糖', rarityId: 3, attributeId: 6, roleId: 4, fromId: ['gacha', 20013] },
  312: { memberId: 25, title: '一球入魂～～～～っ！！', awakenTitle: 'Love U my friends', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 20013], outfitSeriesId: 15 },
};
/* eslint-enable object-curly-newline, max-len */

const INSUF_RANGE = [-1, -1];
export function isInsuf(id: number) {
  return INSUF_RANGE[0] <= id && id <= INSUF_RANGE[1];
}

export function getCardIconAssetPath(id: number, isAwaken: boolean): string {
  const card = CARD[id];
  const prefix = '/images/card-icons';
  const lowerSymbol = RARITY[card.rarityId].symbol.toLowerCase();
  const { enName } = MEMBER[card.memberId];
  const base = `${prefix}/${id}_${lowerSymbol}_${enName}`;
  if (isAwaken) {
    return `${base}_awaken.png`;
  }
  return `${base}.png`;
}

export function getCardSymbol(id: number, isAwaken: boolean): string {
  const card = CARD[id];
  const lowerSymbol = RARITY[card.rarityId].symbol.toLowerCase();
  const { enName } = MEMBER[card.memberId];
  const base = `${id}-${lowerSymbol}-${enName}`;
  return isAwaken ? `${base}-awaken` : base;
}

export function getFullCardList(cardTable: Card) {
  return Object.keys(cardTable).map(Number).map((id) => PARAMETER[id].map((param, idx) => ({
    id,
    uncap: idx,
    ...cardTable[id],
    ...param,
    expectedVoltage: param.appl,
  }))).reduce((acc, val) => acc.concat(val), [])
    .filter((card) => card.appl !== 0);
}
