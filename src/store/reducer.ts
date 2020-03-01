import { combineReducers } from 'redux';

import cardsReducer from './cards/reducers';
import dbReducer from './db/reducers';
import deckSimulatorReducer from './deck-simulator/reducers';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  db: dbReducer,
  deckSimulator: deckSimulatorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
