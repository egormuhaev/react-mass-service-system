import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRegistationState } from '../../interfaces/Registration.interface';
import { IAuthenticationUserData } from '../../interfaces/Authentication.interface';
import {
  passwordComplexity,
  isRegEmailValid,
} from '../../utils/helpers/validation.helpers';

const initialState: IRegistationState = {
  processRegistration: false,
  email: {
    value: '',
    status: false,
  },
  password: {
    complexity: 0,
    value: '',
    status: false,
  },
  username: {
    value: '',
    status: false,
  },
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    onCompleteSignUp(state, action: PayloadAction<IAuthenticationUserData>) {
      if (action.payload.user) {
        state.processRegistration = true;
      }
    },

    setEmail(state, action: PayloadAction<string>) {
      state.email.value = action.payload;
      state.email.status = isRegEmailValid(action.payload);
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password.value = action.payload;
      const complexity = passwordComplexity(action.payload);
      console.log(complexity);
      state.password.complexity = complexity;
      state.password.status = Boolean(complexity > 6);
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username.value = action.payload;
    },
  },
});

export default registrationSlice.reducer;
