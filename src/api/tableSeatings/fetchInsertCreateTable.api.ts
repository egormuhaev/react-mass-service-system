import supabase from '../../supabase/supabase.client';

export interface IInsertNewTable {
  project_id: string;
  name: string;
  table_seating: number;
}

export const fetchInsertCreateTable = async ({
  project_id,
  name,
  table_seating,
}: IInsertNewTable) => {
  try {
    const { data, error } = await supabase
      .from('tables')
      .insert({ project_id, name, table_seating });

    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

export default fetchInsertCreateTable;
