import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAuthenticationState,
  IAuthenticationUserData,
} from '../../interfaces/Authentication.interface';

const initialState: IAuthenticationState = {
  processAuth: false,
  data: {
    user: null,
    session: null,
  },
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<IAuthenticationUserData>) {
      if (action.payload.session && action.payload.user) {
        state.data.session = action.payload.session;
        state.data.user = action.payload.user;
        state.processAuth = true;
      } else {
        state.processAuth = false;
      }
    },
  },
});

export default authenticationSlice.reducer;
