interface SkillCondition {
  readonly [id: number]: {
    readonly desc: string,
  },
}

export const SKILL_CONDITION: SkillCondition = {
  0: { desc: '별도 제한 없음' },
};
