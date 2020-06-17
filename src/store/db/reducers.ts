import { Card, CARD } from '@/data/cardList';
import { PARTIAL_CARD_GLOBAL } from '@/data/cardListGlobal';
import { Gacha, GACHA } from '@/data/gacha';
import { GACHA_GLOBAL } from '@/data/gachaGlobal';
import { Event, EVENT } from '@/data/event';
import { EVENT_GLOBAL } from '@/data/eventGlobal';
import { DBActionTypes, DBActions } from './actions';

interface DBState {
  isJPEdition: boolean,
  cardTable: Card,
  gachaTable: Gacha,
  eventTable: Event,
}

const initialState: DBState = {
  isJPEdition: true,
  cardTable: CARD,
  gachaTable: GACHA,
  eventTable: EVENT,
};

export default function cardsReducer(
  state = initialState,
  action: DBActions,
) {
  switch (action.type) {
    case DBActionTypes.EDITION_TOGGLE: {
      const newIsJPEdition = !state.isJPEdition;
      const newCardTable = (() => {
        if (newIsJPEdition) {
          return CARD;
        }
        return Object.keys(PARTIAL_CARD_GLOBAL).map(Number).reduce((acc, curr) => ({
          ...acc,
          [curr]: {
            ...CARD[curr],
            ...PARTIAL_CARD_GLOBAL[curr],
          },
        }), {});
      })();
      const newGachaTable = (() => {
        if (newIsJPEdition) {
          return GACHA;
        }
        return GACHA_GLOBAL;
      })();
      const newEventTable = (() => {
        if (newIsJPEdition) {
          return EVENT;
        }
        return EVENT_GLOBAL;
      })();
      return {
        ...state,
        isJPEdition: newIsJPEdition,
        cardTable: newCardTable,
        gachaTable: newGachaTable,
        eventTable: newEventTable,
      };
    }
    default:
      return state;
  }
}
