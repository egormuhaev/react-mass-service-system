import supabase from '../../supabase/supabase.client';

const fetchDeletaTable = async (table_id: string) => {
  try {
    const { data, error } = await supabase
      .from('tables')
      .delete()
      .eq('id', table_id);

    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

export default fetchDeletaTable