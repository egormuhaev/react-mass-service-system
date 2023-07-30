export interface ProjectsTable {
  created_at: string | null;
  id: string;
  name: string | null;
  user_id: string | null;
}

export interface TableShema {
  created_at: string | null;
  id: string;
  name: string | null;
  project_id: string | null;
  table_seating: number | null;
  active: boolean | null;
}
