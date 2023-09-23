import { addTodo, fetchTodos, toggleTodoStatus } from '@/lib/todo';
import { Database } from '@/types/db';
import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

type Todo = Database['public']['Tables']['todos']['Row'];

export const useFetchTodos = (userId: string) => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(userId),
  });
};

export const useAddTodo = (userId: string, options?: UseMutationOptions) => {
  return useMutation({
    mutationKey: ['add-todo'],
    mutationFn: () => addTodo(userId),
    ...options,
  });
};

export const useToggleTodoStatus = (
  todo: Todo,
  options: UseMutationOptions
) => {
  return useMutation({
    mutationKey: ['toggle-todo-status'],
    mutationFn: () => toggleTodoStatus(todo),
    ...options,
  });
};
