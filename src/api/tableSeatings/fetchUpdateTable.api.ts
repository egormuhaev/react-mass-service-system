import supabase from '../../supabase/supabase.client';

export interface IUpdateNewTable {
  name: string;
  table_seating: number;
  active: boolean;
  table_id: string;
}

export const fetchUpdateTable = async ({
  name,
  table_seating,
  active,
  table_id,
}: IUpdateNewTable) => {
  try {
    const { data, error } = await supabase
      .from('tables')
      .update({ name, table_seating, active })
      .eq('id', table_id);

    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
};

export default fetchUpdateTable;
