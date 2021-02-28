export type Group = {
  readonly [id: number]: {
    readonly name: string,
    readonly symbol: string,
    readonly iconAssetPath: string,
  },
};

export const GROUP: Group = {
  1: { name: 'μ\'s', symbol: 'muse', iconAssetPath: '/images/icons/group/us.png' },
  2: { name: 'Aqours', symbol: 'aqours', iconAssetPath: '/images/icons/group/aqours.png' },
  3: { name: '니지동', symbol: 'niji', iconAssetPath: '/images/icons/group/niji.png' },
};

export type Unit = {
  readonly [id: number]: {
    readonly name: string,
    readonly symbol: string,
  },
};

export const UNIT: Unit = {
  0: { name: '없음', symbol: 'none' },
  // Group 1
  1: { name: 'Printemps', symbol: 'printemps' },
  2: { name: 'lily white', symbol: 'lily-white' },
  3: { name: 'BiBi', symbol: 'bibi' },
  // Group 2
  4: { name: 'CYaRon!', symbol: 'cyaron' },
  5: { name: 'Guilty Kiss', symbol: 'guilty-kiss' },
  6: { name: 'AZALEA', symbol: 'azalea' },
  // Group 3
  7: { name: 'DiverDiva', symbol: 'diverdiva' },
  8: { name: 'A·ZU·NA', symbol: 'azuna' },
  9: { name: 'QU4RTZ', symbol: 'qu4rtz' },
};

export type Member = {
  readonly [id: number]: {
    readonly name: string,
    readonly shortName: string,
    readonly jpName: string,
    readonly enName: string,
    readonly grade: 1 | 2 | 3,
    readonly unitId: keyof typeof UNIT,
    readonly groupId: keyof typeof GROUP,
    readonly iconAssetPath: string,
    readonly birthMonth: number,
    readonly birthDay: number,
    readonly colorHex: string,
  },
};

/* eslint-disable object-curly-newline, max-len */
export const MEMBER: Member = {
  1: { name: '코사카 호노카', shortName: '호노카', jpName: '高坂穂乃果', enName: 'honoka', grade: 2, unitId: 1, groupId: 1, iconAssetPath: '/images/icons/member/honoka.png', birthMonth: 8, birthDay: 3, colorHex: '#FFA400' },
  2: { name: '아야세 에리', shortName: '에리', jpName: '絢瀬絵里', enName: 'eli', grade: 3, unitId: 3, groupId: 1, iconAssetPath: '/images/icons/member/eli.png', birthMonth: 10, birthDay: 21, colorHex: '#41B6E6' },
  3: { name: '미나미 코토리', shortName: '코토리', jpName: '南ことり', enName: 'kotori', grade: 2, unitId: 1, groupId: 1, iconAssetPath: '/images/icons/member/kotori.png', birthMonth: 9, birthDay: 12, colorHex: '#B2B4B2' },
  4: { name: '소노다 우미', shortName: '우미', jpName: '園田海未', enName: 'umi', grade: 2, unitId: 2, groupId: 1, iconAssetPath: '/images/icons/member/umi.png', birthMonth: 3, birthDay: 15, colorHex: '#003DA5' },
  5: { name: '호시조라 린', shortName: '린', jpName: '星空凛', enName: 'rin', grade: 1, unitId: 2, groupId: 1, iconAssetPath: '/images/icons/member/rin.png', birthMonth: 11, birthDay: 1, colorHex: '#FEDD00' },
  6: { name: '니시키노 마키', shortName: '마키', jpName: '西木野真姫', enName: 'maki', grade: 1, unitId: 3, groupId: 1, iconAssetPath: '/images/icons/member/maki.png', birthMonth: 4, birthDay: 19, colorHex: '#EE2737' },
  7: { name: '토죠 노조미', shortName: '노조미', jpName: '東條希', enName: 'nozomi', grade: 3, unitId: 2, groupId: 1, iconAssetPath: '/images/icons/member/nozomi.png', birthMonth: 6, birthDay: 9, colorHex: '#84329B' },
  8: { name: '코이즈미 하나요', shortName: '하나요', jpName: '小泉花陽', enName: 'hanayo', grade: 1, unitId: 1, groupId: 1, iconAssetPath: '/images/icons/member/hanayo.png', birthMonth: 1, birthDay: 17, colorHex: '#00AB84' },
  9: { name: '야자와 니코', shortName: '니코', jpName: '矢澤にこ', enName: 'nico', grade: 3, unitId: 3, groupId: 1, iconAssetPath: '/images/icons/member/nico.png', birthMonth: 7, birthDay: 22, colorHex: '#E31C79' },
  // No ID 100
  101: { name: '타카미 치카', shortName: '치카', jpName: '高海千歌', enName: 'chika', grade: 2, unitId: 4, groupId: 2, iconAssetPath: '/images/icons/member/chika.png', birthMonth: 8, birthDay: 1, colorHex: '#FF7F32' },
  102: { name: '사쿠라우치 리코', shortName: '리코', jpName: '桜内梨子', enName: 'riko', grade: 2, unitId: 5, groupId: 2, iconAssetPath: '/images/icons/member/riko.png', birthMonth: 9, birthDay: 19, colorHex: '#FB637E' },
  103: { name: '마츠우라 카난', shortName: '카난', jpName: '松浦果南', enName: 'kanan', grade: 3, unitId: 6, groupId: 2, iconAssetPath: '/images/icons/member/kanan.png', birthMonth: 2, birthDay: 10, colorHex: '#00C7B1' },
  104: { name: '쿠로사와 다이아', shortName: '다이아', jpName: '黒澤ダイヤ', enName: 'dia', grade: 3, unitId: 6, groupId: 2, iconAssetPath: '/images/icons/member/dia.png', birthMonth: 1, birthDay: 1, colorHex: '#E4002B' },
  105: { name: '와타나베 요우', shortName: '요우', jpName: '渡辺曜', enName: 'you', grade: 2, unitId: 4, groupId: 2, iconAssetPath: '/images/icons/member/you.png', birthMonth: 4, birthDay: 17, colorHex: '#00B5E2' },
  106: { name: '츠시마 요시코', shortName: '요시코', jpName: '津島善子', enName: 'yoshiko', grade: 1, unitId: 5, groupId: 2, iconAssetPath: '/images/icons/member/yoshiko.png', birthMonth: 7, birthDay: 13, colorHex: '#B1B3B3' },
  107: { name: '쿠니키다 하나마루', shortName: '하나마루', jpName: '国木田花丸', enName: 'hanamaru', grade: 1, unitId: 6, groupId: 2, iconAssetPath: '/images/icons/member/hanamaru.png', birthMonth: 3, birthDay: 4, colorHex: '#FFCD00' },
  108: { name: '오하라 마리', shortName: '마리', jpName: '小原鞠莉', enName: 'mari', grade: 3, unitId: 5, groupId: 2, iconAssetPath: '/images/icons/member/mari.png', birthMonth: 6, birthDay: 13, colorHex: '#9B26B6' },
  109: { name: '쿠로사와 루비', shortName: '루비', jpName: '黒澤ルビィ', enName: 'ruby', grade: 1, unitId: 4, groupId: 2, iconAssetPath: '/images/icons/member/ruby.png', birthMonth: 9, birthDay: 21, colorHex: '#E93CAC' },
  // No ID 200
  201: { name: '우에하라 아유무', shortName: '아유무', jpName: '上原歩夢', enName: 'ayumu', grade: 2, unitId: 8, groupId: 3, iconAssetPath: '/images/icons/member/ayumu.png', birthMonth: 3, birthDay: 1, colorHex: '#ED7D95' },
  202: { name: '나카스 카스미', shortName: '카스미', jpName: '中須かすみ', enName: 'kasumi', grade: 1, unitId: 9, groupId: 3, iconAssetPath: '/images/icons/member/kasumi.png', birthMonth: 1, birthDay: 23, colorHex: '#E7D600' },
  203: { name: '오사카 시즈쿠', shortName: '시즈쿠', jpName: '桜坂しずく', enName: 'shizuku', grade: 1, unitId: 8, groupId: 3, iconAssetPath: '/images/icons/member/shizuku.png', birthMonth: 4, birthDay: 3, colorHex: '#3FA4C6' },
  204: { name: '아사카 카린', shortName: '카린', jpName: '朝香果林', enName: 'karin', grade: 3, unitId: 7, groupId: 3, iconAssetPath: '/images/icons/member/karin.png', birthMonth: 6, birthDay: 29, colorHex: '#495EC6' },
  205: { name: '미야시타 아이', shortName: '아이', jpName: '宮下愛', enName: 'ai', grade: 2, unitId: 7, groupId: 3, iconAssetPath: '/images/icons/member/ai.png', birthMonth: 5, birthDay: 30, colorHex: '#FF5800' },
  206: { name: '코노에 카나타', shortName: '카나타', jpName: '近江彼方', enName: 'kanata', grade: 3, unitId: 9, groupId: 3, iconAssetPath: '/images/icons/member/kanata.png', birthMonth: 12, birthDay: 16, colorHex: '#B365AE' },
  207: { name: '유키 세츠나', shortName: '세츠나', jpName: '優木せつ菜', enName: 'setsuna', grade: 2, unitId: 8, groupId: 3, iconAssetPath: '/images/icons/member/setsuna.png', birthMonth: 8, birthDay: 8, colorHex: '#D81C2F' },
  208: { name: '엠마 베르데', shortName: '엠마', jpName: 'エマ・ヴェルデ', enName: 'verde', grade: 3, unitId: 9, groupId: 3, iconAssetPath: '/images/icons/member/verde.png', birthMonth: 2, birthDay: 5, colorHex: '#7DC62B' },
  209: { name: '텐노지 리나', shortName: '리나', jpName: '天王寺璃奈', enName: 'rina', grade: 1, unitId: 9, groupId: 3, iconAssetPath: '/images/icons/member/rina.png', birthMonth: 11, birthDay: 13, colorHex: '#969FB5' },
  210: { name: '미후네 시오리코', shortName: '시오리코', jpName: '三船栞子', enName: 'shioriko', grade: 1, unitId: 0, groupId: 3, iconAssetPath: '/images/icons/member/shioriko.png', birthMonth: 10, birthDay: 5, colorHex: '#36B482' },
};
/* eslint-enable object-curly-newline, max-len */
