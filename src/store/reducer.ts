import { combineReducers } from '@reduxjs/toolkit';

import cardEffectorReducer from './card-effector/slice';
import cardFilterReducer from './card-filter/slice';
import settingsReducer from './settings/slice';

const appReducer = combineReducers({
  cardEffector: cardEffectorReducer,
  cardFilter: cardFilterReducer,
  settings: settingsReducer,
});

export type AppState = ReturnType<typeof appReducer>;
export default appReducer;
