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
          created_at: string | null
          id: string
          name: string | null
          project_id: string | null
          "table seating": number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name?: string | null
          project_id?: string | null
          "table seating"?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string | null
          project_id?: string | null
          "table seating"?: number | null
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