import { DeckSimulatorActionTypes, DeckSimulatorActions } from './actions';

type DeckSetting = {
  cardId: number | null,
  specialityLv: number,
  appl: number,
  stam: number,
  tech: number,
}[]; // Idx 0-2: Red, 3-5: Green, 6-8: Blue

interface DeckSimulatorState {
  songAttributeId: number | null,
  liveEffect: {
    key: number,
    effectTargetId: number,
    effectTypeId: number,
    amount: number,
  }[],
  deckSettings: {
    key: number,
    deck: DeckSetting,
  }[],
  cardSelectModal: {
    open: boolean,
    key: number,
    slotIdx: number,
  },
}

/* eslint-disable object-curly-newline */
const defaultDeck: DeckSetting = [
  { cardId: null, specialityLv: 1, appl: 0, stam: 0, tech: 0 },
  { cardId: null, specialityLv: 1, appl: 0, stam: 0, tech: 0 },
  { cardId: null, specialityLv: 1, appl: 0, stam: 0, tech: 0 },
  { cardId: null, specialityLv: 1, appl: 0, stam: 0, tech: 0 },
  { cardId: null, specialityLv: 1, appl: 0, stam: 0, tech: 0 },
  { cardId: null, specialityLv: 1, appl: 0, stam: 0, tech: 0 },
  { cardId: null, specialityLv: 1, appl: 0, stam: 0, tech: 0 },
  { cardId: null, specialityLv: 1, appl: 0, stam: 0, tech: 0 },
  { cardId: null, specialityLv: 1, appl: 0, stam: 0, tech: 0 },
];
/* eslint-enable object-curly-newline */

const initialState: DeckSimulatorState = {
  songAttributeId: null,
  liveEffect: [],
  deckSettings: [{
    key: new Date().getTime(),
    deck: defaultDeck,
  }],
  cardSelectModal: {
    open: false,
    key: 0,
    slotIdx: 0,
  },
};

export default function deckSimulatorReducer(
  state = initialState,
  action: DeckSimulatorActions,
) {
  switch (action.type) {
    case DeckSimulatorActionTypes.SONG_ATTRIBUTE_ID_SET:
      return {
        ...state,
        songAttributeId: action.payload.attributeId,
      };
    case DeckSimulatorActionTypes.LIVE_EFFECT_ADD:
      return {
        ...state,
        liveEffect: [...state.liveEffect, action.payload],
      };
    case DeckSimulatorActionTypes.LIVE_EFFECT_TARGET_EDIT:
      return {
        ...state,
        liveEffect: state.liveEffect.map((item) => {
          if (item.key === action.payload.key) {
            return {
              ...item,
              effectTargetId: action.payload.effectTargetId,
            };
          }
          return item;
        }),
      };
    case DeckSimulatorActionTypes.LIVE_EFFECT_TYPE_EDIT:
      return {
        ...state,
        liveEffect: state.liveEffect.map((item) => {
          if (item.key === action.payload.key) {
            return {
              ...item,
              effectTypeId: action.payload.effectTypeId,
            };
          }
          return item;
        }),
      };
    case DeckSimulatorActionTypes.LIVE_EFFECT_AMOUNT_EDIT:
      return {
        ...state,
        liveEffect: state.liveEffect.map((item) => {
          if (item.key === action.payload.key) {
            return {
              ...item,
              amount: action.payload.amount,
            };
          }
          return item;
        }),
      };
    case DeckSimulatorActionTypes.LIVE_EFFECT_REMOVE:
      return {
        ...state,
        liveEffect: state.liveEffect.filter((item) => item.key !== action.payload.key),
      };
    case DeckSimulatorActionTypes.DECK_ADD:
      return {
        ...state,
        deckSettings: [...state.deckSettings, { key: action.payload.key, deck: defaultDeck }],
      };
    case DeckSimulatorActionTypes.DECK_SLOT_CARD_ID_EDIT:
      return {
        ...state,
        deckSettings: state.deckSettings.map((item) => {
          if (item.key === action.payload.key) {
            return {
              ...item,
              deck: item.deck.map((slot, idx) => {
                if (idx === action.payload.slotIdx) {
                  return {
                    ...slot,
                    cardId: action.payload.cardId,
                  };
                }
                return slot;
              }),
            };
          }
          return item;
        }),
      };
    case DeckSimulatorActionTypes.DECK_SLOT_SPEC_LV_EDIT:
      return {
        ...state,
        deckSettings: state.deckSettings.map((item) => {
          if (item.key === action.payload.key) {
            return {
              ...item,
              deck: item.deck.map((slot, idx) => {
                if (idx === action.payload.slotIdx) {
                  return {
                    ...slot,
                    specialityLv: action.payload.specLv,
                  };
                }
                return slot;
              }),
            };
          }
          return item;
        }),
      };
    case DeckSimulatorActionTypes.DECK_SLOT_APPL_EDIT:
      return {
        ...state,
        deckSettings: state.deckSettings.map((item) => {
          if (item.key === action.payload.key) {
            return {
              ...item,
              deck: item.deck.map((slot, idx) => {
                if (idx === action.payload.slotIdx) {
                  return {
                    ...slot,
                    appl: action.payload.appl,
                  };
                }
                return slot;
              }),
            };
          }
          return item;
        }),
      };
    case DeckSimulatorActionTypes.DECK_SLOT_STAM_EDIT:
      return {
        ...state,
        deckSettings: state.deckSettings.map((item) => {
          if (item.key === action.payload.key) {
            return {
              ...item,
              deck: item.deck.map((slot, idx) => {
                if (idx === action.payload.slotIdx) {
                  return {
                    ...slot,
                    stam: action.payload.stam,
                  };
                }
                return slot;
              }),
            };
          }
          return item;
        }),
      };
    case DeckSimulatorActionTypes.DECK_SLOT_TECH_EDIT:
      return {
        ...state,
        deckSettings: state.deckSettings.map((item) => {
          if (item.key === action.payload.key) {
            return {
              ...item,
              deck: item.deck.map((slot, idx) => {
                if (idx === action.payload.slotIdx) {
                  return {
                    ...slot,
                    tech: action.payload.tech,
                  };
                }
                return slot;
              }),
            };
          }
          return item;
        }),
      };
    case DeckSimulatorActionTypes.DECK_REMOVE:
      return {
        ...state,
        deckSettings: state.deckSettings.filter((item) => item.key !== action.payload.key),
      };
    case DeckSimulatorActionTypes.CARD_SELECT_MODAL_OPEN:
      return {
        ...state,
        cardSelectModal: {
          open: true,
          key: action.payload.key,
          slotIdx: action.payload.slotIdx,
        },
      };
    case DeckSimulatorActionTypes.CARD_SELECT_MODAL_CLOSE:
      return {
        ...state,
        cardSelectModal: {
          open: false,
          key: 0,
          slotIdx: 0,
        },
      };
    default:
      return state;
  }
}
