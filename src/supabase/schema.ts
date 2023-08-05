export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      menu_tags: {
        Row: {
          created_at: string | null
          id: string
          project_id: string | null
          tag: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          project_id?: string | null
          tag?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          project_id?: string | null
          tag?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_tags_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          created_at: string | null
          id: string
          name: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tables: {
        Row: {
          active: boolean
          created_at: string | null
          id: string
          name: string | null
          project_id: string | null
          table_seating: number | null
        }
        Insert: {
          active?: boolean
          created_at?: string | null
          id?: string
          name?: string | null
          project_id?: string | null
          table_seating?: number | null
        }
        Update: {
          active?: boolean
          created_at?: string | null
          id?: string
          name?: string | null
          project_id?: string | null
          table_seating?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tables_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
