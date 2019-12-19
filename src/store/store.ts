import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './reducer';
import { loggerMiddleware } from './middleware';

export const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware,
  ),
);
