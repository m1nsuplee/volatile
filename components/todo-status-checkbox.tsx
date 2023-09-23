import { useToggleTodoStatus } from '@/hooks/todo';
import { Todo } from '@/types';
import { useQueryClient } from '@tanstack/react-query';

interface TodoStatusCheckboxProps {
  todo: Todo;
}

export function TodoStatusCheckbox({ todo }: TodoStatusCheckboxProps) {
  const queryClient = useQueryClient();

  const { mutate: toggleTodoStatus, isLoading: isToggleTodoStatusLoading } =
    useToggleTodoStatus(todo, {
      onSuccess: () => queryClient.refetchQueries(['todos']),
    });

  const handleCompleteCheckboxChange = () => toggleTodoStatus();

  return (
    <input
      type="checkbox"
      checked={todo.is_complete || false}
      onChange={handleCompleteCheckboxChange}
      disabled={isToggleTodoStatusLoading}
    />
  );
}
