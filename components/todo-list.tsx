'use client';

import { useFetchTodos } from '@/hooks/todo';
import { Todo } from './todo';

interface TodoListProps {
  userId: string;
}

export function TodoList({ userId }: TodoListProps) {
  const { data: todos } = useFetchTodos(userId);

  return (
    <ul id="to-do-list">
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}
