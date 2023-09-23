import { Pathname } from '@/lib/constants';
import { redirect } from 'next/navigation';
import clsx from 'clsx';
import { TodoAddButton } from '@/components/todo-add-button';
import { TodoList } from '@/components/todo-list';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/db';
import { cookies } from 'next/headers';
import { supabaseKey, supabaseUrl } from '@/lib/config';

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

  const {
    data: { session },
  } = await service.auth.getSession();

  if (!session) {
    redirect(Pathname.LOGIN_PAGE);
  }

  return (
    <main
      id="home-main"
      className={clsx('min-h-screen w-screen', 'flex flex-col items-center')}
    >
      <header
        id="todo-heder"
        className={clsx(
          'p-4 max-w-4xl w-full',
          'flex justify-between items-end'
        )}
      >
        <h1 className="text-2xl font-bold">To-Do</h1>
        <nav id="nav-items">
          <TodoAddButton session={session} />
        </nav>
      </header>
      <TodoList userId={session.user.id} />
    </main>
  );
}
