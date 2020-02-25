import { createFSA, TActions } from '../redux-utils/utils';

export const DBActionTypes = {
  EDITION_TOGGLE: 'DB_EDITION_TOGGLE',
} as const;

export const DBActionCreators = {
  toggleEdition: () => createFSA(DBActionTypes.EDITION_TOGGLE, {}),
};

export type DBActions = TActions<typeof DBActionCreators>;
