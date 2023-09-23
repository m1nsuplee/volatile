import { KakaoLoginButton } from '@/components/kakao-login-button';
import { supabaseKey, supabaseUrl } from '@/lib/config';
import { Pathname } from '@/lib/constants';
import { Database } from '@/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const service = createServerComponentClient<Database>(
    {
      cookies,
    },
    {
      supabaseKey,
      supabaseUrl,
    }
  );

  const { data: user } = await service.auth.getUser();

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
