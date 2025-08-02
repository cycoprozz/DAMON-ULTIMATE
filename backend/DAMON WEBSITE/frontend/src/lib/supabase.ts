import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          company?: string
          phone?: string
          role: 'client' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          company?: string
          phone?: string
          role?: 'client' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          company?: string
          phone?: string
          role?: 'client' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          title: string
          type: 'reality_tv' | 'documentary' | 'music_video' | 'interview' | 'digital_content' | 'event_coverage'
          status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          budget?: number
          progress_percentage?: number
          description?: string
          requirements?: any
          delivery_date?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          type: 'reality_tv' | 'documentary' | 'music_video' | 'interview' | 'digital_content' | 'event_coverage'
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          budget?: number
          progress_percentage?: number
          description?: string
          requirements?: any
          delivery_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          type?: 'reality_tv' | 'documentary' | 'music_video' | 'interview' | 'digital_content' | 'event_coverage'
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          budget?: number
          progress_percentage?: number
          description?: string
          requirements?: any
          delivery_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      files: {
        Row: {
          id: string
          project_id: string
          filename: string
          file_url: string
          file_size?: number
          file_type?: string
          uploaded_at: string
        }
        Insert: {
          id?: string
          project_id: string
          filename: string
          file_url: string
          file_size?: number
          file_type?: string
          uploaded_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          filename?: string
          file_url?: string
          file_size?: number
          file_type?: string
          uploaded_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          project_id: string
          stripe_payment_id?: string
          amount: number
          status: 'pending' | 'completed' | 'failed'
          payment_date: string
        }
        Insert: {
          id?: string
          project_id: string
          stripe_payment_id?: string
          amount: number
          status?: 'pending' | 'completed' | 'failed'
          payment_date?: string
        }
        Update: {
          id?: string
          project_id?: string
          stripe_payment_id?: string
          amount?: number
          status?: 'pending' | 'completed' | 'failed'
          payment_date?: string
        }
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
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T] 