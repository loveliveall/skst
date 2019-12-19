import { Middleware } from 'redux';

export const loggerMiddleware: Middleware = ({ getState }) => (next) => (action) => {
  console.debug('[Action]', action);
  const returnValue = next(action);
  console.debug('[Applied State]', getState());
  return returnValue;
};
