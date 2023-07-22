import { User, Session } from '@supabase/supabase-js';

export interface IAuthenticationState {
  processAuth: boolean;
  data: IAuthenticationUserData;
}

export interface IAuthenticationUserData {
  user: User | null;
  session: Session | null;
}
