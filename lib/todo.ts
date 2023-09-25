import { Database, Todo } from '@/types';
import { supabaseKey, supabaseUrl } from './config';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const service = createClientComponentClient<Database>({
  supabaseKey,
  supabaseUrl,
});

export const fetchTodos = async (userId: string) => {
  const { data: todos } = await service
    .from('todos')
    .select('*', { count: 'exact' })
    .eq('user_id', userId)
    .order('id', { ascending: false });

  return todos;
};

export const addTodo = async (userId: string) => {
  return await service.from('todos').insert({
    task: 'new to-do-test',
    user_id: userId,
  });
};

export const toggleTodoStatus = async (todo: Todo) => {
  return await service
    .from('todos')
    .update({
      ...todo,
      is_complete: !todo.is_complete,
    })
    .eq('id', todo.id);
};

export const deleteTodo = async (todoId: number) => {
  return await service.from('todos').delete().eq('id', todoId).throwOnError();
};
