import React from 'react';
import TodoItem from '@/components/TodoList/TodoItem/page';

type Todo = {
  text: string;
  completed: boolean;
};

const TodoList: React.FC<{
  todos: Todo[];
  handleToggleTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
  darkMode: boolean;
}> = ({ todos, handleToggleTask, handleDeleteTask, darkMode }) => {
  return (
    <div className='relative h-auto w-full'>
      <ul className='max-h-96 w-full overflow-y-scroll'>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggle={() => handleToggleTask(index)}
            onDelete={() => handleDeleteTask(index)}
            darkMode={darkMode}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
