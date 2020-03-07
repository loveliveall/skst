import { combineReducers } from 'redux';

import cardsReducer from './cards/reducers';
import cardComparatorReducer from './card-comparator/reducers';
import dbReducer from './db/reducers';
import deckSimulatorReducer from './deck-simulator/reducers';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  cardComparator: cardComparatorReducer,
  db: dbReducer,
  deckSimulator: deckSimulatorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
