import { useDeleteTodo } from '@/hooks/todo';
import { useQueryClient } from '@tanstack/react-query';

interface TodoDeleteButtonProps {
  todoId: number;
}

export function TodoDeleteButton({ todoId }: TodoDeleteButtonProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteTodo, isLoading: isDeleteTodoLoading } = useDeleteTodo(
    todoId,
    {
      onSuccess: () => queryClient.refetchQueries(['todos']),
    }
  );

  const handleDeleteButtonClick = () => deleteTodo();

  return (
    <button
      type="button"
      className="text-red-500"
      onClick={handleDeleteButtonClick}
      disabled={isDeleteTodoLoading}
    >
      (X)
    </button>
  );
}
