import React, { FormEvent, ChangeEvent } from 'react';

const TodoForm: React.FC<{
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAddTask: (e: FormEvent<HTMLFormElement>) => void;
  darkMode: boolean;
}> = ({ inputValue, setInputValue, handleAddTask, darkMode }) => {
  return (
    <form onSubmit={handleAddTask} className='mb-8 flex '>
      <input
        type='text'
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        placeholder='Add a task...'
        className={`flex-1 rounded-l border border-r-0
        border-transparent px-4 py-2 shadow-md ${
          darkMode
            ? 'shadow-shadow-dark bg-input-dark text-primary-text-dark'
            : 'shadow-shadow-light bg-input-light text-primary-text-light'
        }`}
      />
      <button
        type='submit'
        className={`rounded-r px-4 py-2 text-primary-text-dark
        shadow-md hover:opacity-50 ${
          darkMode
            ? 'shadow-shadow-dark bg-primary-button-dark '
            : 'shadow-shadow-light bg-primary-button-light'
        }`}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
