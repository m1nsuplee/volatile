import { Pathname } from '@/lib/constants';
import { redirect } from 'next/navigation';
import clsx from 'clsx';
import { TodoAddButton } from '@/components/todo-add-button';
import { TodoList } from '@/components/todo-list';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { supabaseKey, supabaseUrl } from '@/lib/config';
import { Database } from '@/types';
import { getQueryClient } from '@/lib/get-query-client';
import { Hydrate, dehydrate } from '@tanstack/react-query';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const queryClient = getQueryClient();

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

  const fetchTodos = async () => {
    const { data } = await service
      .from('todos')
      .select('*')
      .eq('user_id', session?.user.id || '')
      .order('id', { ascending: false });

    return data;
  };

  await queryClient.prefetchQuery(['todos'], fetchTodos);

  const dehydratedState = dehydrate(queryClient);

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
      <Hydrate state={dehydratedState}>
        <TodoList userId={session.user.id} />
      </Hydrate>
    </main>
  );
}
