import { createSlice } from '@reduxjs/toolkit';
import { SETTINGS_STORAGE_KEY } from '@/consts';

type SettingsState = {
  defaultIconAwaken: boolean,
};

function storeState(state: SettingsState) {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return false;
  }
}

const storedState = JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY) ?? '{}') as Partial<SettingsState>;

const initialState: SettingsState = {
  defaultIconAwaken: storedState.defaultIconAwaken ?? false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDefaultIconAwaken(state) {
      state.defaultIconAwaken = !state.defaultIconAwaken;
      storeState(state);
    },
  },
});

export const {
  toggleDefaultIconAwaken,
} = settingsSlice.actions;

export default settingsSlice.reducer;
