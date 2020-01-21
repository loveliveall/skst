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
  9: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  10: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  11: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  12: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  13: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  14: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  15: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  16: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  17: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  18: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  19: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  20: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  21: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  22: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  23: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  24: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },

  155: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  156: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
};
