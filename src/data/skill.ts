import { SKILL_EFFECT_TYPE, SKILL_EFFECT_CATEGORY, SKILL_EFFECT_STRING } from './skillEffectType';
import { SKILL_TARGET } from './skillTarget';
import { SKILL_TRIGGER_TYPE } from './skillTriggerType';

type SkillDetail = {
  readonly triggerProb: number,
  readonly skillTargetId: number,
  readonly effectTypeId: number,
  readonly effectValue: number[],
  readonly finishType: 'instant' | 'duration' | 'spFire' | 'never',
  readonly finishValue: number,
} & (
  {
    readonly timing: 'onTrigger',
    readonly triggerTypeId: number,
    readonly triggerValue: number,
    readonly conditionId: number,
  } | {
    readonly timing: 'onAppeal',
  }
);

interface Skill {
  readonly [id: number]: {
    readonly maxLevel: number,
    readonly detail: SkillDetail,
  },
}

/* eslint-disable object-curly-newline, max-len */
export const SKILL: Skill = {
  100001: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101401, effectValue: [200, 250, 300, 350, 400], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100002: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [300, 330, 360, 390, 420], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100003: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101101, effectValue: [2000, 2050, 2100, 2150, 2200], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100004: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 100401, effectValue: [1000, 1100, 1200, 1300, 1400], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100005: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101001, effectValue: [110, 120, 130, 140, 150], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100006: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100201, effectValue: [300, 330, 360, 390, 420], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100007: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101402, effectValue: [2500, 2800, 3100, 3400, 3700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100008: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100009: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100701, effectValue: [100, 150, 200, 250, 300], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100010: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100301, effectValue: [300, 330, 360, 390, 420], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100011: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100702, effectValue: [1500, 1800, 2100, 2400, 2700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100012: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 1, effectTypeId: 101301, effectValue: [500, 530, 560, 590, 620], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100013: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100801, effectValue: [220, 240, 260, 280, 300], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100014: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101302, effectValue: [110, 120, 130, 140, 150], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100015: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100016: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 1, effectTypeId: 100901, effectValue: [500, 530, 560, 590, 620], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100155: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 7, effectTypeId: 100101, effectValue: [0, 0, 0, 0, 720], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100156: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100101, effectValue: [0, 0, 0, 0, 700], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },

  200001: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200002: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200301, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200003: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200004: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 2, effectTypeId: 200201, effectValue: [400, 430, 460, 490, 520], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200005: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [200, 250, 300, 350, 400], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200006: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200007: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200101, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200008: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200009: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200201, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200010: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200011: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200201, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200012: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200101, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200013: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200014: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 8, effectTypeId: 200301, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200015: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 9, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200016: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [400, 430, 460, 490, 520], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200155: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200201, effectValue: [0, 0, 0, 0, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200156: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [0, 0, 0, 0, 500], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },

  300003: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101402, effectValue: [3000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300004: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 2, triggerValue: 0, conditionId: 0 } },
  300007: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 1, effectTypeId: 100101, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300008: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100601, effectValue: [1500], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300011: { maxLevel: 1, detail: { triggerProb: 4000, skillTargetId: 0, effectTypeId: 100501, effectValue: [1500], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1001, triggerValue: 2000, conditionId: 0 } },
  300012: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 1, effectTypeId: 100101, effectValue: [1000], finishType: 'duration', finishValue: 15, timing: 'onTrigger', triggerTypeId: 5, triggerValue: 0, conditionId: 0 } },
  300015: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300016: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [1000], finishType: 'duration', finishValue: 15, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300155: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100801, effectValue: [1000], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300156: { maxLevel: 1, detail: { triggerProb: 2000, skillTargetId: 0, effectTypeId: 101402, effectValue: [3000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
};
/* eslint-enable object-curly-newline, max-len */

export function getSkillInfoKR(skillId: number) {
  const skill = SKILL[skillId];
  // TODO: Remove this after complete skill info
  if (skill === undefined) {
    return undefined;
  }
  // Get skill icon asset path
  const iconAssetPath = (() => {
    const { effectTypeId } = skill.detail;
    const effectCategory = SKILL_EFFECT_CATEGORY[SKILL_EFFECT_TYPE[effectTypeId].effectCategoryId];
    return effectCategory.iconAssetPath;
  })();
  // Get skill effect string
  const effectString = (() => {
    const prefix = (() => {
      if (skill.detail.finishType === 'duration') return `${skill.detail.finishValue} 노트 동안`;
      if (skill.detail.finishType === 'spFire') return `다음 ${skill.detail.finishValue}번의`;
      return '';
    })();
    const effectStr = SKILL_EFFECT_STRING[skill.detail.effectTypeId];
    const effect = SKILL_EFFECT_TYPE[skill.detail.effectTypeId];
    const value = skill.detail.effectValue.map((v) => (effect.scaleType === 'percent' ? v / 100 : v)).join('/');
    return [prefix, effectStr.beforeValue, value, effectStr.afterValue].join(' ');
  })();
  // Get target string
  const targetString = SKILL_TARGET[skill.detail.skillTargetId].krName;
  // Get trigger string
  // TODO: Fix this string
  const triggerString = (() => {
    if (skill.detail.timing === 'onTrigger') {
      const skillTrigger = SKILL_TRIGGER_TYPE[skill.detail.triggerTypeId];
      if (skill.detail.triggerValue === 0) return skillTrigger.krDesc;
      return `${skill.detail.triggerValue} ${skillTrigger.krDesc}`;
    }
    return '어필 시';
  })();
  // Get trigger probability string
  const probString = skill.detail.triggerProb === 10000 ? '' : `${skill.detail.triggerProb / 100}%`;
  return {
    iconAssetPath,
    probString,
    effectString,
    targetString,
    triggerString,
  };
}
