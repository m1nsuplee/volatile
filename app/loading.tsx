import { Header } from '@/components/header';
import clsx from 'clsx';

export default function Loading() {
  return (
    <main
      id="loading"
      className={clsx('min-h-screen w-screen', 'flex flex-col items-center')}
    >
      <Header userId="" />
      <ul id="to-do-list">
        <TodoItemSkeleton />
        <TodoItemSkeleton />
        <TodoItemSkeleton />
        <TodoItemSkeleton />
        <TodoItemSkeleton />
      </ul>
    </main>
  );
}

function TodoItemSkeleton() {
  return (
    <article className="w-full h-6 flex justify-between gap-x-4">
      <div className="w-5 h-full bg-gray-500 animate-pulse rounded-md" />
      <div className="w-32 h-full bg-gray-500 animate-pulse rounded-md" />
      <input type="checkbox" />
      <button
        type="button"
        className="text-red-500"
      >
        (x)
      </button>
    </article>
  );
}
