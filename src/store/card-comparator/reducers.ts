import { CardComparatorActionTypes, CardComparatorActions } from './actions';

type CardSettings = {
  cardId: number,
  uncap: number,
  kizunaLv: number,
};

interface CardComparatorState {
  cardSettings: {
    key: number,
    card: CardSettings,
  }[],
  cardSelectModal: {
    open: boolean,
    key: number | null,
  },
}

const initialState: CardComparatorState = {
  cardSettings: [],
  cardSelectModal: {
    open: false,
    key: null,
  },
};

export default function cardsReducer(
  state = initialState,
  action: CardComparatorActions,
) {
  switch (action.type) {
    case CardComparatorActionTypes.CARD_ADD:
      return {
        ...state,
        cardSettings: [...state.cardSettings, {
          key: action.payload.key,
          card: {
            cardId: action.payload.cardId,
            uncap: 0,
            kizunaLv: 1,
          },
        }],
      };
    case CardComparatorActionTypes.CARD_ID_EDIT:
      return {
        ...state,
        cardSettings: state.cardSettings.map((cardSetting) => {
          if (cardSetting.key === action.payload.key) {
            return {
              key: cardSetting.key,
              card: {
                ...cardSetting.card,
                cardId: action.payload.cardId,
              },
            };
          }
          return cardSetting;
        }),
      };
    case CardComparatorActionTypes.CARD_UNCAP_EDIT:
      return {
        ...state,
        cardSettings: state.cardSettings.map((cardSetting) => {
          if (cardSetting.key === action.payload.key) {
            return {
              key: cardSetting.key,
              card: {
                ...cardSetting.card,
                uncap: action.payload.uncap,
              },
            };
          }
          return cardSetting;
        }),
      };
    case CardComparatorActionTypes.CARD_KIZUNA_EDIT:
      return {
        ...state,
        cardSettings: state.cardSettings.map((cardSetting) => {
          if (cardSetting.key === action.payload.key) {
            return {
              key: cardSetting.key,
              card: {
                ...cardSetting.card,
                kizunaLv: action.payload.kizunaLv,
              },
            };
          }
          return cardSetting;
        }),
      };
    case CardComparatorActionTypes.CARD_REMOVE:
      return {
        ...state,
        cardSettings: state.cardSettings.filter((cardSetting) => cardSetting.key !== action.payload.key),
      };
    case CardComparatorActionTypes.SELECT_MODAL_OPEN:
      return {
        ...state,
        cardSelectModal: {
          open: true,
          key: action.payload.key,
        },
      };
    case CardComparatorActionTypes.SELECT_MODAL_CLOSE:
      return {
        ...state,
        cardSelectModal: {
          open: false,
          key: null,
        },
      };
    default:
      return state;
  }
}
