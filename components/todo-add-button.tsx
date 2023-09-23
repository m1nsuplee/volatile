'use client';

import { useAddTodo } from '@/hooks/todo';
import { Session } from '@supabase/auth-helpers-nextjs';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';

interface ToDoAddButtonProps {
  session: Session;
}

export function TodoAddButton({ session }: ToDoAddButtonProps) {
  const queryClient = useQueryClient();

  const { id: userId } = session.user;

  const { mutate: addTodo } = useAddTodo(userId, {
    onSuccess: () => queryClient.refetchQueries(['todos']),
    onError: (error) => {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw error;
    },
  });

  const handleToDoAddButtonClick = () => addTodo();

  return (
    <button
      id="todo-add-button"
      type="button"
      role="menu"
      className={clsx(
        'w-fit h-10 rounded px-4',
        'bg-green-500 text-sm font-light'
      )}
      onClick={handleToDoAddButtonClick}
    >
      New To-Do
    </button>
  );
}
