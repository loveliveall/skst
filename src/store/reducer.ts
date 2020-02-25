import { combineReducers } from 'redux';

import cardsReducer from './cards/reducers';
import dbReducer from './db/reducers';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  db: dbReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
