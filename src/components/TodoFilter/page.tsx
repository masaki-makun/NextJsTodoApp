import React from 'react';

type Todo = {
  text: string;
  completed: boolean;
};

const TodoFilter: React.FC<{
  completedCount: number;
  handleDeleteCompletedTasks: () => void;
  handleToggleAllTasks: () => void;
  darkMode: boolean;
  deleteButtonIsDisabled: boolean;
  label: string;
  todos: Todo[];
}> = ({
  completedCount,
  handleDeleteCompletedTasks,
  handleToggleAllTasks,
  darkMode,
  deleteButtonIsDisabled,
  label,
  todos,
}) => {
  return (
    <div className='flex flex-row justify-between items-center mb-6'>
      {todos.length === 0 && (
        <div>
          <p
            className={`text-xs ${darkMode ? 'text-primary-text-dark' : 'text-primary-text-light'}`}
          >
            No tasks
          </p>
        </div>
      )}

      {todos.length > 0 && (
        <div className='flex flex-row gap-4 items-center'>
          <button
            onClick={handleToggleAllTasks}
            className={`text-white text-xs py-1 px-2 rounded
            hover:opacity-50 shadow-md min-w-28 w-28 h-8 min-h-8 ${
              darkMode
                ? 'bg-primary-button-dark shadow-shadow-dark '
                : 'bg-primary-button-light shadow-shadow-light'
            } `}
          >
            {label}
          </button>
          {!deleteButtonIsDisabled && (
            <button
              onClick={handleDeleteCompletedTasks}
              className={`bg-red-700 text-primary-text-dark text-xs
              py-1 px-2 rounded shadow-md min-w-28 w-28  h-8 min-h-8 ${
                darkMode ? 'hover:bg-red-800' : 'hover:bg-red-400'
              }`}
            >
              Delete
            </button>
          )}
          {deleteButtonIsDisabled && (
            <button
              onClick={handleDeleteCompletedTasks}
              className={`text-xs py-1 px-2 rounded
              shadow-md min-w-28 w-28  h-8 min-h-8 bg-input-dark opacity-50 ${
                darkMode
                  ? 'text-primary-text-dark bg-input-dark'
                  : 'text-primary-text-light bg-input-light'
              }`}
              disabled
            >
              Delete
            </button>
          )}
        </div>
      )}
      <div className='flex items-center justify-center'>
        <p
          className={`flex items-center justify-center gap-2 text-xs ${
            darkMode ? 'text-primary-text-dark' : 'text-primary-text-light'
          }`}
        >
          Checks Task:{' '}
          <span
            className={`block rounded-full p-2 w-8 h-8 text-center text-primary-text-dark font-bold ${
              darkMode ? 'bg-primary-button-dark' : 'bg-primary-button-light'
            }`}
          >
            {completedCount}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TodoFilter;
