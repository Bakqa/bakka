'use client';

import { type ReactNode } from 'react';
import { useSupabase } from './supabase-provider';

export function AuthProvider({ children }: { children: ReactNode }) {
  // Backwards-compatible shim so existing usage continues to work.
  return <>{children}</>;
}

// Optional helpers
export function useAuth() {
  const { user, supabase, isLoading } = useSupabase();
  async function login(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }
  async function signup(email: string, password: string) {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  }
  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }
  return { user, login, signup, logout, isLoading };
}
