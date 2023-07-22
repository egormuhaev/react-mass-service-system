import { combineReducers } from 'redux';
import authenticationReducer from './authentication/authentication.slice';
import registrationReducer from './registration/registration.slice';
import autorizationReducer from './autorization/autorization.slice';

export const rootReducer = combineReducers({
  authenticationReducer,
  registrationReducer,
  autorizationReducer,
});
