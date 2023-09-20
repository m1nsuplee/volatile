export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: never;
          name: string;
        };
        Update: {
          id?: never;
          name?: string;
        };
        Relationships: [];
      };
      task_categories: {
        Row: {
          category_id: number;
          task_id: number;
        };
        Insert: {
          category_id: number;
          task_id: number;
        };
        Update: {
          category_id?: number;
          task_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'task_categories_category_id_fkey';
            columns: ['category_id'];
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'task_categories_task_id_fkey';
            columns: ['task_id'];
            referencedRelation: 'tasks';
            referencedColumns: ['id'];
          },
        ];
      };
      tasks: {
        Row: {
          completed: boolean | null;
          description: string | null;
          due_date: string | null;
          id: number;
          title: string;
        };
        Insert: {
          completed?: boolean | null;
          description?: string | null;
          due_date?: string | null;
          id?: never;
          title: string;
        };
        Update: {
          completed?: boolean | null;
          description?: string | null;
          due_date?: string | null;
          id?: never;
          title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
