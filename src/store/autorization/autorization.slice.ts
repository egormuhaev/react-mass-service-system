import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAutorizationState } from '../../interfaces/Autorization.interface';
import { IAuthenticationUserData } from '../../interfaces/Authentication.interface';

const initialState: IAutorizationState = {
  processAutorization: false,
  email: {
    value: '',
    status: true,
  },

  password: {
    value: '',
    status: true,
  },
};

export const autorizationSlice = createSlice({
  name: 'autorization',
  initialState,
  reducers: {
    onCompleteLogIn(state, action: PayloadAction<IAuthenticationUserData>) {
      if (action.payload.user && action.payload.session) {
        state.processAutorization = true;
      }
    },

    setEmail(state, action: PayloadAction<string>) {
      state.email.value = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password.value = action.payload;
    },
  },
});

export default autorizationSlice.reducer;
