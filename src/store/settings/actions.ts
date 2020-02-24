import { createFSA, TActions } from '../redux-utils/utils';

export const SettingsActionTypes = {
  EDITION_TOGGLE: 'SETTINGS_EDITION_TOGGLE',
} as const;

export const SettingsActionCreators = {
  toggleEdition: () => createFSA(SettingsActionTypes.EDITION_TOGGLE, {}),
};

export type SettingsActions = TActions<typeof SettingsActionCreators>;
