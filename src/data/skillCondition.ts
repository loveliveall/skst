interface SkillCondition {
  readonly [id: number]: {
    readonly desc: string,
  },
}

export const SKILL_CONDITION: SkillCondition = {
  0: { desc: '별도 제한 없음' },
  1: { desc: '1회만 발동' },
  2: { desc: '2회만 발동' },
  4: { desc: '4회만 발동' },
  8: { desc: '8회만 발동' },
  10: { desc: '10회만 발동' },
};
