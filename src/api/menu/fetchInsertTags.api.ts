import supabase from '../../supabase/supabase.client';

export interface Request {
  project_id: string;
  tag: string;
}

const fetchInsertTags = async (req: Request[]) => {
  try {
    const { data, error } = await supabase
      .from('menu_tags')
      .insert(req)
      .select('tag, id');

    if (error) throw error;
    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

export default fetchInsertTags;
