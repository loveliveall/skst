import { combineReducers } from '@reduxjs/toolkit';

import cardFilterReducer from './card-filter/slice';
import settingsReducer from './settings/slice';

const appReducer = combineReducers({
  cardFilter: cardFilterReducer,
  settings: settingsReducer,
});

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;
