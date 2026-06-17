import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      feedback: {
        Row: {
          id: string;
          name: string;
          email: string | null;
          message: string;
          type: string;
          created_at: string;
        };
        Insert: {
          name: string;
          email?: string | null;
          message: string;
          type: string;
        };
      };
      quiz_scores: {
        Row: {
          id: string;
          name: string;
          score: number;
          total: number;
          created_at: string;
        };
        Insert: {
          name: string;
          score: number;
          total: number;
        };
      };
    };
  };
};
