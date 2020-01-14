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
  1009: { desc: 'SP게이지 획득량 상승', iconAssetPath: '/images/icons/skill/live_sp_gain_inc.png' },
  1010: { desc: 'SP게이지 획득', iconAssetPath: '/images/icons/skill/live_sp_inc.png' },
  1011: { desc: 'SP 볼티지 획득량 상승', iconAssetPath: '/images/icons/skill/live_sp_vo_inc.png' },
  1012: { desc: '저하효과 해제', iconAssetPath: '/images/icons/skill/live_undebuff.png' },
  1013: { desc: '볼티지 획득량 상승', iconAssetPath: '/images/icons/skill/live_vo_gain_inc.png' },
  1014: { desc: '볼티지 획득', iconAssetPath: '/images/icons/skill/live_vo_inc.png' },
  1015: { desc: '작전 변경 보너스 상승 (Gd)', iconAssetPath: '/images/icons/skill/live_switch_bonus_gd.png' },

  2001: { desc: '기본 어필 추가', iconAssetPath: '/images/icons/skill/passive_appl_inc.png' },
  2002: { desc: '기본 스태미너 추가', iconAssetPath: '/images/icons/skill/passive_stam_inc.png' },
  2003: { desc: '기본 테크닉 추가', iconAssetPath: '/images/icons/skill/passive_tech.png' },
};

export const SPEC_CATEGORIES = [1001, 1002, 1003, 1004, 1005, 1007, 1009, 1010, 1011, 1013, 1014];
export const INDIV_LIVE_CATEGORIES = [1001, 1005, 1006, 1008, 1014];
export const INDIV_PASSIVE_CATEGORIES = [2001, 2002, 2003];

interface SkillEffectType {
  readonly [id: number]: {
    readonly desc: string,
    readonly ingameText: string,
    readonly effectCategoryId: number,
  },
}

export const SKILL_EFFECT_TYPE: SkillEffectType = {
  100101: { desc: '어필 추가 (%)', ingameText: 'アピールUP', effectCategoryId: 1001 },
  100201: { desc: '크리티컬률 상승 (%)', ingameText: '', effectCategoryId: 1002 },
  100301: { desc: '크리티컬치 상승 (%)', ingameText: '', effectCategoryId: 1003 },
  100401: { desc: '대미지 감소 (%)', ingameText: '', effectCategoryId: 1004 },
  100501: { desc: '스태미너 회복 (자신 스태미너 %)', ingameText: 'スタミナ回復', effectCategoryId: 1005 },
  100601: { desc: '스태미너가 0이되면 회복하며 부활하는 효과 부여 (%)', ingameText: '復活', effectCategoryId: 1006 },
  100701: { desc: '쉴드 획득 (고정 수치)', ingameText: '', effectCategoryId: 1007 },
  100702: { desc: '쉴드 획득 (자신 스태미너 %)', ingameText: '', effectCategoryId: 1007 },
  100801: { desc: '특기발동률 상승 (%)', ingameText: '特技発動率UP', effectCategoryId: 1008 },
  100901: { desc: 'SP 게이지 획득량 상승 (%)', ingameText: '', effectCategoryId: 1009 },
  101001: { desc: 'SP 게이지 획득 (고정 수치)', ingameText: '', effectCategoryId: 1010 },
  101101: { desc: 'SP 볼티지 획득량 상승 (자신 어필 %)', ingameText: '', effectCategoryId: 1011 },
  101301: { desc: '볼티지 획득량 상승 (%)', ingameText: '', effectCategoryId: 1013 },
  101401: { desc: '볼티지 획득 (고정 수치)', ingameText: '', effectCategoryId: 1014 },
  101402: { desc: '볼티지 획득 (자신 어필 %)', ingameText: 'ボルテージ獲得', effectCategoryId: 1014 },

  200101: { desc: '기본 어필 추가 (%)', ingameText: 'アピール＋', effectCategoryId: 2001 },
  200201: { desc: '기본 스태미너 추가 (%)', ingameText: 'スタミナ＋', effectCategoryId: 2002 },
  200301: { desc: '기본 테크닉 추가 (%)', ingameText: 'テクニック＋', effectCategoryId: 2003 },
};