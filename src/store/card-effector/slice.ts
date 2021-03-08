import { createSlice } from '@reduxjs/toolkit';

type CardEffectorState = {
  applySelfPassive: boolean,
};

const initialState: CardEffectorState = {
  applySelfPassive: false,
};

const cardEffectorSlice = createSlice({
  name: 'card-effector',
  initialState,
  reducers: {
    toggleApplySelfPassive(state) {
      state.applySelfPassive = !state.applySelfPassive;
    },
  },
});

export const {
  toggleApplySelfPassive,
} = cardEffectorSlice.actions;

export default cardEffectorSlice.reducer;
