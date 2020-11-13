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
  25: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  26: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  27: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  28: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  29: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  30: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  31: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  32: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  33: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  34: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  35: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  36: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },

  37: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  38: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  39: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  40: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  41: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  42: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  43: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  44: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  45: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  46: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  47: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  48: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  49: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  50: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  51: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  52: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  53: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  54: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  55: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  56: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  57: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  58: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  59: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  60: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  61: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  62: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  63: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  64: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  65: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  66: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  67: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  68: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  69: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  70: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  71: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  72: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },

  73: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  74: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  75: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  76: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  77: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  78: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  79: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  80: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  81: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  82: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  83: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  84: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  85: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  86: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  87: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  88: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  89: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  90: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  91: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  92: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  93: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  94: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  95: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  96: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  97: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  98: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  99: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  100: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  101: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  102: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  103: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  104: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  105: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  106: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  107: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  108: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  109: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  110: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  111: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  112: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  113: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  114: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  115: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  116: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  117: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  118: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  119: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  120: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  121: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  122: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  123: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  124: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  125: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  126: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  127: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  128: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  129: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  130: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  131: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  132: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  133: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  134: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  135: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  136: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  137: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  138: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  139: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  140: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  141: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  142: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  143: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  144: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  145: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  146: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  147: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  148: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  149: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  150: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  151: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  152: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  153: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  154: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  155: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  156: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  157: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  158: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  159: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  160: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  161: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  162: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  163: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  164: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  165: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  166: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  167: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  168: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  169: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  170: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  171: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  172: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  173: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  174: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  175: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  176: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  177: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  178: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  179: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  180: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  181: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  182: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  183: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  184: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  185: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  186: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  187: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  188: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  189: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  190: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  191: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  192: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  193: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  194: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  195: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  196: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  197: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  198: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  199: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  200: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  201: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  202: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  203: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  204: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  205: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  206: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  207: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  208: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  209: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  210: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  211: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },

  212: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  213: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  214: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  215: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  216: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  217: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  218: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  219: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  220: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  221: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  222: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  223: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  224: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  225: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  226: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  227: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  228: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  229: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  230: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  231: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  232: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  233: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  234: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  235: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  236: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  237: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  238: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  239: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  240: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  241: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  242: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  243: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  244: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  245: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  246: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  247: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  248: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  249: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  250: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  251: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  252: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  253: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  254: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  255: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  256: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  257: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  258: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  259: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  260: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  261: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  262: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  263: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  264: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  265: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  266: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  267: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  268: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  269: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  270: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  271: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  272: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  273: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  274: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  275: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  276: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  277: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  278: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  279: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  280: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  281: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  282: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  283: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  284: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  285: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 3, 4, 5] } },
  286: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  287: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  288: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  289: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  290: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  291: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  292: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  293: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  294: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  295: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  296: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  297: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  298: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  299: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  300: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  301: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  302: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  303: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  304: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  305: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  306: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  307: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  308: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  309: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  310: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  311: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  312: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  313: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  314: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  315: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  316: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  317: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  318: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  319: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  320: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  321: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  322: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  323: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  324: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  325: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  326: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  327: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  328: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  329: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  330: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  331: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  332: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  333: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  334: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  335: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  336: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  337: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  338: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  339: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  340: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  341: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  342: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  343: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  344: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  345: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
  346: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },

  347: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 4, 4, 4, 4, 5] } },
  348: { speciality: [3, 3, 3, 4, 4, 5], individuality: { passive: [3, 3, 3, 4, 4, 5] } },
};
