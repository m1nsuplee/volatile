import { KakaoLoginButton } from '@/components/kakao-login-button';
import { Pathname } from '@/lib/constants';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { user } = await auth();

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
