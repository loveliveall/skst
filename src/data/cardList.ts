import { MEMBER } from './memberMetadata';
import { RARITY, ATTRIBUTE, ROLE } from './cardMetadata';

export const FROM_MAP = {
  gacha: '가챠',
  event: '이벤트',
} as const;
export type FromTag = keyof typeof FROM_MAP;

type Card = {
  readonly [id: number]: {
    readonly memberId: keyof typeof MEMBER,
    readonly title: string,
    readonly awakenTitle: string,
    readonly rarityId: keyof typeof RARITY,
    readonly attributeId: keyof typeof ATTRIBUTE,
    readonly roleId: keyof typeof ROLE,
    readonly fromId: [FromTag, number], // When the card first added?
  },
};

/* eslint-disable object-curly-newline, max-len */
export const CARD: Card = {
  1: { memberId: 1, title: '音ノ木坂学院2年生', awakenTitle: '笑顔でいっぱいの女の子', rarityId: 1, attributeId: 1, roleId: 1, fromId: ['gacha', 1] },
  2: { memberId: 1, title: 'μ’ｓのリーダー', awakenTitle: '飽くなき挑戦', rarityId: 1, attributeId: 4, roleId: 2, fromId: ['gacha', 1] },
  3: { memberId: 1, title: 'ことりちゃんと食べるパン', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 2, roleId: 4, fromId: ['gacha', 1] },
  4: { memberId: 1, title: '動物園で対決！', awakenTitle: 'はいからロマンス', rarityId: 3, attributeId: 6, roleId: 3, fromId: ['gacha', 1] },
  5: { memberId: 2, title: '音ノ木坂学院3年生', awakenTitle: '才色兼備の生徒会長', rarityId: 1, attributeId: 3, roleId: 2, fromId: ['gacha', 1] },
  6: { memberId: 2, title: 'μ’ｓのムードメーカー', awakenTitle: 'かしこい、かわいい、エリーチカ', rarityId: 1, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  7: { memberId: 2, title: 'あなたのことを知りたくて', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 1] },
  8: { memberId: 2, title: 'エリーチカ先生のボウリング講座', awakenTitle: 'エターナルプロミス', rarityId: 3, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  9: { memberId: 3, title: '音ノ木坂学院2年生', awakenTitle: '幻のミナリンスキー', rarityId: 1, attributeId: 2, roleId: 2, fromId: ['gacha', 1] },
  10: { memberId: 3, title: 'μ’ｓの衣装担当', awakenTitle: 'おっとり優等生', rarityId: 1, attributeId: 5, roleId: 4, fromId: ['gacha', 1] },
  11: { memberId: 3, title: '眠れない日々', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 1, roleId: 3, fromId: ['gacha', 1] },
  12: { memberId: 3, title: 'あなたとの初めての思い出', awakenTitle: 'ラブリーポリス', rarityId: 3, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  13: { memberId: 4, title: '音ノ木坂学院2年生', awakenTitle: 'スクールアイドル兼弓道部員', rarityId: 1, attributeId: 3, roleId: 4, fromId: ['gacha', 1] },
  14: { memberId: 4, title: 'μ’ｓの歌詞担当', awakenTitle: 'みんなのしっかり者', rarityId: 1, attributeId: 4, roleId: 1, fromId: ['gacha', 1] },
  15: { memberId: 4, title: 'ほたる玉は海未の色', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  16: { memberId: 4, title: '大和撫子パニック', awakenTitle: '夏祭りシンフォニー', rarityId: 3, attributeId: 1, roleId: 2, fromId: ['gacha', 1] },
  17: { memberId: 5, title: '音ノ木坂学院1年生', awakenTitle: 'スポーツ万能少女', rarityId: 1, attributeId: 4, roleId: 3, fromId: ['gacha', 1] },
  18: { memberId: 5, title: 'μ’ｓの元気印', awakenTitle: 'アスレチックスクールアイドル', rarityId: 1, attributeId: 2, roleId: 1, fromId: ['gacha', 1] },
  19: { memberId: 5, title: '至福の昼下がり', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['gacha', 1] },
  20: { memberId: 5, title: '凛がいるから大丈夫！', awakenTitle: '月光の踊り子', rarityId: 3, attributeId: 5, roleId: 2, fromId: ['gacha', 1] },
  21: { memberId: 6, title: '音ノ木坂学院1年生', awakenTitle: 'クールビューティー', rarityId: 1, attributeId: 6, roleId: 1, fromId: ['gacha', 1] },
  22: { memberId: 6, title: 'μ’ｓの作曲担当', awakenTitle: '信念を持つ才女', rarityId: 1, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  23: { memberId: 6, title: 'どっちが子ども？', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['gacha', 1] },
  24: { memberId: 6, title: '「真姫ちゃんと映画デート」', awakenTitle: 'スカーレットロワイヤル', rarityId: 3, attributeId: 3, roleId: 4, fromId: ['gacha', 1] },
  25: { memberId: 7, title: '音ノ木坂学院3年生', awakenTitle: 'オールラウンドな副会長', rarityId: 1, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  26: { memberId: 7, title: 'μ’ｓの導き手', awakenTitle: '音ノ木坂の魔女', rarityId: 1, attributeId: 3, roleId: 2, fromId: ['gacha', 1] },
  27: { memberId: 7, title: 'ため息なんか吹きとばせ！', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 1] },
  28: { memberId: 7, title: '星空の下で', awakenTitle: 'スイートナイトパレード', rarityId: 3, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  29: { memberId: 8, title: '音ノ木坂学院1年生', awakenTitle: '音ノ木坂の飼育係', rarityId: 1, attributeId: 5, roleId: 2, fromId: ['gacha', 1] },
  30: { memberId: 8, title: 'μ’ｓのスクールアイドル博士', awakenTitle: '控えめスクールアイドル', rarityId: 1, attributeId: 6, roleId: 4, fromId: ['gacha', 1] },
  31: { memberId: 8, title: '今までも、これからも', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 1, roleId: 1, fromId: ['gacha', 1] },
  32: { memberId: 8, title: 'これからが本番！', awakenTitle: 'チェリーフラッター', rarityId: 3, attributeId: 4, roleId: 3, fromId: ['gacha', 1] },
  33: { memberId: 9, title: '音ノ木坂学院3年生', awakenTitle: 'アイドル研究部部長', rarityId: 1, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  34: { memberId: 9, title: 'μ’ｓの小悪魔', awakenTitle: '大銀河宇宙No.1アイドル', rarityId: 1, attributeId: 2, roleId: 2, fromId: ['gacha', 1] },
  35: { memberId: 9, title: '本日のラッキーアイテム', awakenTitle: 'フレッシュフルーツパーラー', rarityId: 2, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  36: { memberId: 9, title: 'サプライズプレゼント', awakenTitle: 'My Sweet Devil', rarityId: 3, attributeId: 6, roleId: 1, fromId: ['gacha', 1] },

  37: { memberId: 11, title: '浦の星女学院2年生', awakenTitle: '普通怪獣ちかちー', rarityId: 1, attributeId: 1, roleId: 2, fromId: ['gacha', 1] },
  38: { memberId: 11, title: 'Aqoursのリーダー', awakenTitle: '諦めない心', rarityId: 1, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  39: { memberId: 11, title: '素直なキモチ', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['gacha', 1] },
  40: { memberId: 11, title: '浜辺をさんぽ', awakenTitle: 'サマーアドベンチャー', rarityId: 3, attributeId: 4, roleId: 4, fromId: ['gacha', 1] },
  41: { memberId: 12, title: '浦の星女学院2年生', awakenTitle: '東京からの転校生', rarityId: 1, attributeId: 5, roleId: 4, fromId: ['gacha', 1] },
  42: { memberId: 12, title: 'Aqoursの作曲担当', awakenTitle: 'あわてんぼうなピアニスト', rarityId: 1, attributeId: 4, roleId: 1, fromId: ['gacha', 1] },
  43: { memberId: 12, title: 'リトルデーモンリリー', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 6, roleId: 2, fromId: ['gacha', 1] },
  44: { memberId: 12, title: '水のシンフォニー', awakenTitle: 'ロイヤルエンジェル', rarityId: 3, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  45: { memberId: 13, title: '浦の星女学院3年生', awakenTitle: '浦の星のアクアダイバー', rarityId: 1, attributeId: 2, roleId: 4, fromId: ['gacha', 1] },
  46: { memberId: 13, title: 'Aqours専任コーチ', awakenTitle: 'みんなのお姉さん', rarityId: 1, attributeId: 6, roleId: 3, fromId: ['gacha', 1] },
  47: { memberId: 13, title: '大切な思い出', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 3, roleId: 2, fromId: ['gacha', 1] },
  48: { memberId: 13, title: 'そろそろ一緒に潜ってみる？', awakenTitle: '海神の巫女', rarityId: 3, attributeId: 5, roleId: 1, fromId: ['gacha', 1] },
  49: { memberId: 14, title: '浦の星女学院3年生', awakenTitle: '浦の星の生徒会長', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  50: { memberId: 14, title: 'Aqoursのツッコミ担当', awakenTitle: 'スクールアイドルアニマ', rarityId: 1, attributeId: 5, roleId: 2, fromId: ['gacha', 1] },
  51: { memberId: 14, title: 'あなたという人は！', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 1, roleId: 3, fromId: ['gacha', 1] },
  52: { memberId: 14, title: '内緒ですわよ', awakenTitle: '巫女舞ステップ', rarityId: 3, attributeId: 6, roleId: 4, fromId: ['gacha', 1] },
  53: { memberId: 15, title: '浦の星女学院2年生', awakenTitle: '陽気な人気者', rarityId: 1, attributeId: 4, roleId: 1, fromId: ['gacha', 1] },
  54: { memberId: 15, title: 'Aqours料理担当', awakenTitle: '敬礼っ！', rarityId: 1, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  55: { memberId: 15, title: '放課後ホリデー', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 1] },
  56: { memberId: 15, title: '水族館デート', awakenTitle: 'ラビットインワンダーランド', rarityId: 3, attributeId: 3, roleId: 3, fromId: ['gacha', 1] },
  57: { memberId: 16, title: '浦の星女学院1年生', awakenTitle: '浦の星の有名？配信者', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  58: { memberId: 16, title: 'Aqoursの堕天使', awakenTitle: '堕天使ヨハネ', rarityId: 1, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  59: { memberId: 16, title: '正座対決', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  60: { memberId: 16, title: 'エンジェルスナイパー', awakenTitle: 'ホーンテッドプリンセス', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 1] },
  61: { memberId: 17, title: '浦の星女学院1年生', awakenTitle: '浦の星の図書委員', rarityId: 1, attributeId: 1, roleId: 3, fromId: ['gacha', 1] },
  62: { memberId: 17, title: 'Aqoursの歩く図書館', awakenTitle: '天然素材スクールアイドル', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  63: { memberId: 17, title: '二人は親友', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 5, roleId: 4, fromId: ['gacha', 1] },
  64: { memberId: 17, title: '紙越しの緑', awakenTitle: 'ドリーミングシープ', rarityId: 3, attributeId: 2, roleId: 2, fromId: ['gacha', 1] },
  65: { memberId: 18, title: '浦の星女学院3年生', awakenTitle: '浦の星の理事長', rarityId: 1, attributeId: 6, roleId: 2, fromId: ['gacha', 1] },
  66: { memberId: 18, title: 'Aqoursのムードメーカー', awakenTitle: 'さらに上を目指して', rarityId: 1, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  67: { memberId: 18, title: '一番ちかくに', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 4, roleId: 4, fromId: ['gacha', 1] },
  68: { memberId: 18, title: '初めてのツーショット', awakenTitle: 'Bitter & Sweet', rarityId: 3, attributeId: 5, roleId: 1, fromId: ['gacha', 1] },
  69: { memberId: 19, title: '浦の星女学院1年生', awakenTitle: '芯ある泣き虫', rarityId: 1, attributeId: 2, roleId: 3, fromId: ['gacha', 1] },
  70: { memberId: 19, title: 'Aqoursのマスコット', awakenTitle: '優しい妹', rarityId: 1, attributeId: 1, roleId: 2, fromId: ['gacha', 1] },
  71: { memberId: 19, title: '姉妹の休日', awakenTitle: 'ハピネスチアガール', rarityId: 2, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  72: { memberId: 19, title: '夢のスイートポテト', awakenTitle: 'ファンタスティックピエロ', rarityId: 3, attributeId: 4, roleId: 4, fromId: ['gacha', 1] },

  73: { memberId: 21, title: '虹ヶ咲学園2年生', awakenTitle: '真面目な努力家', rarityId: 1, attributeId: 1, roleId: 2, fromId: ['gacha', 1] },
  74: { memberId: 21, title: '努力家スクールアイドル', awakenTitle: '昨日より一歩前へ', rarityId: 1, attributeId: 6, roleId: 4, fromId: ['gacha', 1] },
  75: { memberId: 21, title: '食べ過ぎ注意報', awakenTitle: '夢への一歩', rarityId: 2, attributeId: 4, roleId: 3, fromId: ['gacha', 1] },
  76: { memberId: 22, title: '虹ヶ咲学園1年生', awakenTitle: 'プリティーマスコット', rarityId: 1, attributeId: 6, roleId: 1, fromId: ['gacha', 1] },
  77: { memberId: 22, title: '虎視眈々スクールアイドル', awakenTitle: 'スクールアイドル研究家', rarityId: 1, attributeId: 1, roleId: 3, fromId: ['gacha', 1] },
  78: { memberId: 22, title: '楽しみなご褒美！', awakenTitle: 'ダイアモンド', rarityId: 2, attributeId: 4, roleId: 4, fromId: ['gacha', 1] },
  79: { memberId: 23, title: '虹ヶ咲学園1年生', awakenTitle: 'しっかり者の優等生', rarityId: 1, attributeId: 6, roleId: 4, fromId: ['gacha', 1] },
  80: { memberId: 23, title: '演劇部兼スクールアイドル', awakenTitle: '高い表現力', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  81: { memberId: 23, title: '女優を夢見て', awakenTitle: 'あなたの理想のヒロイン', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 1] },
  82: { memberId: 24, title: '虹ヶ咲学園3年生', awakenTitle: '孤高の花', rarityId: 1, attributeId: 3, roleId: 1, fromId: ['gacha', 1] },
  83: { memberId: 24, title: 'モデル兼スクールアイドル', awakenTitle: '美の追求', rarityId: 1, attributeId: 6, roleId: 2, fromId: ['gacha', 1] },
  84: { memberId: 24, title: '教えてあげる', awakenTitle: 'Starlight', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['gacha', 1] },
  85: { memberId: 25, title: '虹ヶ咲学園2年生', awakenTitle: '虹ヶ咲の人気者', rarityId: 1, attributeId: 4, roleId: 1, fromId: ['gacha', 1] },
  86: { memberId: 25, title: 'ダジャレ大好きスクールアイドル', awakenTitle: 'チャレンジャー愛', rarityId: 1, attributeId: 3, roleId: 4, fromId: ['gacha', 1] },
  87: { memberId: 25, title: '愛のメモリー', awakenTitle: 'めっちゃGoing!!', rarityId: 2, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  88: { memberId: 26, title: '虹ヶ咲学園3年生', awakenTitle: '中庭の眠り姫', rarityId: 1, attributeId: 2, roleId: 4, fromId: ['gacha', 1] },
  89: { memberId: 26, title: '眠れるスクールアイドル', awakenTitle: 'スリーピングビューティー', rarityId: 1, attributeId: 1, roleId: 3, fromId: ['gacha', 1] },
  90: { memberId: 26, title: '夢見心地のティータイム', awakenTitle: '眠れる森に行きたいな', rarityId: 2, attributeId: 5, roleId: 2, fromId: ['gacha', 1] },
  91: { memberId: 27, title: '虹ヶ咲学園2年生', awakenTitle: '？？？？系スクールアイドル', rarityId: 1, attributeId: 4, roleId: 2, fromId: ['gacha', 1] },
  92: { memberId: 27, title: '期待のスクールアイドル', awakenTitle: '頼れる才女', rarityId: 1, attributeId: 5, roleId: 1, fromId: ['gacha', 1] },
  93: { memberId: 27, title: 'もっと教えてください！', awakenTitle: 'CHASE!', rarityId: 2, attributeId: 6, roleId: 3, fromId: ['gacha', 1] },
  94: { memberId: 28, title: '虹ヶ咲学園3年生', awakenTitle: 'おっとりマイペース', rarityId: 1, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  95: { memberId: 28, title: 'スイスから来たスクールアイドル', awakenTitle: 'アルプスの少女', rarityId: 1, attributeId: 2, roleId: 4, fromId: ['gacha', 1] },
  96: { memberId: 28, title: 'ぽかぽか天使', awakenTitle: 'Evergreen', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 1] },
  97: { memberId: 29, title: '虹ヶ咲学園1年生', awakenTitle: '秘められた素顔', rarityId: 1, attributeId: 5, roleId: 3, fromId: ['gacha', 1] },
  98: { memberId: 29, title: '顔出しNG系スクールアイドル', awakenTitle: '璃奈ちゃんボード', rarityId: 1, attributeId: 4, roleId: 2, fromId: ['gacha', 1] },
  99: { memberId: 29, title: 'はい！チーズ', awakenTitle: 'ドキピポ☆エモーション', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['gacha', 1] },

  100: { memberId: 3, title: 'こっち手伝ってくれる？', awakenTitle: 'welcome to the party', rarityId: 3, attributeId: 5, roleId: 4, fromId: ['gacha', 10001] },
  101: { memberId: 15, title: 'つまみ食いしちゃダメだよ？', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['gacha', 10001] },
  102: { memberId: 1, title: '今日は目一杯楽しもー！', awakenTitle: 'welcome to the party', rarityId: 3, attributeId: 1, roleId: 2, fromId: ['event', 1] },
  103: { memberId: 11, title: '沼津の名産', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 1, roleId: 3, fromId: ['event', 1] },
  104: { memberId: 21, title: 'みんな喜んでくれるかな？', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['event', 1] },

  105: { memberId: 16, title: '堕天使降臨っ！', awakenTitle: 'トワイライトデーモン', rarityId: 3, attributeId: 3, roleId: 3, fromId: ['gacha', 20001] },
  106: { memberId: 2, title: '少し隣で待っててくれる？', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 4, roleId: 4, fromId: ['gacha', 20001] },

  107: { memberId: 14, title: '次のポーズはどのように？', awakenTitle: 'ラピヌ・ミミ', rarityId: 3, attributeId: 3, roleId: 2, fromId: ['gacha', 10002] },
  108: { memberId: 6, title: 'あまりジロジロ見ないでくれる？', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 6, roleId: 4, fromId: ['gacha', 10002] },
  109: { memberId: 19, title: 'こ、こう、ですか？', awakenTitle: 'ラピヌ・ミミ', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['event', 2] },
  110: { memberId: 9, title: '誰が七五三よ！', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['event', 2] },
  111: { memberId: 22, title: 'かすみんに死角はないですよ～', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['event', 2] },

  112: { memberId: 4, title: '一射入魂', awakenTitle: 'ブルーアモール', rarityId: 3, attributeId: 4, roleId: 1, fromId: ['gacha', 20002] },
  113: { memberId: 17, title: 'マルの大好きな本！', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 3, roleId: 3, fromId: ['gacha', 20002] },
  114: { memberId: 23, title: '虹ヶ咲のジュリエット', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 3, roleId: 1, fromId: ['gacha', 20002] },

  115: { memberId: 13, title: 'ちゃんと繋がれたんだから', awakenTitle: 'ブルーレーヴ', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 10003] },
  116: { memberId: 5, title: 'お布団気持ちいいにゃ〜♪♪', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['gacha', 10003] },
  117: { memberId: 8, title: '一歩きりで終わらせないように', awakenTitle: 'フルールレーヴ', rarityId: 3, attributeId: 2, roleId: 4, fromId: ['event', 3] },
  118: { memberId: 18, title: 'これが下町マジック……！', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 2, roleId: 3, fromId: ['event', 3] },
  119: { memberId: 25, title: '特別なお出かけ', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['event', 3] },

  120: { memberId: 12, title: '迷いのない澄んだ旋律', awakenTitle: 'プレリュードブロッサム', rarityId: 3, attributeId: 1, roleId: 4, fromId: ['gacha', 20003] },
  121: { memberId: 7, title: 'あなたのことも占ってあげる', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 6, roleId: 2, fromId: ['gacha', 20003] },

  122: { memberId: 2, title: 'い、今、そこの茂みが揺れて……', awakenTitle: 'フォレストフェアリー', rarityId: 3, attributeId: 5, roleId: 1, fromId: ['gacha', 10004] },
  123: { memberId: 16, title: '嘆くのはおやめなさい', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 6, roleId: 3, fromId: ['gacha', 10004] },
  124: { memberId: 17, title: 'それが、野鳥観察の入り口ずら！', awakenTitle: 'フォレストフェアリー', rarityId: 3, attributeId: 4, roleId: 1, fromId: ['event', 4] },
  125: { memberId: 4, title: '計画を立てましょう！', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['event', 4] },
  126: { memberId: 26, title: '遅れてごめんね〜', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 3, roleId: 1, fromId: ['event', 4] },

  127: { memberId: 6, title: '私をこんなに待たせるなんて', awakenTitle: 'ドラマティックローズ', rarityId: 3, attributeId: 6, roleId: 3, fromId: ['gacha', 30001] },
  128: { memberId: 15, title: 'せっかく一緒に海に来たんだし', awakenTitle: 'スプラッシュマリン', rarityId: 3, attributeId: 2, roleId: 1, fromId: ['gacha', 30001] },
  129: { memberId: 24, title: 'キミと二人きりだもの', awakenTitle: 'ブルータンタシオン', rarityId: 3, attributeId: 3, roleId: 2, fromId: ['gacha', 30001] },
  130: { memberId: 3, title: 'お手本を見せるね', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['gacha', 30001] },
  131: { memberId: 19, title: 'とことんこだわって作りたいな', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 30001] },

  132: { memberId: 11, title: '流星に囲まれて', awakenTitle: 'レオスターブライト', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['gacha', 10005] },
  133: { memberId: 8, title: 'お弁当と言えば……', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['gacha', 10005] },
  134: { memberId: 7, title: 'もしかしたら叶うかもしれないよ', awakenTitle: 'ジェミニスターブライト', rarityId: 3, attributeId: 4, roleId: 2, fromId: ['event', 5] },
  135: { memberId: 12, title: '千歌ちゃん、起きて！', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 3, roleId: 3, fromId: ['event', 5] },
  136: { memberId: 28, title: '言葉に言い表せない魅力', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['event', 5] },

  137: { memberId: 5, title: 'こっちこっち早くするにゃ！', awakenTitle: 'アフタースクールキャット', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['gacha', 20004] },
  138: { memberId: 13, title: 'ひと泳ぎしてたんだよ〜', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 4, roleId: 4, fromId: ['gacha', 20004] },

  139: { memberId: 9, title: 'ニコの特製お弁当いかがですかぁ', awakenTitle: '明星の汽笛', rarityId: 3, attributeId: 4, roleId: 4, fromId: ['gacha', 10006] },
  140: { memberId: 14, title: '真面目なアナウンス', awakenTitle: '君のこころは輝いてるかい？', rarityId: 2, attributeId: 6, roleId: 1, fromId: ['gacha', 10006] },
  141: { memberId: 18, title: 'それじゃ、レッツゴー♪', awakenTitle: '明星の汽笛', rarityId: 3, attributeId: 2, roleId: 3, fromId: ['event', 6] },
  142: { memberId: 1, title: 'お荷物のせますね～', awakenTitle: 'Snow halation', rarityId: 2, attributeId: 1, roleId: 1, fromId: ['event', 6] },
  143: { memberId: 29, title: 'にっこりんな飾りつけ', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['event', 6] },
};
/* eslint-enable object-curly-newline, max-len */

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

interface Parameter {
  readonly [id: number]: {
    readonly appl: number,
    readonly stam: number,
    readonly tech: number,
  }[],
}

/* eslint-disable object-curly-newline, max-len */
export const PARAMETER: Parameter = {
  1: [{ appl: 1921, stam: 1603, tech: 2882 }, { appl: 2076, stam: 1861, tech: 3114 }, { appl: 2386, stam: 1990, tech: 3346 }, { appl: 2696, stam: 2119, tech: 3810 }, { appl: 3006, stam: 2377, tech: 4274 }, { appl: 3166, stam: 2638, tech: 4750 }],
  2: [{ appl: 2201, stam: 2566, tech: 2566 }, { appl: 2555, stam: 2773, tech: 2773 }, { appl: 2732, stam: 2980, tech: 3187 }, { appl: 2909, stam: 3394, tech: 3601 }, { appl: 3263, stam: 3808, tech: 4015 }, { appl: 3625, stam: 4229, tech: 4229 }],
  3: [{ appl: 3968, stam: 2976, tech: 2976 }, { appl: 4480, stam: 3360, tech: 3360 }, { appl: 4992, stam: 3744, tech: 3744 }, { appl: 5504, stam: 3936, tech: 4128 }, { appl: 5760, stam: 4320, tech: 4704 }, { appl: 6528, stam: 4896, tech: 4896 }],
  4: [{ appl: 4446, stam: 6663, tech: 3699 }, { appl: 5322, stam: 7539, tech: 3942 }, { appl: 5614, stam: 8853, tech: 4671 }, { appl: 6198, stam: 9729, tech: 5643 }, { appl: 7366, stam: 10605, tech: 6129 }, { appl: 7956, stam: 11934, tech: 6630 }],
  5: [{ appl: 2116, stam: 2116, tech: 2173 }, { appl: 2456, stam: 2286, tech: 2348 }, { appl: 2626, stam: 2456, tech: 2698 }, { appl: 2796, stam: 2796, tech: 3048 }, { appl: 3136, stam: 3136, tech: 3398 }, { appl: 3482, stam: 3482, tech: 3587 }],
  6: [{ appl: 2201, stam: 1835, tech: 3297 }, { appl: 2555, stam: 1983, tech: 3563 }, { appl: 2732, stam: 2279, tech: 3829 }, { appl: 2909, stam: 2575, tech: 4361 }, { appl: 3263, stam: 2871, tech: 4893 }, { appl: 3625, stam: 3020, tech: 5437 }],
  7: [{ appl: 3968, stam: 2976, tech: 2976 }, { appl: 4480, stam: 3360, tech: 3360 }, { appl: 4992, stam: 3744, tech: 3744 }, { appl: 5248, stam: 4128, tech: 4128 }, { appl: 5760, stam: 4320, tech: 4704 }, { appl: 6528, stam: 4896, tech: 4896 }],
  8: [{ appl: 5181, stam: 2964, tech: 6663 }, { appl: 6204, stam: 3354, tech: 7101 }, { appl: 6545, stam: 3939, tech: 8415 }, { appl: 7227, stam: 4329, tech: 10167 }, { appl: 8591, stam: 4719, tech: 11043 }, { appl: 9282, stam: 5304, tech: 11934 }],
  9: [{ appl: 1921, stam: 2564, tech: 1921 }, { appl: 2231, stam: 2771, tech: 2076 }, { appl: 2386, stam: 2978, tech: 2386 }, { appl: 2541, stam: 3392, tech: 2696 }, { appl: 2851, stam: 3806, tech: 3006 }, { appl: 3166, stam: 4222, tech: 3166 }],
  10: [{ appl: 2932, stam: 2201, tech: 2201 }, { appl: 3406, stam: 2378, tech: 2378 }, { appl: 3643, stam: 2732, tech: 2555 }, { appl: 3880, stam: 3086, tech: 2909 }, { appl: 4354, stam: 3440, tech: 3263 }, { appl: 4834, stam: 3625, tech: 3625 }],
  11: [{ appl: 3269, stam: 3269, tech: 3370 }, { appl: 3691, stam: 3691, tech: 3804 }, { appl: 4113, stam: 4113, tech: 4238 }, { appl: 4535, stam: 4324, tech: 4672 }, { appl: 5168, stam: 4746, tech: 4889 }, { appl: 5385, stam: 5385, tech: 5548 }],
  12: [{ appl: 4446, stam: 4446, tech: 5928 }, { appl: 5030, stam: 4738, tech: 7098 }, { appl: 5906, stam: 5614, tech: 7488 }, { appl: 6490, stam: 6782, tech: 8268 }, { appl: 7074, stam: 7366, tech: 9828 }, { appl: 7956, stam: 7956, tech: 10608 }],
  13: [{ appl: 2116, stam: 2116, tech: 2173 }, { appl: 2456, stam: 2286, tech: 2348 }, { appl: 2626, stam: 2626, tech: 2523 }, { appl: 2796, stam: 2966, tech: 2873 }, { appl: 3136, stam: 3306, tech: 3223 }, { appl: 3482, stam: 3482, tech: 3587 }],
  14: [{ appl: 2201, stam: 2566, tech: 2566 }, { appl: 2378, stam: 2980, tech: 2773 }, { appl: 2732, stam: 3187, tech: 2980 }, { appl: 3086, stam: 3394, tech: 3394 }, { appl: 3440, stam: 3808, tech: 3808 }, { appl: 3625, stam: 4229, tech: 4229 }],
  15: [{ appl: 2976, stam: 3968, tech: 2976 }, { appl: 3360, stam: 4480, tech: 3360 }, { appl: 3744, stam: 4992, tech: 3744 }, { appl: 4128, stam: 5248, tech: 4128 }, { appl: 4704, stam: 5760, tech: 4320 }, { appl: 4896, stam: 6528, tech: 4896 }],
  16: [{ appl: 6663, stam: 2964, tech: 5181 }, { appl: 7101, stam: 3549, tech: 5863 }, { appl: 8415, stam: 3744, tech: 6886 }, { appl: 10167, stam: 4134, tech: 7568 }, { appl: 11043, stam: 4914, tech: 8250 }, { appl: 11934, stam: 5304, tech: 9282 }],
  17: [{ appl: 2564, stam: 1921, tech: 1921 }, { appl: 2771, stam: 2076, tech: 2231 }, { appl: 2978, stam: 2386, tech: 2386 }, { appl: 3392, stam: 2696, tech: 2541 }, { appl: 3806, stam: 3006, tech: 2851 }, { appl: 4222, stam: 3166, tech: 3166 }],
  18: [{ appl: 2201, stam: 2566, tech: 2566 }, { appl: 2378, stam: 2980, tech: 2773 }, { appl: 2732, stam: 3187, tech: 2980 }, { appl: 3086, stam: 3394, tech: 3394 }, { appl: 3440, stam: 3808, tech: 3808 }, { appl: 3625, stam: 4229, tech: 4229 }],
  19: [{ appl: 2976, stam: 1984, tech: 4960 }, { appl: 3360, stam: 2240, tech: 5600 }, { appl: 3744, stam: 2496, tech: 6240 }, { appl: 4128, stam: 2624, tech: 6880 }, { appl: 4320, stam: 2880, tech: 7840 }, { appl: 4896, stam: 3264, tech: 8160 }],
  20: [{ appl: 4884, stam: 4884, tech: 5038 }, { appl: 5205, stam: 5847, tech: 5700 }, { appl: 6168, stam: 6168, tech: 6693 }, { appl: 7452, stam: 6810, tech: 7355 }, { appl: 8094, stam: 8094, tech: 8017 }, { appl: 8751, stam: 8751, tech: 9016 }],
  21: [{ appl: 1921, stam: 2238, tech: 2238 }, { appl: 2076, stam: 2600, tech: 2419 }, { appl: 2386, stam: 2781, tech: 2600 }, { appl: 2696, stam: 2962, tech: 2962 }, { appl: 3006, stam: 3324, tech: 3324 }, { appl: 3166, stam: 3693, tech: 3693 }],
  22: [{ appl: 2201, stam: 2932, tech: 2201 }, { appl: 2378, stam: 3169, tech: 2555 }, { appl: 2555, stam: 3643, tech: 2732 }, { appl: 2909, stam: 4117, tech: 2909 }, { appl: 3263, stam: 4591, tech: 3263 }, { appl: 3625, stam: 4834, tech: 3625 }],
  23: [{ appl: 2976, stam: 2480, tech: 4464 }, { appl: 3360, stam: 2800, tech: 5040 }, { appl: 3744, stam: 3120, tech: 5616 }, { appl: 4128, stam: 3440, tech: 5904 }, { appl: 4320, stam: 3920, tech: 6480 }, { appl: 4896, stam: 4080, tech: 7344 }],
  24: [{ appl: 7113, stam: 2513, tech: 5181 }, { appl: 7581, stam: 2843, tech: 6204 }, { appl: 8985, stam: 3338, tech: 6545 }, { appl: 10857, stam: 3668, tech: 7227 }, { appl: 11793, stam: 3998, tech: 8591 }, { appl: 12729, stam: 4508, tech: 9282 }],
  25: [{ appl: 1921, stam: 1921, tech: 2564 }, { appl: 2076, stam: 2076, tech: 2978 }, { appl: 2231, stam: 2386, tech: 3185 }, { appl: 2541, stam: 2696, tech: 3392 }, { appl: 2851, stam: 3006, tech: 3806 }, { appl: 3166, stam: 3166, tech: 4222 }],
  26: [{ appl: 2932, stam: 2201, tech: 2201 }, { appl: 3406, stam: 2378, tech: 2378 }, { appl: 3643, stam: 2555, tech: 2732 }, { appl: 3880, stam: 2909, tech: 3086 }, { appl: 4354, stam: 3263, tech: 3440 }, { appl: 4834, stam: 3625, tech: 3625 }],
  27: [{ appl: 3472, stam: 1984, tech: 4464 }, { appl: 3920, stam: 2240, tech: 5040 }, { appl: 4368, stam: 2496, tech: 5616 }, { appl: 4592, stam: 2752, tech: 6192 }, { appl: 5040, stam: 2880, tech: 7056 }, { appl: 5712, stam: 3264, tech: 7344 }],
  28: [{ appl: 4446, stam: 6663, tech: 3699 }, { appl: 4738, stam: 7539, tech: 4428 }, { appl: 5614, stam: 8853, tech: 4671 }, { appl: 6782, stam: 9729, tech: 5157 }, { appl: 7366, stam: 10605, tech: 6129 }, { appl: 7956, stam: 11934, tech: 6630 }],
  29: [{ appl: 1921, stam: 2564, tech: 1921 }, { appl: 2231, stam: 2771, tech: 2076 }, { appl: 2386, stam: 2978, tech: 2386 }, { appl: 2541, stam: 3392, tech: 2696 }, { appl: 2851, stam: 3806, tech: 3006 }, { appl: 3166, stam: 4222, tech: 3166 }],
  30: [{ appl: 2932, stam: 2201, tech: 2201 }, { appl: 3406, stam: 2378, tech: 2378 }, { appl: 3643, stam: 2732, tech: 2555 }, { appl: 3880, stam: 3086, tech: 2909 }, { appl: 4354, stam: 3440, tech: 3263 }, { appl: 4834, stam: 3625, tech: 3625 }],
  31: [{ appl: 3269, stam: 3269, tech: 3370 }, { appl: 3691, stam: 3691, tech: 3804 }, { appl: 4113, stam: 4113, tech: 4238 }, { appl: 4324, stam: 4535, tech: 4672 }, { appl: 4746, stam: 4746, tech: 5323 }, { appl: 5385, stam: 5385, tech: 5548 }],
  32: [{ appl: 4446, stam: 4446, tech: 5928 }, { appl: 5322, stam: 5030, tech: 6318 }, { appl: 5614, stam: 5906, tech: 7488 }, { appl: 6198, stam: 6490, tech: 9048 }, { appl: 7366, stam: 7074, tech: 9828 }, { appl: 7956, stam: 7956, tech: 10608 }],
  33: [{ appl: 2564, stam: 2238, tech: 1603 }, { appl: 2978, stam: 2419, tech: 1732 }, { appl: 3185, stam: 2781, tech: 1861 }, { appl: 3392, stam: 3143, tech: 2119 }, { appl: 3806, stam: 3505, tech: 2377 }, { appl: 4222, stam: 3693, tech: 2638 }],
  34: [{ appl: 2201, stam: 1835, tech: 3297 }, { appl: 2555, stam: 1983, tech: 3563 }, { appl: 2732, stam: 2131, tech: 4095 }, { appl: 2909, stam: 2427, tech: 4627 }, { appl: 3263, stam: 2723, tech: 5159 }, { appl: 3625, stam: 3020, tech: 5437 }],
  35: [{ appl: 2976, stam: 3968, tech: 2976 }, { appl: 3360, stam: 4480, tech: 3360 }, { appl: 3744, stam: 4992, tech: 3744 }, { appl: 4128, stam: 5248, tech: 4128 }, { appl: 4704, stam: 5760, tech: 4320 }, { appl: 4896, stam: 6528, tech: 4896 }],
  36: [{ appl: 4446, stam: 5631, tech: 4742 }, { appl: 5030, stam: 6001, tech: 5678 }, { appl: 5906, stam: 7111, tech: 5990 }, { appl: 6490, stam: 8591, tech: 6614 }, { appl: 7074, stam: 9331, tech: 7862 }, { appl: 7956, stam: 10077, tech: 8486 }],
  37: [{ appl: 1921, stam: 2238, tech: 2238 }, { appl: 2231, stam: 2419, tech: 2419 }, { appl: 2386, stam: 2600, tech: 2781 }, { appl: 2541, stam: 2962, tech: 3143 }, { appl: 2851, stam: 3324, tech: 3505 }, { appl: 3166, stam: 3693, tech: 3693 }],
  38: [{ appl: 2419, stam: 2419, tech: 2496 }, { appl: 2614, stam: 2614, tech: 2898 }, { appl: 2809, stam: 3004, tech: 3099 }, { appl: 3199, stam: 3394, tech: 3300 }, { appl: 3589, stam: 3784, tech: 3702 }, { appl: 3988, stam: 3988, tech: 4107 }],
  39: [{ appl: 3968, stam: 2976, tech: 2976 }, { appl: 4480, stam: 3360, tech: 3360 }, { appl: 4992, stam: 3744, tech: 3744 }, { appl: 5248, stam: 4128, tech: 4128 }, { appl: 5760, stam: 4320, tech: 4704 }, { appl: 6528, stam: 4896, tech: 4896 }],
  40: [{ appl: 2964, stam: 7113, tech: 4742 }, { appl: 3159, stam: 8049, tech: 5678 }, { appl: 3744, stam: 9453, tech: 5990 }, { appl: 4524, stam: 10389, tech: 6614 }, { appl: 4914, stam: 11325, tech: 7862 }, { appl: 5304, stam: 12729, tech: 8486 }],
  41: [{ appl: 1921, stam: 2238, tech: 2238 }, { appl: 2231, stam: 2419, tech: 2419 }, { appl: 2386, stam: 2781, tech: 2600 }, { appl: 2541, stam: 3143, tech: 2962 }, { appl: 2851, stam: 3505, tech: 3324 }, { appl: 3166, stam: 3693, tech: 3693 }],
  42: [{ appl: 2932, stam: 2201, tech: 2201 }, { appl: 3169, stam: 2555, tech: 2378 }, { appl: 3643, stam: 2732, tech: 2555 }, { appl: 4117, stam: 2909, tech: 2909 }, { appl: 4591, stam: 3263, tech: 3263 }, { appl: 4834, stam: 3625, tech: 3625 }],
  43: [{ appl: 1680, stam: 4757, tech: 3472 }, { appl: 1896, stam: 5371, tech: 3920 }, { appl: 2112, stam: 5985, tech: 4368 }, { appl: 2328, stam: 6599, tech: 4592 }, { appl: 2436, stam: 7520, tech: 5040 }, { appl: 2774, stam: 7833, tech: 5712 }],
  44: [{ appl: 4446, stam: 4446, tech: 5928 }, { appl: 5322, stam: 5030, tech: 6318 }, { appl: 5614, stam: 5906, tech: 7488 }, { appl: 6198, stam: 6490, tech: 9048 }, { appl: 7366, stam: 7074, tech: 9828 }, { appl: 7956, stam: 7956, tech: 10608 }],
  45: [{ appl: 2116, stam: 2116, tech: 2173 }, { appl: 2456, stam: 2286, tech: 2348 }, { appl: 2626, stam: 2626, tech: 2523 }, { appl: 2796, stam: 2966, tech: 2873 }, { appl: 3136, stam: 3306, tech: 3223 }, { appl: 3482, stam: 3482, tech: 3587 }],
  46: [{ appl: 2201, stam: 2932, tech: 2201 }, { appl: 2378, stam: 3169, tech: 2555 }, { appl: 2555, stam: 3643, tech: 2732 }, { appl: 2909, stam: 4117, tech: 2909 }, { appl: 3263, stam: 4591, tech: 3263 }, { appl: 3625, stam: 4834, tech: 3625 }],
  47: [{ appl: 2976, stam: 3472, tech: 3472 }, { appl: 3360, stam: 3920, tech: 3920 }, { appl: 3744, stam: 4368, tech: 4368 }, { appl: 4128, stam: 4816, tech: 4592 }, { appl: 4320, stam: 5488, tech: 5040 }, { appl: 4896, stam: 5712, tech: 5712 }],
  48: [{ appl: 6663, stam: 2964, tech: 5181 }, { appl: 7539, stam: 3159, tech: 6204 }, { appl: 8853, stam: 3744, tech: 6545 }, { appl: 9729, stam: 4524, tech: 7227 }, { appl: 10605, stam: 4914, tech: 8591 }, { appl: 11934, stam: 5304, tech: 9282 }],
  49: [{ appl: 1921, stam: 1603, tech: 2882 }, { appl: 2076, stam: 1861, tech: 3114 }, { appl: 2386, stam: 1990, tech: 3346 }, { appl: 2696, stam: 2119, tech: 3810 }, { appl: 3006, stam: 2377, tech: 4274 }, { appl: 3166, stam: 2638, tech: 4750 }],
  50: [{ appl: 2201, stam: 2566, tech: 2566 }, { appl: 2555, stam: 2773, tech: 2773 }, { appl: 2732, stam: 2980, tech: 3187 }, { appl: 2909, stam: 3394, tech: 3601 }, { appl: 3263, stam: 3808, tech: 4015 }, { appl: 3625, stam: 4229, tech: 4229 }],
  51: [{ appl: 2976, stam: 3968, tech: 2976 }, { appl: 3360, stam: 4480, tech: 3360 }, { appl: 3744, stam: 4992, tech: 3744 }, { appl: 4128, stam: 5248, tech: 4128 }, { appl: 4704, stam: 5760, tech: 4320 }, { appl: 4896, stam: 6528, tech: 4896 }],
  52: [{ appl: 6663, stam: 2964, tech: 5181 }, { appl: 7101, stam: 3354, tech: 6204 }, { appl: 8415, stam: 3939, tech: 6545 }, { appl: 10167, stam: 4329, tech: 7227 }, { appl: 11043, stam: 4719, tech: 8591 }, { appl: 11934, stam: 5304, tech: 9282 }],
  53: [{ appl: 2564, stam: 1921, tech: 1921 }, { appl: 2771, stam: 2231, tech: 2076 }, { appl: 3185, stam: 2386, tech: 2231 }, { appl: 3599, stam: 2541, tech: 2541 }, { appl: 4013, stam: 2851, tech: 2851 }, { appl: 4222, stam: 3166, tech: 3166 }],
  54: [{ appl: 2201, stam: 2932, tech: 2201 }, { appl: 2555, stam: 3169, tech: 2378 }, { appl: 2732, stam: 3643, tech: 2555 }, { appl: 2909, stam: 4117, tech: 2909 }, { appl: 3263, stam: 4591, tech: 3263 }, { appl: 3625, stam: 4834, tech: 3625 }],
  55: [{ appl: 2976, stam: 2480, tech: 4464 }, { appl: 3360, stam: 2800, tech: 5040 }, { appl: 3744, stam: 3120, tech: 5616 }, { appl: 4128, stam: 3440, tech: 5904 }, { appl: 4320, stam: 3920, tech: 6480 }, { appl: 4896, stam: 4080, tech: 7344 }],
  56: [{ appl: 5181, stam: 2964, tech: 6663 }, { appl: 6204, stam: 3354, tech: 7101 }, { appl: 6545, stam: 3939, tech: 8415 }, { appl: 7227, stam: 4329, tech: 10167 }, { appl: 8591, stam: 4719, tech: 11043 }, { appl: 9282, stam: 5304, tech: 11934 }],
  57: [{ appl: 2564, stam: 1921, tech: 1921 }, { appl: 2771, stam: 2231, tech: 2076 }, { appl: 3185, stam: 2386, tech: 2231 }, { appl: 3599, stam: 2541, tech: 2541 }, { appl: 4013, stam: 2851, tech: 2851 }, { appl: 4222, stam: 3166, tech: 3166 }],
  58: [{ appl: 2419, stam: 2419, tech: 2496 }, { appl: 2614, stam: 2614, tech: 2898 }, { appl: 2809, stam: 3004, tech: 3099 }, { appl: 3199, stam: 3394, tech: 3300 }, { appl: 3589, stam: 3784, tech: 3702 }, { appl: 3988, stam: 3988, tech: 4107 }],
  59: [{ appl: 2976, stam: 2480, tech: 4464 }, { appl: 3360, stam: 2800, tech: 5040 }, { appl: 3744, stam: 3120, tech: 5616 }, { appl: 4128, stam: 3280, tech: 6192 }, { appl: 4320, stam: 3600, tech: 7056 }, { appl: 4896, stam: 4080, tech: 7344 }],
  60: [{ appl: 5181, stam: 2964, tech: 6663 }, { appl: 5522, stam: 3549, tech: 7539 }, { appl: 6545, stam: 3744, tech: 8853 }, { appl: 7909, stam: 4134, tech: 9729 }, { appl: 8591, stam: 4914, tech: 10605 }, { appl: 9282, stam: 5304, tech: 11934 }],
  61: [{ appl: 1921, stam: 1278, tech: 3207 }, { appl: 2076, stam: 1381, tech: 3723 }, { appl: 2231, stam: 1587, tech: 3981 }, { appl: 2541, stam: 1793, tech: 4239 }, { appl: 2851, stam: 1999, tech: 4755 }, { appl: 3166, stam: 2111, tech: 5277 }],
  62: [{ appl: 2201, stam: 2566, tech: 2566 }, { appl: 2378, stam: 2980, tech: 2773 }, { appl: 2732, stam: 3187, tech: 2980 }, { appl: 3086, stam: 3394, tech: 3394 }, { appl: 3440, stam: 3808, tech: 3808 }, { appl: 3625, stam: 4229, tech: 4229 }],
  63: [{ appl: 3269, stam: 3269, tech: 3370 }, { appl: 3691, stam: 3691, tech: 3804 }, { appl: 4113, stam: 4113, tech: 4238 }, { appl: 4535, stam: 4324, tech: 4672 }, { appl: 4746, stam: 4746, tech: 5323 }, { appl: 5385, stam: 5385, tech: 5548 }],
  64: [{ appl: 4446, stam: 2964, tech: 7410 }, { appl: 4738, stam: 3549, tech: 8384 }, { appl: 5614, stam: 3744, tech: 9845 }, { appl: 6782, stam: 4134, tech: 10819 }, { appl: 7366, stam: 4914, tech: 11793 }, { appl: 7956, stam: 5304, tech: 13260 }],
  65: [{ appl: 1921, stam: 1603, tech: 2882 }, { appl: 2231, stam: 1732, tech: 3114 }, { appl: 2386, stam: 1861, tech: 3578 }, { appl: 2541, stam: 2119, tech: 4042 }, { appl: 2851, stam: 2377, tech: 4506 }, { appl: 3166, stam: 2638, tech: 4750 }],
  66: [{ appl: 2201, stam: 2932, tech: 2201 }, { appl: 2378, stam: 3169, tech: 2555 }, { appl: 2555, stam: 3643, tech: 2732 }, { appl: 2909, stam: 4117, tech: 2909 }, { appl: 3263, stam: 4591, tech: 3263 }, { appl: 3625, stam: 4834, tech: 3625 }],
  67: [{ appl: 4757, stam: 1680, tech: 3472 }, { appl: 5371, stam: 1896, tech: 3920 }, { appl: 5985, stam: 2112, tech: 4368 }, { appl: 6599, stam: 2220, tech: 4816 }, { appl: 6906, stam: 2436, tech: 5488 }, { appl: 7833, stam: 2774, tech: 5712 }],
  68: [{ appl: 4884, stam: 4884, tech: 5038 }, { appl: 5526, stam: 5205, tech: 6031 }, { appl: 6489, stam: 6168, tech: 6362 }, { appl: 7131, stam: 7452, tech: 7024 }, { appl: 7773, stam: 8094, tech: 8348 }, { appl: 8751, stam: 8751, tech: 9016 }],
  69: [{ appl: 1921, stam: 2238, tech: 2238 }, { appl: 2076, stam: 2419, tech: 2600 }, { appl: 2231, stam: 2781, tech: 2781 }, { appl: 2541, stam: 3143, tech: 2962 }, { appl: 2851, stam: 3505, tech: 3324 }, { appl: 3166, stam: 3693, tech: 3693 }],
  70: [{ appl: 2932, stam: 2201, tech: 2201 }, { appl: 3406, stam: 2378, tech: 2378 }, { appl: 3643, stam: 2555, tech: 2732 }, { appl: 3880, stam: 2909, tech: 3086 }, { appl: 4354, stam: 3263, tech: 3440 }, { appl: 4834, stam: 3625, tech: 3625 }],
  71: [{ appl: 2976, stam: 2976, tech: 3968 }, { appl: 3360, stam: 3360, tech: 4480 }, { appl: 3744, stam: 3744, tech: 4992 }, { appl: 3936, stam: 4128, tech: 5504 }, { appl: 4320, stam: 4320, tech: 6272 }, { appl: 4896, stam: 4896, tech: 6528 }],
  72: [{ appl: 4446, stam: 6663, tech: 3699 }, { appl: 4738, stam: 7539, tech: 4428 }, { appl: 5614, stam: 8853, tech: 4671 }, { appl: 6782, stam: 9729, tech: 5157 }, { appl: 7366, stam: 10605, tech: 6129 }, { appl: 7956, stam: 11934, tech: 6630 }],
  73: [{ appl: 2564, stam: 1921, tech: 1921 }, { appl: 2978, stam: 2076, tech: 2076 }, { appl: 3185, stam: 2231, tech: 2386 }, { appl: 3392, stam: 2541, tech: 2696 }, { appl: 3806, stam: 2851, tech: 3006 }, { appl: 4222, stam: 3166, tech: 3166 }],
  74: [{ appl: 2419, stam: 2419, tech: 2496 }, { appl: 2809, stam: 2614, tech: 2697 }, { appl: 3004, stam: 3004, tech: 2898 }, { appl: 3199, stam: 3394, tech: 3300 }, { appl: 3589, stam: 3784, tech: 3702 }, { appl: 3988, stam: 3988, tech: 4107 }],
  75: [{ appl: 1984, stam: 4757, tech: 3168 }, { appl: 2240, stam: 5371, tech: 3576 }, { appl: 2496, stam: 5985, tech: 3984 }, { appl: 2752, stam: 6292, tech: 4392 }, { appl: 3136, stam: 6906, tech: 4596 }, { appl: 3264, stam: 7833, tech: 5222 }],
  76: [{ appl: 1921, stam: 2238, tech: 2238 }, { appl: 2076, stam: 2600, tech: 2419 }, { appl: 2386, stam: 2781, tech: 2600 }, { appl: 2696, stam: 2962, tech: 2962 }, { appl: 3006, stam: 3324, tech: 3324 }, { appl: 3166, stam: 3693, tech: 3693 }],
  77: [{ appl: 2201, stam: 2932, tech: 2201 }, { appl: 2378, stam: 3169, tech: 2555 }, { appl: 2555, stam: 3643, tech: 2732 }, { appl: 2909, stam: 4117, tech: 2909 }, { appl: 3263, stam: 4591, tech: 3263 }, { appl: 3625, stam: 4834, tech: 3625 }],
  78: [{ appl: 3269, stam: 3472, tech: 3168 }, { appl: 3691, stam: 3920, tech: 3576 }, { appl: 4113, stam: 4368, tech: 3984 }, { appl: 4535, stam: 4592, tech: 4392 }, { appl: 4746, stam: 5040, tech: 5004 }, { appl: 5385, stam: 5712, tech: 5222 }],
  79: [{ appl: 2116, stam: 2116, tech: 2173 }, { appl: 2456, stam: 2286, tech: 2348 }, { appl: 2626, stam: 2626, tech: 2523 }, { appl: 2796, stam: 2966, tech: 2873 }, { appl: 3136, stam: 3306, tech: 3223 }, { appl: 3482, stam: 3482, tech: 3587 }],
  80: [{ appl: 2932, stam: 2201, tech: 2201 }, { appl: 3169, stam: 2555, tech: 2378 }, { appl: 3643, stam: 2732, tech: 2555 }, { appl: 4117, stam: 2909, tech: 2909 }, { appl: 4591, stam: 3263, tech: 3263 }, { appl: 4834, stam: 3625, tech: 3625 }],
  81: [{ appl: 2976, stam: 2480, tech: 4464 }, { appl: 3360, stam: 2800, tech: 5040 }, { appl: 3744, stam: 3120, tech: 5616 }, { appl: 4128, stam: 3440, tech: 5904 }, { appl: 4320, stam: 3920, tech: 6480 }, { appl: 4896, stam: 4080, tech: 7344 }],
  82: [{ appl: 1921, stam: 1603, tech: 2882 }, { appl: 2076, stam: 1861, tech: 3114 }, { appl: 2386, stam: 1990, tech: 3346 }, { appl: 2696, stam: 2119, tech: 3810 }, { appl: 3006, stam: 2377, tech: 4274 }, { appl: 3166, stam: 2638, tech: 4750 }],
  83: [{ appl: 2201, stam: 2932, tech: 2201 }, { appl: 2555, stam: 3169, tech: 2378 }, { appl: 2732, stam: 3406, tech: 2732 }, { appl: 2909, stam: 3880, tech: 3086 }, { appl: 3263, stam: 4354, tech: 3440 }, { appl: 3625, stam: 4834, tech: 3625 }],
  84: [{ appl: 3968, stam: 2976, tech: 2976 }, { appl: 4480, stam: 3360, tech: 3360 }, { appl: 4992, stam: 3744, tech: 3744 }, { appl: 5504, stam: 3936, tech: 4128 }, { appl: 5760, stam: 4320, tech: 4704 }, { appl: 6528, stam: 4896, tech: 4896 }],
  85: [{ appl: 2116, stam: 2116, tech: 2173 }, { appl: 2286, stam: 2456, tech: 2348 }, { appl: 2626, stam: 2626, tech: 2523 }, { appl: 2966, stam: 2796, tech: 2873 }, { appl: 3306, stam: 3136, tech: 3223 }, { appl: 3482, stam: 3482, tech: 3587 }],
  86: [{ appl: 2932, stam: 2201, tech: 2201 }, { appl: 3406, stam: 2378, tech: 2378 }, { appl: 3643, stam: 2732, tech: 2555 }, { appl: 3880, stam: 3086, tech: 2909 }, { appl: 4354, stam: 3440, tech: 3263 }, { appl: 4834, stam: 3625, tech: 3625 }],
  87: [{ appl: 2976, stam: 2976, tech: 3968 }, { appl: 3360, stam: 3360, tech: 4480 }, { appl: 3744, stam: 3744, tech: 4992 }, { appl: 4128, stam: 3936, tech: 5504 }, { appl: 4704, stam: 4320, tech: 5760 }, { appl: 4896, stam: 4896, tech: 6528 }],
  88: [{ appl: 1921, stam: 2564, tech: 1921 }, { appl: 2231, stam: 2771, tech: 2076 }, { appl: 2386, stam: 3185, tech: 2231 }, { appl: 2541, stam: 3599, tech: 2541 }, { appl: 2851, stam: 4013, tech: 2851 }, { appl: 3166, stam: 4222, tech: 3166 }],
  89: [{ appl: 2201, stam: 2566, tech: 2566 }, { appl: 2378, stam: 2773, tech: 2980 }, { appl: 2555, stam: 3187, tech: 3187 }, { appl: 2909, stam: 3601, tech: 3394 }, { appl: 3263, stam: 4015, tech: 3808 }, { appl: 3625, stam: 4229, tech: 4229 }],
  90: [{ appl: 3269, stam: 3269, tech: 3370 }, { appl: 3691, stam: 3691, tech: 3804 }, { appl: 4113, stam: 4113, tech: 4238 }, { appl: 4535, stam: 4535, tech: 4455 }, { appl: 4746, stam: 5168, tech: 4889 }, { appl: 5385, stam: 5385, tech: 5548 }],
  91: [{ appl: 2564, stam: 1921, tech: 1921 }, { appl: 2978, stam: 2076, tech: 2076 }, { appl: 3185, stam: 2231, tech: 2386 }, { appl: 3392, stam: 2541, tech: 2696 }, { appl: 3806, stam: 2851, tech: 3006 }, { appl: 4222, stam: 3166, tech: 3166 }],
  92: [{ appl: 2201, stam: 2566, tech: 2566 }, { appl: 2378, stam: 2980, tech: 2773 }, { appl: 2732, stam: 3187, tech: 2980 }, { appl: 3086, stam: 3394, tech: 3394 }, { appl: 3440, stam: 3808, tech: 3808 }, { appl: 3625, stam: 4229, tech: 4229 }],
  93: [{ appl: 2976, stam: 3968, tech: 2976 }, { appl: 3360, stam: 4480, tech: 3360 }, { appl: 3744, stam: 4992, tech: 3744 }, { appl: 4128, stam: 5248, tech: 4128 }, { appl: 4704, stam: 5760, tech: 4320 }, { appl: 4896, stam: 6528, tech: 4896 }],
  94: [{ appl: 1921, stam: 2564, tech: 1921 }, { appl: 2076, stam: 2771, tech: 2231 }, { appl: 2231, stam: 3185, tech: 2386 }, { appl: 2541, stam: 3599, tech: 2541 }, { appl: 2851, stam: 4013, tech: 2851 }, { appl: 3166, stam: 4222, tech: 3166 }],
  95: [{ appl: 2201, stam: 1835, tech: 3297 }, { appl: 2555, stam: 1983, tech: 3563 }, { appl: 2732, stam: 2279, tech: 3829 }, { appl: 2909, stam: 2575, tech: 4361 }, { appl: 3263, stam: 2871, tech: 4893 }, { appl: 3625, stam: 3020, tech: 5437 }],
  96: [{ appl: 2976, stam: 3765, tech: 3168 }, { appl: 3360, stam: 4251, tech: 3576 }, { appl: 3744, stam: 4737, tech: 3984 }, { appl: 3936, stam: 5223, tech: 4392 }, { appl: 4320, stam: 5466, tech: 5004 }, { appl: 4896, stam: 6201, tech: 5222 }],
  97: [{ appl: 1921, stam: 2238, tech: 2238 }, { appl: 2076, stam: 2419, tech: 2600 }, { appl: 2231, stam: 2781, tech: 2781 }, { appl: 2541, stam: 3143, tech: 2962 }, { appl: 2851, stam: 3505, tech: 3324 }, { appl: 3166, stam: 3693, tech: 3693 }],
  98: [{ appl: 2201, stam: 1835, tech: 3297 }, { appl: 2555, stam: 1983, tech: 3563 }, { appl: 2732, stam: 2131, tech: 4095 }, { appl: 2909, stam: 2427, tech: 4627 }, { appl: 3263, stam: 2723, tech: 5159 }, { appl: 3625, stam: 3020, tech: 5437 }],
  99: [{ appl: 3968, stam: 2976, tech: 2976 }, { appl: 4480, stam: 3360, tech: 3360 }, { appl: 4992, stam: 3744, tech: 3744 }, { appl: 5248, stam: 4128, tech: 4128 }, { appl: 5760, stam: 4320, tech: 4704 }, { appl: 6528, stam: 4896, tech: 4896 }],

  100: [{ appl: 6340, stam: 4223, tech: 4522 }, { appl: 6757, stam: 4779, tech: 5416 }, { appl: 8008, stam: 5613, tech: 5714 }, { appl: 9676, stam: 6169, tech: 6310 }, { appl: 10510, stam: 6725, tech: 7502 }, { appl: 11351, stam: 7568, tech: 8108 }],
  101: [{ appl: 4239, stam: 3024, tech: 2820 }, { appl: 4785, stam: 3414, tech: 3184 }, { appl: 5331, stam: 3804, tech: 3548 }, { appl: 5604, stam: 4194, tech: 3912 }, { appl: 6150, stam: 4389, tech: 4458 }, { appl: 6980, stam: 4987, tech: 4654 }],
  102: [{ appl: 4038, stam: 4038, tech: 4157 }, { appl: 4304, stam: 4836, tech: 4705 }, { appl: 5102, stam: 5102, tech: 5527 }, { appl: 6166, stam: 5634, tech: 6075 }, { appl: 6698, stam: 6698, tech: 6623 }, { appl: 7234, stam: 7234, tech: 7455 }],
  103: [{ appl: 2466, stam: 3292, tech: 2466 }, { appl: 2784, stam: 3716, tech: 2784 }, { appl: 3102, stam: 4140, tech: 3102 }, { appl: 3420, stam: 4352, tech: 3420 }, { appl: 3897, stam: 4776, tech: 3579 }, { appl: 4069, stam: 5426, tech: 4069 }],
  104: [{ appl: 1888, stam: 3044, tech: 3292 }, { appl: 2132, stam: 3436, tech: 3716 }, { appl: 2376, stam: 3828, tech: 4140 }, { appl: 2620, stam: 4220, tech: 4352 }, { appl: 2742, stam: 4808, tech: 4776 }, { appl: 3118, stam: 5018, tech: 5426 }],

  105: [{ appl: 4575, stam: 5989, tech: 4522 }, { appl: 5469, stam: 6783, tech: 4820 }, { appl: 5767, stam: 7974, tech: 5714 }, { appl: 6363, stam: 8768, tech: 6906 }, { appl: 7555, stam: 9562, tech: 7502 }, { appl: 8161, stam: 10759, tech: 8108 }],
  106: [{ appl: 3024, stam: 3024, tech: 4036 }, { appl: 3414, stam: 3414, tech: 4556 }, { appl: 3804, stam: 3804, tech: 5076 }, { appl: 4194, stam: 3999, tech: 5596 }, { appl: 4389, stam: 4389, tech: 6376 }, { appl: 4987, stam: 4987, tech: 6650 }],

  107: [{ appl: 4522, stam: 5275, tech: 5275 }, { appl: 4820, stam: 6316, tech: 5969 }, { appl: 5714, stam: 6663, tech: 7010 }, { appl: 6906, stam: 7357, tech: 7704 }, { appl: 7502, stam: 8745, tech: 8398 }, { appl: 8108, stam: 9458, tech: 9458 }],
  108: [{ appl: 3024, stam: 3535, tech: 3535 }, { appl: 3414, stam: 3991, tech: 3991 }, { appl: 3804, stam: 4447, tech: 4447 }, { appl: 4194, stam: 4675, tech: 4903 }, { appl: 4389, stam: 5131, tech: 5587 }, { appl: 4987, stam: 5818, tech: 5818 }],
  109: [{ appl: 4038, stam: 4038, tech: 4157 }, { appl: 4570, stam: 4304, tech: 4979 }, { appl: 5368, stam: 5102, tech: 5253 }, { appl: 5900, stam: 6166, tech: 5801 }, { appl: 6432, stam: 6698, tech: 6897 }, { appl: 7234, stam: 7234, tech: 7455 }],
  110: [{ appl: 2713, stam: 2713, tech: 2796 }, { appl: 3063, stam: 3063, tech: 3156 }, { appl: 3413, stam: 3413, tech: 3516 }, { appl: 3588, stam: 3763, tech: 3876 }, { appl: 3938, stam: 3938, tech: 4416 }, { appl: 4474, stam: 4474, tech: 4610 }],
  111: [{ appl: 2713, stam: 2879, tech: 2631 }, { appl: 3063, stam: 3251, tech: 2971 }, { appl: 3413, stam: 3623, tech: 3311 }, { appl: 3588, stam: 3995, tech: 3651 }, { appl: 3938, stam: 4181, tech: 4161 }, { appl: 4474, stam: 4747, tech: 4339 }],

  112: [{ appl: 6042, stam: 4522, tech: 4522 }, { appl: 6836, stam: 4820, tech: 5416 }, { appl: 8027, stam: 5714, tech: 5714 }, { appl: 8821, stam: 6906, tech: 6310 }, { appl: 9615, stam: 7502, tech: 7502 }, { appl: 10812, stam: 8108, tech: 8108 }],
  113: [{ appl: 3024, stam: 4036, tech: 3024 }, { appl: 3414, stam: 4556, tech: 3414 }, { appl: 3804, stam: 5076, tech: 3804 }, { appl: 4194, stam: 5336, tech: 4194 }, { appl: 4779, stam: 5856, tech: 4389 }, { appl: 4987, stam: 6650, tech: 4987 }],
  114: [{ appl: 4036, stam: 3024, tech: 3024 }, { appl: 4556, stam: 3414, tech: 3414 }, { appl: 5076, stam: 3804, tech: 3804 }, { appl: 5336, stam: 4194, tech: 4194 }, { appl: 5856, stam: 4389, tech: 4779 }, { appl: 6650, stam: 4987, tech: 4987 }],

  115: [{ appl: 4378, stam: 4677, tech: 6042 }, { appl: 4666, stam: 5601, tech: 6836 }, { appl: 5530, stam: 5909, tech: 8027 }, { appl: 6682, stam: 6525, tech: 8821 }, { appl: 7258, stam: 7757, tech: 9615 }, { appl: 7837, stam: 8377, tech: 10812 }],
  116: [{ appl: 3330, stam: 3330, tech: 3432 }, { appl: 3760, stam: 3760, tech: 3874 }, { appl: 4190, stam: 4190, tech: 4316 }, { appl: 4620, stam: 4405, tech: 4758 }, { appl: 4835, stam: 4835, tech: 5421 }, { appl: 5484, stam: 5484, tech: 5650 }],
  117: [{ appl: 3673, stam: 4287, tech: 4287 }, { appl: 3914, stam: 4851, tech: 5133 }, { appl: 4637, stam: 5697, tech: 5415 }, { appl: 5601, stam: 6261, tech: 5979 }, { appl: 6083, stam: 6825, tech: 7107 }, { appl: 6578, stam: 7674, tech: 7674 }],
  118: [{ appl: 2713, stam: 2713, tech: 2796 }, { appl: 3063, stam: 3063, tech: 3156 }, { appl: 3413, stam: 3413, tech: 3516 }, { appl: 3763, stam: 3588, tech: 3876 }, { appl: 4288, stam: 3938, tech: 4056 }, { appl: 4474, stam: 4474, tech: 4610 }],
  119: [{ appl: 2713, stam: 2713, tech: 2796 }, { appl: 3063, stam: 3063, tech: 3156 }, { appl: 3413, stam: 3413, tech: 3516 }, { appl: 3763, stam: 3763, tech: 3696 }, { appl: 3938, stam: 4288, tech: 4056 }, { appl: 4474, stam: 4474, tech: 4610 }],

  120: [{ appl: 4522, stam: 6042, tech: 4522 }, { appl: 4820, stam: 6836, tech: 5416 }, { appl: 5714, stam: 8027, tech: 5714 }, { appl: 6906, stam: 8821, tech: 6310 }, { appl: 7502, stam: 9615, tech: 7502 }, { appl: 8108, stam: 10812, tech: 8108 }],
  121: [{ appl: 4036, stam: 3024, tech: 3024 }, { appl: 4556, stam: 3414, tech: 3414 }, { appl: 5076, stam: 3804, tech: 3804 }, { appl: 5596, stam: 4194, tech: 3999 }, { appl: 5856, stam: 4779, tech: 4389 }, { appl: 6650, stam: 4987, tech: 4987 }],

  122: [{ appl: 6042, stam: 4522, tech: 4522 }, { appl: 6836, stam: 4820, tech: 5416 }, { appl: 8027, stam: 5714, tech: 5714 }, { appl: 8821, stam: 6906, tech: 6310 }, { appl: 9615, stam: 7502, tech: 7502 }, { appl: 10812, stam: 8108, tech: 8108 }],
  123: [{ appl: 3024, stam: 4036, tech: 3024 }, { appl: 3414, stam: 4556, tech: 3414 }, { appl: 3804, stam: 5076, tech: 3804 }, { appl: 4194, stam: 5336, tech: 4194 }, { appl: 4779, stam: 5856, tech: 4389 }, { appl: 4987, stam: 6650, tech: 4987 }],
  124: [{ appl: 4038, stam: 4038, tech: 4157 }, { appl: 4570, stam: 4304, tech: 4979 }, { appl: 5368, stam: 5102, tech: 5253 }, { appl: 5900, stam: 6166, tech: 5801 }, { appl: 6432, stam: 6698, tech: 6897 }, { appl: 7234, stam: 7234, tech: 7455 }],
  125: [{ appl: 2879, stam: 2713, tech: 2631 }, { appl: 3251, stam: 3063, tech: 2971 }, { appl: 3623, stam: 3413, tech: 3311 }, { appl: 3995, stam: 3763, tech: 3481 }, { appl: 4181, stam: 4288, tech: 3821 }, { appl: 4747, stam: 4474, tech: 4339 }],
  126: [{ appl: 2713, stam: 2713, tech: 2796 }, { appl: 3063, stam: 3063, tech: 3156 }, { appl: 3413, stam: 3413, tech: 3516 }, { appl: 3588, stam: 3763, tech: 3876 }, { appl: 3938, stam: 3938, tech: 4416 }, { appl: 4474, stam: 4474, tech: 4610 }],

  127: [{ appl: 3306, stam: 8259, tech: 4953 }, { appl: 3957, stam: 9345, tech: 5279 }, { appl: 4174, stam: 10974, tech: 6257 }, { appl: 4608, stam: 12060, tech: 7561 }, { appl: 5476, stam: 13146, tech: 8213 }, { appl: 5916, stam: 14790, tech: 8874 }],
  128: [{ appl: 6936, stam: 4628, tech: 4953 }, { appl: 7848, stam: 4932, tech: 5931 }, { appl: 9216, stam: 5844, tech: 6257 }, { appl: 10128, stam: 7060, tech: 6909 }, { appl: 11040, stam: 7668, tech: 8213 }, { appl: 12423, stam: 8282, tech: 8874 }],
  129: [{ appl: 7435, stam: 3306, tech: 5776 }, { appl: 7924, stam: 3957, tech: 6536 }, { appl: 9391, stam: 4174, tech: 7676 }, { appl: 11347, stam: 4608, tech: 8436 }, { appl: 12325, stam: 5476, tech: 9196 }, { appl: 13310, stam: 5916, tech: 10352 }],
  130: [{ appl: 5251, stam: 1910, tech: 2922 }, { appl: 5929, stam: 2156, tech: 3300 }, { appl: 6607, stam: 2402, tech: 3678 }, { appl: 6946, stam: 2648, tech: 4056 }, { appl: 7624, stam: 2771, tech: 4623 }, { appl: 8643, stam: 3157, tech: 4820 }],
  131: [{ appl: 3024, stam: 3535, tech: 3535 }, { appl: 3414, stam: 3991, tech: 3991 }, { appl: 3804, stam: 4447, tech: 4447 }, { appl: 4194, stam: 4903, tech: 4675 }, { appl: 4389, stam: 5587, tech: 5131 }, { appl: 4987, stam: 5818, tech: 5818 }],

  132: [{ appl: 6340, stam: 4522, tech: 4223 }, { appl: 7174, stam: 4820, tech: 5057 }, { appl: 8425, stam: 5714, tech: 5335 }, { appl: 9259, stam: 6906, tech: 5891 }, { appl: 10093, stam: 7502, tech: 7003 }, { appl: 11351, stam: 8108, tech: 7568 }],
  133: [{ appl: 2318, stam: 3729, tech: 4036 }, { appl: 2616, stam: 4211, tech: 4556 }, { appl: 2914, stam: 4693, tech: 5076 }, { appl: 3212, stam: 4934, tech: 5596 }, { appl: 3361, stam: 5416, tech: 6376 }, { appl: 3821, stam: 6150, tech: 6650 }],
  134: [{ appl: 3673, stam: 4287, tech: 4287 }, { appl: 3914, stam: 5133, tech: 4851 }, { appl: 4637, stam: 5415, tech: 5697 }, { appl: 5601, stam: 5979, tech: 6261 }, { appl: 6083, stam: 7107, tech: 6825 }, { appl: 6578, stam: 7674, tech: 7674 }],
  135: [{ appl: 2713, stam: 2713, tech: 2796 }, { appl: 3063, stam: 3063, tech: 3156 }, { appl: 3413, stam: 3413, tech: 3516 }, { appl: 3763, stam: 3588, tech: 3876 }, { appl: 4288, stam: 3938, tech: 4056 }, { appl: 4474, stam: 4474, tech: 4610 }],
  136: [{ appl: 2879, stam: 2713, tech: 2631 }, { appl: 3251, stam: 3063, tech: 2971 }, { appl: 3623, stam: 3413, tech: 3311 }, { appl: 3995, stam: 3588, tech: 3651 }, { appl: 4181, stam: 3938, tech: 4161 }, { appl: 4747, stam: 4474, tech: 4339 }],

  137: [{ appl: 6483, stam: 3015, tech: 5587 }, { appl: 7337, stam: 3213, tech: 6688 }, { appl: 8618, stam: 3807, tech: 7055 }, { appl: 9472, stam: 4599, tech: 7789 }, { appl: 10326, stam: 4995, tech: 9257 }, { appl: 11620, stam: 5406, tech: 10000 }],
  138: [{ appl: 4239, stam: 2820, tech: 3024 }, { appl: 4785, stam: 3184, tech: 3414 }, { appl: 5331, stam: 3548, tech: 3804 }, { appl: 5877, stam: 3730, tech: 4194 }, { appl: 6150, stam: 4094, tech: 4779 }, { appl: 6980, stam: 4654, tech: 4987 }],

  139: [{ appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 8649, stam: 7568, tech: 10812 }],
  140: [{ appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 7813, stam: 3325, tech: 5484 }],
  141: [{ appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 6578, stam: 8772, tech: 6578 }],
  142: [{ appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 4747, stam: 4474, tech: 4339 }],
  143: [{ appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 0, stam: 0, tech: 0 }, { appl: 6103, stam: 2713, tech: 4747 }],
};
/* eslint-enable object-curly-newline, max-len */

// Length and ID range validator
Object.keys(PARAMETER).map(Number).forEach((id) => {
  const LENGTH = 6;
  if (PARAMETER[id].length !== LENGTH) {
    throw Error(`ID ${id} does not have ${LENGTH} parameter state`);
  }
  if (CARD[id] === undefined) {
    throw Error(`ID ${id} does not exist in CARD`);
  }
});

export const FULL_CARD_LIST = Object.keys(CARD).map(Number).map((id) => PARAMETER[id].map((param, idx) => ({
  id,
  uncap: idx,
  ...CARD[id],
  ...param,
  expectedVoltage: param.appl,
}))).reduce((acc, val) => acc.concat(val), [])
  .filter((card) => card.appl !== 0);
