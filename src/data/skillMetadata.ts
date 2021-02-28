type SkillTriggerType = {
  readonly [id: number]: {
    readonly str: string,
  },
};

export const SKILL_TRIGGER_TYPE: SkillTriggerType = {
  2: { str: '악곡 개시시' }, // Live start
  3: { str: '어필 찬스(AC) 개시시' }, // AC start
  4: { str: '어필 찬스(AC) 성공시' }, // AC success
  5: { str: '어필 찬스(AC) 실패시' }, // AC fail
  6: { str: '스태미너 변동시' }, // Life change
  7: { str: '대미지를 받았을 시' }, // Damage
  9: { str: '작전 변경시' }, // Change strat
  10: { str: 'SP특기 발동시' }, // SP shot
  11: { str: '크리티컬시' }, // On crit
  12: { str: '어필시' }, // On appeal
  255: { str: '조건 없음' }, // N/A
};

type SkillConditionType = {
  readonly [id: number]: {
    readonly str: string,
  },
};

export const SKILL_CONDITION_TYPE: SkillConditionType = {
  2: { str: '스태미너가 X% 이하일 때' }, // Stamina less than %
  3: { str: 'X회만 발동' }, // Limit
  5: { str: 'X 이상일 때' }, // More than
  6: { str: '자기 차례에만' }, // On self
};

type SkillTarget = {
  readonly [id: number]: {
    readonly str: string,
  },
};
export const SKILL_TARGET: SkillTarget = {
  1: { str: '전원' },
  2: { str: '호노카' },
  12: { str: '리코' },
  50: { str: '자신 이외' },
  53: { str: '동작전' },
  54: { str: '동학교' },
  55: { str: '동유닛' },
  56: { str: '동속성' },
  57: { str: '동타입' },
  58: { str: '' }, // No target
  59: { str: '자신' },
  60: { str: '동학년' },
};

type SkillEffect = {
  readonly [id: number]: {
    readonly str: string,
    readonly scaleType: 'percent' | 'value' | 'mixed',
    readonly shortTxt?: string,
  },
};
export const SKILL_EFFECT: SkillEffect = {
  2: { str: '볼티지 X 획득', scaleType: 'value' },
  3: { str: 'SP 게이지 X 획득', scaleType: 'value' },
  4: { str: '실드 X 획득', scaleType: 'value' },
  5: { str: '스태미너 X 회복', scaleType: 'value' },
  6: { str: '스태미너 대미지 X 감소', scaleType: 'percent', shortTxt: '대미지 X 감소' },
  9: { str: '기본 스태미너 X 추가', scaleType: 'percent' }, // Passive
  10: { str: '기본 어필 X 추가', scaleType: 'percent' }, // Passive
  11: { str: '기본 테크닉 X 추가', scaleType: 'percent' }, // Passive
  17: { str: '어필 X 추가', scaleType: 'mixed' },
  18: { str: '획득 볼티지 X 추가', scaleType: 'mixed' },
  19: { str: 'SP 게이지 획득량 X 상승', scaleType: 'percent' },
  20: { str: '크리티컬률 X 상승', scaleType: 'percent' },
  21: { str: '크리티컬치 X 상승', scaleType: 'percent' },
  22: { str: '특기 발동률 X 상승', scaleType: 'percent' },
  23: { str: 'SP 특기로 획득하는 볼티지에 X 추가', scaleType: 'value', shortTxt: 'SP 볼티지 획득량 X 추가' },
  25: { str: 'SP 특기로 획득하는 볼티지에 자신 어필의 X 추가', scaleType: 'percent', shortTxt: 'SP 볼티지 획득량에 자신 어필의 X 추가' },
  26: { str: '기본 어필 X 추가', scaleType: 'percent' },
  28: { str: '남은 스태미너에 비례해 기본 어필 추가 (최대 X)', scaleType: 'percent', shortTxt: '기본 어필 최대 X 추가(잔여 스태 비례)' },
  29: { str: '기본 SP 게이지 획득량 X 상승', scaleType: 'percent' },
  33: { str: '기본 특기 발동률 X 상승', scaleType: 'percent' },
  40: { str: '기본 크리티컬치 X 상승', scaleType: 'percent' },
  60: { str: '모든 저하/감소 효과를 해제 (기본 저하/감소 제외)', scaleType: 'value', shortTxt: '저하/감소 해제' },
  90: { str: '자신 어필의 X만큼 볼티지 획득', scaleType: 'percent' },
  91: { str: '최대 SP의 X만큼 SP 게이지 획득', scaleType: 'percent' },
  92: { str: '자신 어필의 X만큼 SP 게이지 획득', scaleType: 'percent' },
  94: { str: '자신 스태미너의 X만큼 실드 획득', scaleType: 'percent' },
  97: { str: '자신 스태미너의 X만큼 스태미너 회복', scaleType: 'percent' },
  106: { str: '스태미너가 0이 되면 X 회복하고 부활하는 효과를 부여', scaleType: 'percent', shortTxt: 'X 회복하고 부활' },
  108: { str: 'SP 특기로 획득하는 볼티지에 자신 테크닉의 X 추가', scaleType: 'percent', shortTxt: 'SP 볼티지 획득량에 자신 테크닉의 X 추가' },
  109: { str: '자신 스태미너의 X만큼 볼티지 획득', scaleType: 'percent' },
  110: { str: '자신 테크닉의 X만큼 볼티지 획득', scaleType: 'percent' },
  112: { str: '자신 테크닉의 X만큼 SP 게이지 획득', scaleType: 'percent' },
  113: { str: '자신 어필의 X만큼 실드 획득', scaleType: 'percent' },
  114: { str: '자신 테크닉의 X만큼 실드 획득', scaleType: 'percent' },
  116: { str: '자신 테크닉의 X만큼 스태미너 회복', scaleType: 'percent' },
  118: { str: '작전 변경 보너스에 의한 스태미너 회복량 X 상승', scaleType: 'percent' },
  119: { str: '라이브 편성에 포함된 볼티지 타입의 수 × X 어필 추가', scaleType: 'percent' },
  134: { str: '라이브 편성에 포함된 가드 타입의 수 × X만큼 스태미너 회복', scaleType: 'value' },
};

type EffectCategory = {
  readonly [id: number]: {
    readonly name: string,
    readonly type: 'red' | 'blue',
    readonly iconAssetPath: string,
  },
};
/* eslint-disable max-len */
export const EFFECT_CATEGORY: EffectCategory = {
  1: { name: '어필 추가', type: 'red', iconAssetPath: '/images/icons/skill/live_appl_inc.png' },
  2: { name: '크리티컬률 상승', type: 'red', iconAssetPath: '/images/icons/skill/live_crit_prob_inc.png' },
  3: { name: '크리티컬치 상승', type: 'red', iconAssetPath: '/images/icons/skill/live_crit_vo_inc.png' },
  4: { name: '대미지 감소', type: 'red', iconAssetPath: '/images/icons/skill/live_dmg_dec.png' },
  5: { name: '스태미너 회복', type: 'red', iconAssetPath: '/images/icons/skill/live_heal.png' },
  6: { name: '부활', type: 'red', iconAssetPath: '/images/icons/skill/live_resurrect.png' },
  7: { name: '실드 획득', type: 'red', iconAssetPath: '/images/icons/skill/live_shield.png' },
  8: { name: '특기 발동률 상승', type: 'red', iconAssetPath: '/images/icons/skill/live_skill_prob_inc.png' },
  9: { name: 'SP 게이지 획득량 상승', type: 'red', iconAssetPath: '/images/icons/skill/live_sp_gain_inc.png' },
  10: { name: 'SP 게이지 획득', type: 'red', iconAssetPath: '/images/icons/skill/live_sp_inc.png' },
  11: { name: 'SP 볼티지 획득량 추가', type: 'red', iconAssetPath: '/images/icons/skill/live_sp_vo_inc.png' },
  12: { name: '저하 효과 해제', type: 'red', iconAssetPath: '/images/icons/skill/live_undebuff.png' },
  13: { name: '볼티지 획득량 추가', type: 'red', iconAssetPath: '/images/icons/skill/live_vo_gain_inc.png' },
  14: { name: '볼티지 획득', type: 'red', iconAssetPath: '/images/icons/skill/live_vo_inc.png' },
  15: { name: '작전 변경 보너스 상승 (Gd)', type: 'red', iconAssetPath: '/images/icons/skill/live_switch_bonus_gd.png' },
  1001: { name: 'SP 게이지 획득 + SP 볼티지 획득량 추가', type: 'red', iconAssetPath: '/images/icons/skill/live_sp_gain_inc_and_sp_vo_inc.png' },
  1002: { name: '어필 추가 + 볼티지 획득', type: 'red', iconAssetPath: '/images/icons/skill/live_vo_inc_and_appl_inc.png' },
  1003: { name: '스태미너 회복 + 실드 획득', type: 'red', iconAssetPath: '/images/icons/skill/live_heal_shield.png' },
  2001: { name: '기본 어필 추가', type: 'blue', iconAssetPath: '/images/icons/skill/passive_appl_inc.png' },
  2002: { name: '기본 스태미너 추가', type: 'blue', iconAssetPath: '/images/icons/skill/passive_stam_inc.png' },
  2003: { name: '기본 테크닉 추가', type: 'blue', iconAssetPath: '/images/icons/skill/passive_tech_inc.png' },
  3001: { name: '기본 어필 추가 + 기본 스태미너 추가', type: 'blue', iconAssetPath: '/images/icons/skill/passive_appl_stam_inc.png' },
  3002: { name: '기본 어필 추가 + 기본 테크닉 추가', type: 'blue', iconAssetPath: '/images/icons/skill/passive_appl_tech_inc.png' },
  3003: { name: '기본 테크닉 추가 + 기본 스태미너 추가', type: 'blue', iconAssetPath: '/images/icons/skill/passive_tech_stam_inc.png' },
};

type SkillLevelMap = {
  readonly [id: number]: {
    readonly type: string,
    readonly activeSkill: number[],
    readonly passiveSkills: number[][],
  },
};
export const SKILL_LEVEL_MAP: SkillLevelMap = {
  1: { type: 'R', activeSkill: [3, 3, 3, 4, 4, 5], passiveSkills: [[3, 3, 3, 3, 3, 4, 5]] },
  2: { type: 'SR', activeSkill: [3, 3, 3, 4, 4, 5], passiveSkills: [[3, 3, 3, 4, 4, 5], [1, 1, 1, 1, 1, 1]] },
  3: { type: 'UR', activeSkill: [3, 3, 3, 4, 4, 5], passiveSkills: [[3, 4, 4, 4, 4, 5], [1, 1, 1, 1, 1, 1]] },
  4: { type: 'Party', activeSkill: [4, 4, 5, 5, 5, 5], passiveSkills: [[5, 5, 5, 6, 6, 7], [1, 1, 1, 1, 1, 1]] },
};
