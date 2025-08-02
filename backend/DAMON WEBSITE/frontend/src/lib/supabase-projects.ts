import { supabase } from './supabase'
import type { Tables } from './supabase'

export type Project = Tables<'projects'>
export type File = Tables<'files'>
export type Payment = Tables<'payments'>

export class SupabaseProjectService {
  // Get all projects for a user
  static async getUserProjects(userId: string) {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        files (*),
        payments (*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  // Get a single project by ID
  static async getProjectById(projectId: string) {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        files (*),
        payments (*)
      `)
      .eq('id', projectId)
      .single()

    if (error) throw error
    return data
  }

  // Create a new project
  static async createProject(projectData: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('projects')
      .insert(projectData)
      .select()
      .single()

    if (error) throw error
    return data
  }

  // Update a project
  static async updateProject(projectId: string, updates: Partial<Project>) {
    const { data, error } = await supabase
      .from('projects')
      .update(updates)
      .eq('id', projectId)
      .select()
      .single()

    if (error) throw error
    return data
  }

  // Delete a project
  static async deleteProject(projectId: string) {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', projectId)

    if (error) throw error
  }

  // Upload file to project
  static async uploadFile(projectId: string, file: File, fileUrl: string) {
    const { data, error } = await supabase
      .from('files')
      .insert({
        project_id: projectId,
        filename: file.name,
        file_url: fileUrl,
        file_size: file.size,
        file_type: file.type
      })
      .select()
      .single()

    if (error) throw error
    return data
  }

  // Get project files
  static async getProjectFiles(projectId: string) {
    const { data, error } = await supabase
      .from('files')
      .select('*')
      .eq('project_id', projectId)
      .order('uploaded_at', { ascending: false })

    if (error) throw error
    return data
  }

  // Delete file
  static async deleteFile(fileId: string) {
    const { error } = await supabase
      .from('files')
      .delete()
      .eq('id', fileId)

    if (error) throw error
  }

  // Create payment record
  static async createPayment(paymentData: Omit<Payment, 'id' | 'payment_date'>) {
    const { data, error } = await supabase
      .from('payments')
      .insert(paymentData)
      .select()
      .single()

    if (error) throw error
    return data
  }

  // Get project payments
  static async getProjectPayments(projectId: string) {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('project_id', projectId)
      .order('payment_date', { ascending: false })

    if (error) throw error
    return data
  }

  // Update payment status
  static async updatePaymentStatus(paymentId: string, status: Payment['status']) {
    const { data, error } = await supabase
      .from('payments')
      .update({ status })
      .eq('id', paymentId)
      .select()
      .single()

    if (error) throw error
    return data
  }

  // Get project statistics
  static async getProjectStats(userId: string) {
    const { data, error } = await supabase
      .from('projects')
      .select('status, budget')
      .eq('user_id', userId)

    if (error) throw error

    const stats = {
      total: data.length,
      pending: data.filter(p => p.status === 'pending').length,
      inProgress: data.filter(p => p.status === 'in_progress').length,
      completed: data.filter(p => p.status === 'completed').length,
      cancelled: data.filter(p => p.status === 'cancelled').length,
      totalBudget: data.reduce((sum, p) => sum + (p.budget || 0), 0)
    }

    return stats
  }
} 