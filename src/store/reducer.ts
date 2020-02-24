import { combineReducers } from 'redux';

import cardsReducer from './cards/reducers';
import settingsReducer from './settings/reducers';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  settings: settingsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
