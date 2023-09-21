import { KakaoLoginButton } from '@/components/kakao-login-button';
import { Pathname } from '@/lib/constants';
import { Database } from '@/types/db';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
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

  if (user) {
    redirect(Pathname.HOME_PAGE);
  }

  return (
    <main
      id="login-main"
      className="min-h-screen w-screen flex justify-center items-center"
    >
      <section>
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-center tracking-tighter">
            로그인
          </h1>
        </header>
        <KakaoLoginButton />
      </section>
    </main>
  );
}
