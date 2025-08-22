'use client';
import { type ReactNode } from 'react';
import { useAuth } from '@/components/providers/auth-provider';

export function AuthProvider({ children }: { children: ReactNode }) {
  // legacy wrapper; the real provider is in components/providers/supabase-provider
  return <>{children}</>;
}

export { useAuth };
