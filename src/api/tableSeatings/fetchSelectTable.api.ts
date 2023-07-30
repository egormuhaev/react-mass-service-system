import supabase from '../../supabase/supabase.client';

export const fetchSelectTable = async (project_id: string) => {
  try {
    const { data, error } = await supabase
      .from('tables')
      .select('*')
      .eq('project_id', project_id);

    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

export default fetchSelectTable