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

  200001: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, conditionId: 0 } },
  200002: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200301, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, conditionId: 0 } },
  200003: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, conditionId: 0 } },
  200004: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 2, effectTypeId: 200201, effectValue: [400, 430, 460, 490, 520], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, conditionId: 0 } },
  200005: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [200, 250, 300, 350, 400], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, conditionId: 0 } },
  200006: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, conditionId: 0 } },
  200007: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200101, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, conditionId: 0 } },
  200008: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, conditionId: 0 } },

  300003: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101402, effectValue: [3000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1, conditionId: 0 } },
  300004: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 2, conditionId: 0 } },
  300007: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 1, effectTypeId: 100101, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 1, conditionId: 0 } },
  300008: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100601, effectValue: [1500], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, conditionId: 0 } },
};
/* eslint-enable object-curly-newline, max-len */
