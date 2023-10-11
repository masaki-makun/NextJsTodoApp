import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

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
  checkIconFlag: boolean;
}> = ({
  completedCount,
  handleDeleteCompletedTasks,
  handleToggleAllTasks,
  darkMode,
  deleteButtonIsDisabled,
  label,
  todos,
  checkIconFlag,
}) => {
  return (
    <div className='mb-6 flex flex-row items-center justify-between'>
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
        <div className='flex flex-row items-center gap-4'>
          <div className='flex flex-row items-center gap-4'>
            <button
              title='btn'
              className='shadow-shadow-light md:min-w-28 md:min-h-8 rounded-full bg-primary-button-light px-1 py-1 text-xs text-white  shadow-md hover:opacity-50 md:h-8 md:w-28 md:rounded md:px-2'
              onClick={handleToggleAllTasks}
            >
              {!checkIconFlag ? (
                <CheckCircleOutlineIcon className='block md:!hidden' />
              ) : (
                <CheckCircleIcon className='block md:!hidden' />
              )}
              <p className='hidden md:block'>{label}</p>
            </button>

            {!deleteButtonIsDisabled && (
              <button
                title='btn'
                onClick={handleDeleteCompletedTasks}
                className={`md:min-w-28 md:min-h-8 rounded-full bg-input-light bg-red-700 px-1 py-1 text-xs text-primary-text-dark  shadow-md md:h-8 md:w-28 md:rounded md:px-2 ${
                  darkMode ? 'hover:bg-red-800' : 'hover:bg-red-400'
                }`}
              >
                <DeleteIcon className='block md:!hidden' />
                <p className='hidden md:block'>Delete</p>
              </button>
            )}
            {deleteButtonIsDisabled && (
              <button
                title='btn'
                onClick={handleDeleteCompletedTasks}
                className={`md:min-w-28 md:min-h-8 appearance-none rounded-full bg-input-light px-1 py-1 text-xs text-primary-text-dark text-primary-text-light opacity-50 shadow-md md:h-8 md:w-28 md:rounded md:px-2 ${
                  darkMode
                    ? 'bg-input-dark text-primary-text-dark'
                    : 'bg-input-light text-primary-text-light'
                }`}
                disabled
              >
                <DeleteIcon className='block md:!hidden' />
                <p className='hidden md:block'>Delete</p>
              </button>
            )}
          </div>
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
            className={`block h-8 w-8 rounded-full p-2 text-center
            font-bold text-primary-text-dark ${
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
