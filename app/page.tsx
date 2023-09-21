import { Pathname } from '@/lib/constants';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { session } = await auth();

  if (!session) {
    redirect(Pathname.LOGIN_PAGE);
  }

  return (
    <main
      id="home-main"
      className="min-h-screen w-screen flex justify-center items-center"
    ></main>
  );
}
