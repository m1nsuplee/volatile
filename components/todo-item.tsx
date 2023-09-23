'use client';

import { Todo } from '@/types';
import clsx from 'clsx';
import { TodoStatusCheckbox } from './todo-status-checkbox';
import { TodoDeleteButton } from './todo-delete-button';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <article
      id={`todo-${todo.id}`}
      className={clsx('w-full flex justify-between gap-x-4')}
    >
      <span>{todo.id}</span>
      <span>{todo.task}</span>
      <TodoStatusCheckbox todo={todo} />
      <TodoDeleteButton todoId={todo.id} />
    </article>
  );
}
