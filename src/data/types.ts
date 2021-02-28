export type SkillEffect = {
  readonly type: number,
  readonly values: number[],
  readonly calcType: number,
  readonly finishType: number,
  readonly finishValue: number,
};

export type SkillCondition = {
  readonly type: number,
  readonly value: number,
};

export type Skill = {
  readonly triggerTypeId: number,
  readonly triggerProb: number,
  readonly targetIds: number[],
  readonly conditions: SkillCondition[],
  readonly effects: SkillEffect[],
};
