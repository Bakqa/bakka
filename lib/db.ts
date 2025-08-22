import { createClient } from '@/lib/supabase/server';

export async function getProfile() {
  const supabase = createClient();
  const { data, error } = await supabase.from('profiles').select('*').maybeSingle();
  if (error) throw error;
  return data;
}
