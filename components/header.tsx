import clsx from 'clsx';
import { TodoAddButton } from './todo-add-button';

interface HeaderProps {
  userId: string;
}

export function Header({ userId }: HeaderProps) {
  return (
    <header
      id="todo-heder"
      className={clsx('p-4 max-w-4xl w-full', 'flex justify-between items-end')}
    >
      <h1 className="text-2xl font-bold">To-Do</h1>
      <nav id="nav-items">
        <TodoAddButton userId={userId} />
      </nav>
    </header>
  );
}
