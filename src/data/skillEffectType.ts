interface SkillEffectCategory {
  readonly [id: number]: {
    readonly desc: string,
    readonly iconAssetPath: string,
  },
}

export const SKILL_EFFECT_CATEGORY: SkillEffectCategory = {
  1001: { desc: '어필 추가', iconAssetPath: '/images/icons/skill/live_appl_inc.png' },
  1002: { desc: '크리티컬률 증가', iconAssetPath: '/images/icons/skill/live_crit_prob_inc.png' },
  1003: { desc: '크리티컬치 증가', iconAssetPath: '/images/icons/skill/live_crit_vo_inc.png' },
  1004: { desc: '대미지 감소', iconAssetPath: '/images/icons/skill/live_dmg_dec.png' },
  1005: { desc: '스태미너 회복', iconAssetPath: '/images/icons/skill/live_heal.png' },
  1006: { desc: '부활', iconAssetPath: '/images/icons/skill/live_resurrect.png' },
  1007: { desc: '쉴드 획득', iconAssetPath: '/images/icons/skill/live_shield.png' },
  1008: { desc: '특기발동률 상승', iconAssetPath: '/images/icons/skill/live_skill_prob_inc.png' },
  1009: { desc: 'SP 게이지 획득량 상승', iconAssetPath: '/images/icons/skill/live_sp_gain_inc.png' },
  1010: { desc: 'SP 게이지 획득', iconAssetPath: '/images/icons/skill/live_sp_inc.png' },
  1011: { desc: 'SP 볼티지 획득량 상승', iconAssetPath: '/images/icons/skill/live_sp_vo_inc.png' },
  1012: { desc: '저하효과 해제', iconAssetPath: '/images/icons/skill/live_undebuff.png' },
  1013: { desc: '볼티지 획득량 상승', iconAssetPath: '/images/icons/skill/live_vo_gain_inc.png' },
  1014: { desc: '볼티지 획득', iconAssetPath: '/images/icons/skill/live_vo_inc.png' },
  1015: { desc: '작전 변경 보너스 상승 (Gd)', iconAssetPath: '/images/icons/skill/live_switch_bonus_gd.png' },
  1016: { desc: '기본 SP 게이지 획득량 상승', iconAssetPath: '/images/icons/skill/live_sp_gain_inc.png' },
  1017: { desc: '기본 특기 발동률 상승', iconAssetPath: '/images/icons/skill/live_skill_prob_inc.png' },
  1018: { desc: '기본 어필 추가', iconAssetPath: '/images/icons/skill/live_appl_inc.png' },

  2001: { desc: '기본 어필 추가', iconAssetPath: '/images/icons/skill/passive_appl_inc.png' },
  2002: { desc: '기본 스태미너 추가', iconAssetPath: '/images/icons/skill/passive_stam_inc.png' },
  2003: { desc: '기본 테크닉 추가', iconAssetPath: '/images/icons/skill/passive_tech_inc.png' },
};

export const SPEC_CATEGORIES = [1001, 1002, 1003, 1004, 1005, 1007, 1008, 1009, 1010, 1011, 1013, 1014];
export const INDIV_LIVE_CATEGORIES = [
  1001, 1002, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1012, 1014, 1016, 1017, 1018,
];
export const INDIV_PASSIVE_CATEGORIES = [2001, 2002, 2003];

interface SkillEffectType {
  readonly [id: number]: {
    readonly desc: string,
    readonly scaleType: 'percent' | 'fixed',
    readonly ingameText: string,
    readonly effectCategoryId: number,
  },
}

/* eslint-disable object-curly-newline, max-len */
export const SKILL_EFFECT_TYPE: SkillEffectType = {
  100101: { desc: '어필 추가 (%)', scaleType: 'percent', ingameText: 'アピールUP', effectCategoryId: 1001 },
  100102: { desc: '어필 추가 (고정 수치)', scaleType: 'fixed', ingameText: '', effectCategoryId: 1001 },
  100201: { desc: '크리티컬률 상승 (%)', scaleType: 'percent', ingameText: 'クリティカルUP', effectCategoryId: 1002 },
  100301: { desc: '크리티컬치 상승 (%)', scaleType: 'percent', ingameText: '', effectCategoryId: 1003 },
  100401: { desc: '대미지 감소 (%)', scaleType: 'percent', ingameText: 'ダメージ軽減', effectCategoryId: 1004 },
  100501: { desc: '스태미너 회복 (자신 스태미너 %)', scaleType: 'percent', ingameText: 'スタミナ回復', effectCategoryId: 1005 },
  100502: { desc: '스태미너 회복 (고정 수치)', scaleType: 'fixed', ingameText: '', effectCategoryId: 1005 },
  100601: { desc: '스태미너가 0이되면 회복하며 부활하는 효과 부여 (%)', scaleType: 'percent', ingameText: '復活', effectCategoryId: 1006 },
  100701: { desc: '쉴드 획득 (고정 수치)', scaleType: 'fixed', ingameText: '', effectCategoryId: 1007 },
  100702: { desc: '쉴드 획득 (자신 스태미너 %)', scaleType: 'percent', ingameText: 'シールド獲得', effectCategoryId: 1007 },
  100801: { desc: '특기발동률 상승 (%)', scaleType: 'percent', ingameText: '特技発動率UP', effectCategoryId: 1008 },
  100901: { desc: 'SP 게이지 획득량 상승 (%)', scaleType: 'percent', ingameText: 'SPゲージ獲得UP', effectCategoryId: 1009 },
  101001: { desc: 'SP 게이지 획득 (고정 수치)', scaleType: 'fixed', ingameText: '', effectCategoryId: 1010 },
  101002: { desc: 'SP 게이지 획득 (%)', scaleType: 'percent', ingameText: '', effectCategoryId: 1010 },
  101003: { desc: 'SP 게이지 획득 (자신 테크닉 %)', scaleType: 'percent', ingameText: 'SPゲージ獲得', effectCategoryId: 1010 },
  101004: { desc: 'SP 게이지 획득 (자신 어필 %)', scaleType: 'percent', ingameText: 'SPゲージ獲得', effectCategoryId: 1010 },
  101101: { desc: 'SP 볼티지 획득량 상승 (자신 어필 %)', scaleType: 'percent', ingameText: '', effectCategoryId: 1011 },
  101102: { desc: 'SP 볼티지 획득량 상승 (고정 수치)', scaleType: 'fixed', ingameText: '', effectCategoryId: 1011 },
  101201: { desc: '저하효과 해제', scaleType: 'fixed', ingameText: '効果解除', effectCategoryId: 1012 },
  101301: { desc: '볼티지 획득량 상승 (%)', scaleType: 'percent', ingameText: '', effectCategoryId: 1013 },
  101302: { desc: '볼티지 획득량 상승 (고정 수치)', scaleType: 'fixed', ingameText: '', effectCategoryId: 1013 },
  101401: { desc: '볼티지 획득 (고정 수치)', scaleType: 'fixed', ingameText: '', effectCategoryId: 1014 },
  101402: { desc: '볼티지 획득 (자신 어필 %)', scaleType: 'percent', ingameText: 'ボルテージ獲得', effectCategoryId: 1014 },
  101601: { desc: '기본 SP 게이지 획득량 상승 (%)', scaleType: 'percent', ingameText: 'SPゲージ獲得＋', effectCategoryId: 1016 },
  101701: { desc: '기본 특기 발동률 상승 (%)', scaleType: 'percent', ingameText: '特技発動率＋', effectCategoryId: 1017 },
  101801: { desc: '기본 어필 추가 (%)', scaleType: 'percent', ingameText: 'アピール＋', effectCategoryId: 1018 },

  200101: { desc: '기본 어필 추가 (%)', scaleType: 'percent', ingameText: 'アピール＋', effectCategoryId: 2001 },
  200201: { desc: '기본 스태미너 추가 (%)', scaleType: 'percent', ingameText: 'スタミナ＋', effectCategoryId: 2002 },
  200301: { desc: '기본 테크닉 추가 (%)', scaleType: 'percent', ingameText: 'テクニック＋', effectCategoryId: 2003 },
};
/* eslint-enable object-curly-newline, max-len */

interface SkillEffectString {
  readonly [id: number]: {
    readonly beforeValue: string,
    readonly afterValue: string,
  },
}

/* eslint-disable object-curly-newline, max-len */
export const SKILL_EFFECT_STRING: SkillEffectString = {
  100101: { beforeValue: '어필', afterValue: '% 추가' },
  100102: { beforeValue: '어필', afterValue: '추가' },
  100201: { beforeValue: '크리티컬률', afterValue: '% 상승' },
  100301: { beforeValue: '크리티컬치', afterValue: '% 상승' },
  100401: { beforeValue: '스태미너 대미지', afterValue: '% 감소' },
  100501: { beforeValue: '자신 스태미너의', afterValue: '% 스태미너 회복' },
  100502: { beforeValue: '스태미너를', afterValue: '회복' },
  100601: { beforeValue: '스태미너가 0이 되면', afterValue: '% 회복하며 부활하는 효과를 부여' },
  100701: { beforeValue: '쉴드', afterValue: '획득' },
  100702: { beforeValue: '자신 스태미너의', afterValue: '% 쉴드 획득' },
  100801: { beforeValue: '특기발동률', afterValue: '% 상승' },
  100901: { beforeValue: 'SP 게이지 획득량', afterValue: '% 상승' },
  101001: { beforeValue: 'SP 게이지', afterValue: '획득' },
  101002: { beforeValue: '최대 SP의', afterValue: '% SP 게이지를 획득' },
  101003: { beforeValue: '자신 테크닉의', afterValue: '% SP 게이지를 획득' },
  101004: { beforeValue: '자신 어필의', afterValue: '% SP 게이지를 획득' },
  101101: { beforeValue: 'SP 특기로 획득하는 볼티지가 자신 어필의', afterValue: '% 추가' },
  101102: { beforeValue: 'SP 특기로 획득하는 볼티지가', afterValue: '추가' },
  101201: { beforeValue: '모든 저하/감소 효과를 해제 (기본 저하/기본 감소는 제외)', afterValue: '' },
  101301: { beforeValue: '획득 볼티지', afterValue: '% 추가' },
  101302: { beforeValue: '획득 볼티지', afterValue: '추가' },
  101401: { beforeValue: '볼티지', afterValue: '획득' },
  101402: { beforeValue: '자신 어필의', afterValue: '% 볼티지 획득' },
  101601: { beforeValue: '기본 SP 게이지 획득량', afterValue: '% 상승' },
  101701: { beforeValue: '기본 특기 발동률이', afterValue: '% 상승' },
  101801: { beforeValue: '기본 어필', afterValue: '% 추가' },

  200101: { beforeValue: '기본 어필', afterValue: '% 추가' },
  200201: { beforeValue: '기본 스태미너', afterValue: '% 추가' },
  200301: { beforeValue: '기본 테크닉', afterValue: '% 추가' },
};
