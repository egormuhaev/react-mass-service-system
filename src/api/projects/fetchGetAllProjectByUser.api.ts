import supabase from '../../supabase/supabase.client';

const fetchGetAllProjectByUser = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', id);

    if (error) throw error;
    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

export default fetchGetAllProjectByUser;
