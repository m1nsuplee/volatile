'use client';

import { useFetchTodos } from '@/hooks/todo';
import { TodoItem } from './todo-item';

interface TodoListProps {
  userId: string;
}

export function TodoList({ userId }: TodoListProps) {
  const { data: todos } = useFetchTodos(userId);

  return (
    <ul
      id="to-do-list"
      className="max-w-md w-full"
    >
      {todos
        ? todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))
        : null}
    </ul>
  );
}
