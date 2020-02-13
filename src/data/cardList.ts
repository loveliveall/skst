import { MEMBER } from './memberMetadata';
import { RARITY, ATTRIBUTE, ROLE } from './cardMetadata';
import { PARAMETER } from './cardParameter';

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

  144: { memberId: 3, title: 'この水着すごくお気に入りなんだ', awakenTitle: 'ハミングエンジェル', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 30002] },
  145: { memberId: 16, title: 'あなたが一緒なら', awakenTitle: 'デビルロッカー', rarityId: 3, attributeId: 5, roleId: 4, fromId: ['gacha', 30002] },
  146: { memberId: 27, title: 'えへへ……嬉しいです！', awakenTitle: 'スカーレットカレッジ', rarityId: 3, attributeId: 4, roleId: 1, fromId: ['gacha', 30002] },
  147: { memberId: 1, title: 'あなたには特別おまけしちゃうよ', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['gacha', 30002] },
  148: { memberId: 11, title: '旅館のお手伝い', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 30002] },

  149: { memberId: 15, title: 'このアトラクション、面白ーい♪', awakenTitle: 'Miracle voyage', rarityId: 3, attributeId: 1, roleId: 2, fromId: ['gacha', 10007] },
  150: { memberId: 24, title: 'ほかのみんなには悪いけど', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 5, roleId: 1, fromId: ['gacha', 10007] },
  151: { memberId: 4, title: '水上アスレチックで決めましょう', awakenTitle: 'Miracle voyage', rarityId: 3, attributeId: 5, roleId: 3, fromId: ['event', 7] },
  152: { memberId: 23, title: 'ここで転ぶわけにはいきません！', awakenTitle: 'Miracle voyage', rarityId: 3, attributeId: 2, roleId: 4, fromId: ['gacha', 10008] },
  153: { memberId: 6, title: '……ふふふ♪やっほ―――♪', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 1, roleId: 3, fromId: ['event', 7] },
  154: { memberId: 17, title: 'いただきまーす♪', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['event', 7] },

  155: { memberId: 8, title: 'もうかわいすぎるから、ぎゅ～', awakenTitle: 'ハッピーパレード', rarityId: 3, attributeId: 1, roleId: 1, fromId: ['gacha', 20005] },
  156: { memberId: 14, title: '浦の星女学院の生徒として', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 5, roleId: 4, fromId: ['gacha', 20005] },

  157: { memberId: 19, title: 'ほっぺた落ちちゃいそう', awakenTitle: 'Sweets Deco', rarityId: 3, attributeId: 2, roleId: 2, fromId: ['gacha', 10009] },
  158: { memberId: 27, title: '作り立ての私の自信作です♪', awakenTitle: 'わくわくアニマル', rarityId: 2, attributeId: 4, roleId: 2, fromId: ['gacha', 10009] },
  159: { memberId: 2, title: 'いや、私は本当にいいから！', awakenTitle: 'Sweets Deco', rarityId: 3, attributeId: 3, roleId: 4, fromId: ['event', 8] },
  160: { memberId: 21, title: 'あっ、みんな来てくれたの？', awakenTitle: 'Sweets Deco', rarityId: 3, attributeId: 4, roleId: 3, fromId: ['gacha', 10010] },
  161: { memberId: 13, title: 'ほら、早く早く', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 2, roleId: 1, fromId: ['event', 8] },
  162: { memberId: 7, title: 'ウチが占ってあげる', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 5, roleId: 3, fromId: ['event', 8] },

  163: { memberId: 28, title: 'お花の冠？　あなたが作ったの？', awakenTitle: 'Delightful Waltz', rarityId: 3, attributeId: 5, roleId: 2, fromId: ['gacha', 30003] },
  164: { memberId: 9, title: '……ありがと。', awakenTitle: 'スマイリーエンジェル', rarityId: 3, attributeId: 1, roleId: 3, fromId: ['gacha', 30003] },
  165: { memberId: 22, title: '食べる人の顔が楽しみですね〜♡', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 5, roleId: 2, fromId: ['gacha', 30003] },
  166: { memberId: 29, title: '一番気に入った璃奈ちゃんボード', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 1, roleId: 4, fromId: ['gacha', 30003] },

  167: { memberId: 22, title: 'お待たせしましたぁ', awakenTitle: 'フラワーシンフォニー', rarityId: 3, attributeId: 1, roleId: 4, fromId: ['gacha', 10011] },
  168: { memberId: 2, title: 'まあっ……すごく綺麗なお花！', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 2, roleId: 2, fromId: ['gacha', 10011] },
  169: { memberId: 12, title: '今日だけしかできない二人の音', awakenTitle: 'フラワーシンフォニー', rarityId: 3, attributeId: 6, roleId: 1, fromId: ['event', 9] },
  170: { memberId: 6, title: '私の……誕生花だもの', awakenTitle: 'フラワーシンフォニー', rarityId: 3, attributeId: 4, roleId: 2, fromId: ['gacha', 10012] },
  171: { memberId: 16, title: 'ふっふっふ……待っててリリー！', awakenTitle: '青空Jumping Heart', rarityId: 2, attributeId: 4, roleId: 1, fromId: ['event', 9] },
  172: { memberId: 24, title: '私についていらっしゃい♪', awakenTitle: 'レインボーローズ', rarityId: 2, attributeId: 6, roleId: 3, fromId: ['event', 9] },

  173: { memberId: 29, title: '絶対クリアする……！', awakenTitle: 'フィーリングシグナル', rarityId: 3, attributeId: 6, roleId: 2, fromId: ['gacha', 20006] },
  174: { memberId: 9, title: 'ワン、ツー、スリー、フォー', awakenTitle: '僕らのLIVE 君とのLIFE', rarityId: 2, attributeId: 3, roleId: 4, fromId: ['gacha', 20006] },
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

export function getCardSymbol(id: number, isAwaken: boolean): string {
  const card = CARD[id];
  const lowerSymbol = RARITY[card.rarityId].symbol.toLowerCase();
  const { enName } = MEMBER[card.memberId];
  const base = `${id}-${lowerSymbol}-${enName}`;
  return isAwaken ? `${base}-awaken` : base;
}

export const FULL_CARD_LIST = Object.keys(CARD).map(Number).map((id) => PARAMETER[id].map((param, idx) => ({
  id,
  uncap: idx,
  ...CARD[id],
  ...param,
  expectedVoltage: param.appl,
}))).reduce((acc, val) => acc.concat(val), [])
  .filter((card) => card.appl !== 0);
