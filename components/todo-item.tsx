'use client';

import { useDeleteTodo, useToggleTodoStatus } from '@/hooks/todo';
import { Todo } from '@/types';
import { useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';

interface TodoProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoProps) {
  const queryClient = useQueryClient();

  const { mutate: toggleTodoStatus, isLoading: isToggleTodoStatusLoading } =
    useToggleTodoStatus(todo, {
      onSuccess: () => queryClient.refetchQueries(['todos']),
    });

  const { mutate: deleteTodo, isLoading: isDeleteTodoLoading } = useDeleteTodo(
    todo.id,
    {
      onSuccess: () => queryClient.refetchQueries(['todos']),
    }
  );

  const handleCompleteCheckboxChange = () => toggleTodoStatus();

  const handleDeleteButtonClick = () => deleteTodo();

  return (
    <article
      id={`todo-${todo.id}`}
      className={clsx('w-full flex justify-between gap-x-4')}
    >
      <span>{todo.id}</span>
      <span>{todo.task}</span>
      <input
        type="checkbox"
        checked={todo.is_complete || false}
        onChange={handleCompleteCheckboxChange}
        disabled={isToggleTodoStatusLoading}
      />
      <button
        type="button"
        className="text-red-500"
        onClick={handleDeleteButtonClick}
        disabled={isDeleteTodoLoading}
      >
        (X)
      </button>
    </article>
  );
}
