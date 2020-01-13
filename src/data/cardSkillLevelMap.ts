interface SkillLevelMap {
  readonly [id: number]: {
    speciality: number[],
    individuality: {
      passive: number[],
    },
  },
}

// Map between uncap level - skill level
export const SKILL_LEVEL_MAP: SkillLevelMap = {
  1: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  2: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  3: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  4: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  5: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  6: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  7: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  8: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
};
