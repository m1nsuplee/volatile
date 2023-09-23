import { Database, Todo } from '@/types';
import { supabaseKey, supabaseUrl } from './config';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const service = createClientComponentClient<Database>({
  supabaseKey,
  supabaseUrl,
});

export async function fetchTodos(userId: string) {
  const { data: todos } = await service
    .from('todos')
    .select('*', { count: 'exact' })
    .eq('user_id', userId)
    .order('id', { ascending: false });

  return todos;
}

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
