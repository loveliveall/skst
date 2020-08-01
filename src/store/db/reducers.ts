import { Card, CARD } from '@/data/cardList';
import { Gacha, GACHA } from '@/data/gacha';
import { Event, EVENT } from '@/data/event';
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
      const newCardTable = CARD;
      const newGachaTable = GACHA;
      const newEventTable = EVENT;
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
