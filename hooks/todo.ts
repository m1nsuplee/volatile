import { addTodo, deleteTodo, fetchTodos, toggleTodoStatus } from '@/lib/todo';
import { Todo } from '@/types';
import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

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

export const useDeleteTodo = (todoId: number, options: UseMutationOptions) => {
  return useMutation({
    mutationKey: ['delete-todo', todoId],
    mutationFn: () => deleteTodo(todoId),
    ...options,
  });
};
