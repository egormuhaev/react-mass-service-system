import supabase from '../../supabase/supabase.client';

const fetchDeleteTags = async (tagId: string) => {
  try {
    const { data, error } = await supabase
      .from('menu_tags')
      .delete()
      .eq('id', tagId);
    if (error) throw error;
    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

export default fetchDeleteTags