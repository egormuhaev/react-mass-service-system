import supabase from '../supabase/supabase.config';

export interface ILogInArgs {
  email: string;
  password: string;
}

const logIn = async ({ email, password }: ILogInArgs) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return { data, error };
};

export default logIn;
