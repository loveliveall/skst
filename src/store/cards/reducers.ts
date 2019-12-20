import { CardsActionTypes, CardsActions } from './actions';

import { FULL_CARD_LIST } from '@/data/cardList';

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
  uncap: number | null,
}

const initialFilter: FilterState = {
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
  uncap: 5,
};

interface BuffState {
  roleEffect: boolean,
  attributeId: number | null,
}

const initialBuff: BuffState = {
  roleEffect: false,
  attributeId: null,
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
    case CardsActionTypes.FILTER_ATTRIBUTE_SET:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          attribute: {
            ...state.filterDraft.attribute,
            [action.payload.attributeId]: action.payload.value,
          },
        },
      };
    case CardsActionTypes.FILTER_ROLE_SET:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          role: {
            ...state.filterDraft.role,
            [action.payload.roleId]: action.payload.value,
          },
        },
      };
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
    case CardsActionTypes.FILTER_UNCAP_SET:
      return {
        ...state,
        filterDraft: {
          ...state.filterDraft,
          uncap: action.payload.uncap,
        },
      };
    case CardsActionTypes.ADJUST_BUFF_ROLE_EFFECT_SET:
      return {
        ...state,
        buffDraft: {
          ...state.buffDraft,
          roleEffect: action.payload.value,
        },
      };
    case CardsActionTypes.ADJUST_BUFF_ATTRIBUTE_ID_SET:
      return {
        ...state,
        buffDraft: {
          ...state.buffDraft,
          attributeId: action.payload.id,
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
          return true;
        }).map((card) => {
          const attributeBuff = (card.attributeId === state.buffDraft.attributeId) ? 1.2 : 1.0;

          const appl = Math.floor(card.appl * attributeBuff);
          const stam = Math.floor(card.stam * attributeBuff);
          const tech = Math.floor(card.tech * attributeBuff);

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
    case CardsActionTypes.SETTINGS_RESET:
      return {
        ...state,
        filterDraft: state.filter,
        buffDraft: state.buff,
      };
    default:
      return state;
  }
}
