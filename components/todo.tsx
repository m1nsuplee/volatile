'use client';

import { useToggleTodoStatus } from '@/hooks/todo';
import { Database } from '@/types/db';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';

type Todo = Database['public']['Tables']['todos']['Row'];

interface TodoProps {
  todo: Todo;
}

export function Todo({ todo }: TodoProps) {
  const queryClient = useQueryClient();

  const { mutate: toggleTodoStatus } = useToggleTodoStatus(todo, {
    onSuccess: () => queryClient.refetchQueries(['todos']),
  });

  const handleCompleteCheckboxChange = () => toggleTodoStatus();

  return (
    <article
      id={`todo-${todo.id}`}
      role="article"
    >
      <header className={clsx('w-full flex justify-between gap-x-4')}>
        <span>{todo.id}</span>
        <span>{todo.task}</span>
        <input
          type="checkbox"
          checked={todo.is_complete || false}
          onChange={handleCompleteCheckboxChange}
        />
      </header>
    </article>
  );
}
