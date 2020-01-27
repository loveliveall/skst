import { CardsActionTypes, CardsActions } from './actions';
import {
  SkillTargetInfo,
  isAttributeTarget,
  isRoleTarget,
  isGroupTarget,
  isGradeTarget,
  isUnitTarget,
} from './types';

import { MEMBER } from '@/data/memberMetadata';
import { FULL_CARD_LIST } from '@/data/cardList';
import { SKILL } from '@/data/skill';
import { CARD_SKILL } from '@/data/cardSkill';
import { SKILL_EFFECT_TYPE } from '@/data/skillEffectType';

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
  indivPCategory: {
    key: number,
    categoryId: number,
  }[],
  indivPTarget: {
    key: number,
    target: SkillTargetInfo,
  }[],
  uncap: number | null,
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
  indivPCategory: [],
  indivPTarget: [],
  uncap: 5,
};

interface BuffState {
  roleEffect: boolean,
  attributeId: number | null,
  diffAttrDebuf: {
    targetParam: 'appl' | 'baseAppl',
    value: number,
  },
}

export const initialBuff: BuffState = {
  roleEffect: false,
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
  list: typeof FULL_CARD_LIST,
}

const initialState: CardsState = {
  filter: initialFilter,
  filterDraft: initialFilter,
  buff: initialBuff,
  buffDraft: initialBuff,
  list: FULL_CARD_LIST.filter((card) => card.uncap === 5),
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
    case CardsActionTypes.FILTER_UNCAP_SET:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          uncap: action.payload.uncap,
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
        list: FULL_CARD_LIST.filter((card) => {
          if (state.filterDraft.uncap !== null && card.uncap !== state.filterDraft.uncap) return false;
          if (!state.filterDraft.attribute[card.attributeId]) return false;
          if (!state.filterDraft.role[card.roleId]) return false;
          if (!state.filterDraft.rarity[card.rarityId]) return false;
          if (!state.filterDraft.member[card.memberId]) return false;

          // Passive skill filtering
          const ipDetail = SKILL[CARD_SKILL[card.id].individuality.passiveId].detail;
          // Filter by skill category
          const { indivPCategory } = state.filterDraft;
          if (indivPCategory.length !== 0) {
            const ipCategoryId = SKILL_EFFECT_TYPE[ipDetail.effectTypeId].effectCategoryId;
            const sat = indivPCategory.some((item) => item.categoryId === ipCategoryId);
            if (!sat) return false;
          }
          // Filter by skill target
          const { indivPTarget } = state.filterDraft;
          if (indivPTarget.length !== 0) {
            const ipTargetId = ipDetail.skillTargetId;
            const sat = indivPTarget.some((item) => {
              const { target } = item;
              if (target.id !== ipTargetId) return false;
              /* eslint-disable max-len */
              if (isAttributeTarget(target) && target.attributeId !== null && target.attributeId !== card.attributeId) return false;
              if (isRoleTarget(target) && target.roleId !== null && target.roleId !== card.roleId) return false;
              if (isGroupTarget(target) && target.groupId !== null && target.groupId !== MEMBER[card.memberId].groupId) return false;
              if (isGradeTarget(target) && target.grade !== null && target.grade !== MEMBER[card.memberId].grade) return false;
              if (isUnitTarget(target) && target.unitId !== null && target.unitId !== MEMBER[card.memberId].unitId) return false;
              /* eslint-enable max-len */
              return true;
            });
            if (!sat) return false;
          }

          return true;
        }).map((card) => {
          // Base Stat Multiplier (%)
          let baseApplMul = 100;
          const baseStamMul = 100;
          const baseTechMul = 100;
          // Stat Multiplier (%)
          let applMul = 100;
          let stamMul = 100;
          let techMul = 100;
          if (state.buffDraft.attributeId !== null && state.buffDraft.attributeId !== card.attributeId) {
            if (state.buffDraft.diffAttrDebuf.targetParam === 'baseAppl') {
              baseApplMul -= state.buffDraft.diffAttrDebuf.value;
            } else {
              applMul -= state.buffDraft.diffAttrDebuf.value;
            }
          }
          if (state.buffDraft.attributeId === card.attributeId) {
            applMul += 20;
            stamMul += 20;
            techMul += 20;
          }

          const appl = Math.floor(card.appl * (baseApplMul / 100) * (applMul / 100));
          const stam = Math.floor(card.stam * (baseStamMul / 100) * (stamMul / 100));
          const tech = Math.floor(card.tech * (baseTechMul / 100) * (techMul / 100));

          const voltageMul = (() => {
            if (!state.buffDraft.roleEffect) return 1; // Not applying role effect
            if (card.roleId === 1) return 1.05; // Vo
            if (card.roleId === 4) return 0.95; // Sk
            return 1;
          })();
          const newVoltage = Math.floor(appl * voltageMul);
          return {
            ...card,
            appl,
            stam,
            tech,
            expectedVoltage: newVoltage,
          };
        }),
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
