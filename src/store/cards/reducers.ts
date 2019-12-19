import { CardsActionTypes, CardsActions } from './actions';

import { FULL_CARD_LIST } from '@/data/cardList';

interface CardsState {
  filter: {
    member: {
      [memberId: number]: boolean,
    },
    attribute: {
      [attributeId: number]: boolean,
    },
    role: {
      [roleId: number]: boolean,
    },
    uncap: number | null,
  },
  list: typeof FULL_CARD_LIST,
}

const initialState: CardsState = {
  filter: {
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
    uncap: 5,
  },
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
        filter: {
          ...state.filter,
          member: {
            ...state.filter.member,
            ...newState,
          },
        },
      };
    }
    case CardsActionTypes.FILTER_ATTRIBUTE_SET:
      return {
        ...state,
        filter: {
          ...state.filter,
          attribute: {
            ...state.filter.attribute,
            [action.payload.attributeId]: action.payload.value,
          },
        },
      };
    case CardsActionTypes.FILTER_ROLE_SET:
      return {
        ...state,
        filter: {
          ...state.filter,
          role: {
            ...state.filter.role,
            [action.payload.roleId]: action.payload.value,
          },
        },
      };
    case CardsActionTypes.FILTER_UNCAP_SET:
      return {
        ...state,
        filter: {
          ...state.filter,
          uncap: action.payload.uncap,
        },
      };
    case CardsActionTypes.SETTINGS_APPLY:
      return {
        ...state,
        list: FULL_CARD_LIST.filter((card) => {
          if (state.filter.uncap !== null && card.uncap !== state.filter.uncap) return false;
          if (!state.filter.attribute[card.attributeId]) return false;
          if (!state.filter.role[card.roleId]) return false;
          if (!state.filter.member[card.memberId]) return false;
          return true;
        }),
      };
    default:
      return state;
  }
}
