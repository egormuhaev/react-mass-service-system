import supabase from '../../supabase/supabase.client';

export interface ICreateNewProject {
  user_id: string;
  name: string;
}

const fetchInsertNewProjectByUser = async ({
  user_id,
  name,
}: ICreateNewProject) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert({ user_id: user_id, name: name });
    if (error) throw error;
    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

export default fetchInsertNewProjectByUser;
