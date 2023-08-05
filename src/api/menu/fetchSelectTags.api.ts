import supabase from '../../supabase/supabase.client';

const fetchSelectTags = async (projectId: string) => {
  try {
    const { data, error } = await supabase
      .from('menu_tags')
      .select('tag, id')
      .eq('project_id', projectId);
    if (error) throw error;
    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

export default fetchSelectTags;
