'use server';

import { Database } from '@/types/db';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function auth() {
  const authService = createServerComponentClient<Database>(
    { cookies },
    {
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    }
  ).auth;

  const {
    data: { user },
  } = await authService.getUser();

  const {
    data: { session },
  } = await authService.getSession();

  return {
    user,
    session,
  };
}
