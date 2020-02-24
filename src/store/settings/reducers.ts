import { SettingsActionTypes, SettingsActions } from './actions';

interface SettingsState {
  isJPEdition: boolean,
}

const initialState: SettingsState = {
  isJPEdition: true,
};

export default function cardsReducer(
  state = initialState,
  action: SettingsActions,
) {
  switch (action.type) {
    case SettingsActionTypes.EDITION_TOGGLE:
      return {
        ...state,
        isJPEdition: !state.isJPEdition,
      };
    default:
      return state;
  }
}
