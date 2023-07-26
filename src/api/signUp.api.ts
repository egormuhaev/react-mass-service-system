import supabase from '../supabase/supabase.client';

export interface ISignUpArgs {
  email: string;
  password: string;
  username: string;
}

const signUp = async ({ email, password, username }: ISignUpArgs) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
      },
    },
  });

  return { data, error };
};

export default signUp;
