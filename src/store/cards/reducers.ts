import { CardsActionTypes, CardsActions } from './actions';
import { SkillTargetInfo } from './types';

interface FilterState {
  member: {
    [memberId: number]: boolean,
  },
  attribute: {
    [attributeId: number]: boolean,
  },
  role: {
    [roleId: number]: boolean,
  },
  rarity: {
    [rarityId: number]: boolean,
  },
  specCategory: {
    key: number,
    categoryId: number,
  }[],
  specTarget: {
    key: number,
    target: SkillTargetInfo,
  }[],
  indivPCategory: {
    key: number,
    categoryId: number,
  }[],
  indivPTarget: {
    key: number,
    target: SkillTargetInfo,
  }[],
  indivLCategory: {
    key: number,
    categoryId: number,
  }[],
  indivLTarget: {
    key: number,
    target: SkillTargetInfo,
  }[],
  uncap: number | null,
  outfitSeriesId: number | null,
}

export const initialFilter: FilterState = {
  member: {
    /* eslint-disable object-property-newline */
    1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true,
    11: true, 12: true, 13: true, 14: true, 15: true, 16: true, 17: true, 18: true, 19: true,
    21: true, 22: true, 23: true, 24: true, 25: true, 26: true, 27: true, 28: true, 29: true,
    /* eslint-enable object-property-newline */
  },
  attribute: {
    1: true, 2: true, 3: true, 4: true, 5: true, 6: true,
  },
  role: {
    1: true, 2: true, 3: true, 4: true,
  },
  rarity: {
    1: true, 2: true, 3: true,
  },
  specCategory: [],
  specTarget: [],
  indivPCategory: [],
  indivPTarget: [],
  indivLCategory: [],
  indivLTarget: [],
  uncap: 5,
  outfitSeriesId: null,
};

interface BuffState {
  roleEffect: boolean,
  indivPEffect: boolean,
  attributeId: number | null,
  diffAttrDebuf: {
    targetParam: 'appl' | 'baseAppl',
    value: number,
  },
}

export const initialBuff: BuffState = {
  roleEffect: false,
  indivPEffect: false,
  attributeId: null,
  diffAttrDebuf: {
    targetParam: 'appl',
    value: 0,
  },
};

interface CardsState {
  filter: FilterState,
  filterDraft: FilterState,
  buff: BuffState,
  buffDraft: BuffState,
}

const initialState: CardsState = {
  filter: initialFilter,
  filterDraft: initialFilter,
  buff: initialBuff,
  buffDraft: initialBuff,
};

export default function cardsReducer(
  state = initialState,
  action: CardsActions,
) {
  switch (action.type) {
    case CardsActionTypes.FILTER_MEMBERS_SET: {
      const newState = action.payload.memberIds.reduce((acc, cur) => ({
        ...acc,
        [cur]: action.payload.value,
      }), {});
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          member: {
            ...state.filterDraft.member,
            ...newState,
          },
        },
      };
    }
    case CardsActionTypes.FILTER_ATTRIBUTE_SET: {
      const newState = action.payload.attributeIds.reduce((acc, cur) => ({
        ...acc,
        [cur]: action.payload.value,
      }), {});
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          attribute: {
            ...state.filterDraft.attribute,
            ...newState,
          },
        },
      };
    }
    case CardsActionTypes.FILTER_ROLE_SET: {
      const newState = action.payload.roleIds.reduce((acc, cur) => ({
        ...acc,
        [cur]: action.payload.value,
      }), {});
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          role: {
            ...state.filterDraft.role,
            ...newState,
          },
        },
      };
    }
    case CardsActionTypes.FILTER_RARITY_SET:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          rarity: {
            ...state.filterDraft.rarity,
            [action.payload.rarityId]: action.payload.value,
          },
        },
      };
    case CardsActionTypes.FILTER_SPEC_CAT_ADD:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          specCategory: [...state.filterDraft.specCategory, action.payload],
        },
      };
    case CardsActionTypes.FILTER_SPEC_CAT_EDIT:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          specCategory: state.filterDraft.specCategory.map((item) => (
            item.key === action.payload.key ? action.payload : item
          )),
        },
      };
    case CardsActionTypes.FILTER_SPEC_CAT_REMOVE:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          specCategory: state.filterDraft.specCategory.filter((item) => item.key !== action.payload.key),
        },
      };
    case CardsActionTypes.FILTER_SPEC_TARGET_ADD:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          specTarget: [...state.filterDraft.specTarget, action.payload],
        },
      };
    case CardsActionTypes.FILTER_SPEC_TARGET_EDIT:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          specTarget: state.filterDraft.specTarget.map((item) => (
            item.key === action.payload.key ? action.payload : item
          )),
        },
      };
    case CardsActionTypes.FILTER_SPEC_TARGET_REMOVE:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          specTarget: state.filterDraft.specTarget.filter((item) => item.key !== action.payload.key),
        },
      };
    case CardsActionTypes.FILTER_INDIV_P_CAT_ADD:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivPCategory: [...state.filterDraft.indivPCategory, action.payload],
        },
      };
    case CardsActionTypes.FILTER_INDIV_P_CAT_EDIT:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivPCategory: state.filterDraft.indivPCategory.map((item) => (
            item.key === action.payload.key ? action.payload : item
          )),
        },
      };
    case CardsActionTypes.FILTER_INDIV_P_CAT_REMOVE:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivPCategory: state.filterDraft.indivPCategory.filter((item) => item.key !== action.payload.key),
        },
      };
    case CardsActionTypes.FILTER_INDIV_P_TARGET_ADD:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivPTarget: [...state.filterDraft.indivPTarget, action.payload],
        },
      };
    case CardsActionTypes.FILTER_INDIV_P_TARGET_EDIT:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivPTarget: state.filterDraft.indivPTarget.map((item) => (
            item.key === action.payload.key ? action.payload : item
          )),
        },
      };
    case CardsActionTypes.FILTER_INDIV_P_TARGET_REMOVE:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivPTarget: state.filterDraft.indivPTarget.filter((item) => item.key !== action.payload.key),
        },
      };
    case CardsActionTypes.FILTER_INDIV_L_CAT_ADD:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivLCategory: [...state.filterDraft.indivLCategory, action.payload],
        },
      };
    case CardsActionTypes.FILTER_INDIV_L_CAT_EDIT:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivLCategory: state.filterDraft.indivLCategory.map((item) => (
            item.key === action.payload.key ? action.payload : item
          )),
        },
      };
    case CardsActionTypes.FILTER_INDIV_L_CAT_REMOVE:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivLCategory: state.filterDraft.indivLCategory.filter((item) => item.key !== action.payload.key),
        },
      };
    case CardsActionTypes.FILTER_INDIV_L_TARGET_ADD:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivLTarget: [...state.filterDraft.indivLTarget, action.payload],
        },
      };
    case CardsActionTypes.FILTER_INDIV_L_TARGET_EDIT:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivLTarget: state.filterDraft.indivLTarget.map((item) => (
            item.key === action.payload.key ? action.payload : item
          )),
        },
      };
    case CardsActionTypes.FILTER_INDIV_L_TARGET_REMOVE:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          indivLTarget: state.filterDraft.indivLTarget.filter((item) => item.key !== action.payload.key),
        },
      };
    case CardsActionTypes.FILTER_UNCAP_SET:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          uncap: action.payload.uncap,
        },
      };
    case CardsActionTypes.FILTER_OUTFIT_ID_SET:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          outfitSeriesId: action.payload.id,
        },
      };
    case CardsActionTypes.BUFF_ROLE_EFFECT_SET:
      return {
        ...state,
        buffDraft: {
          ...state.buffDraft,
          roleEffect: action.payload.value,
        },
      };
    case CardsActionTypes.BUFF_INDIV_P_EFFECT_SET:
      return {
        ...state,
        buffDraft: {
          ...state.buffDraft,
          indivPEffect: action.payload.value,
        },
      };
    case CardsActionTypes.BUFF_ATTRIBUTE_ID_SET:
      return {
        ...state,
        buffDraft: {
          ...state.buffDraft,
          attributeId: action.payload.id,
        },
      };
    case CardsActionTypes.BUFF_DIFF_ATTR_DEBUF_SET:
      return {
        ...state,
        buffDraft: {
          ...state.buffDraft,
          diffAttrDebuf: {
            targetParam: action.payload.targetParam,
            value: action.payload.percent,
          },
        },
      };
    case CardsActionTypes.SETTINGS_APPLY:
      return {
        ...state,
        filter: state.filterDraft,
        buff: state.buffDraft,
      };
    case CardsActionTypes.SETTINGS_ROLLBACK:
      return {
        ...state,
        filterDraft: state.filter,
        buffDraft: state.buff,
      };
    case CardsActionTypes.SETTINGS_RESET:
      return {
        ...state,
        filterDraft: initialState.filter,
        buffDraft: initialState.buff,
      };
    default:
      return state;
  }
}
