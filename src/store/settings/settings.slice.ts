import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISettingsState } from '../../interfaces/Settings.interface';
import { Theme } from '../../interfaces/Settings.interface';

const initialState: ISettingsState = {
  theme: 'light',
  sidebarSlim: false,
  sidebarNeomorphism: false,
};

export const settingsSlice = createSlice({
  name: 'sidebarSlim',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },

    setSidebarSlim(state, action: PayloadAction<boolean>) {
      state.sidebarSlim = action.payload;
    },

    setSidebarNeomorphism(state, action: PayloadAction<boolean>){
      state.sidebarNeomorphism = action.payload;
    }
  },
});

export default settingsSlice.reducer;
