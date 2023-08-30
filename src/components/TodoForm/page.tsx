import React, { FormEvent, ChangeEvent } from 'react';

const TodoForm: React.FC<{
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAddTask: (e: FormEvent<HTMLFormElement>) => void;
  darkMode: boolean;
}> = ({ inputValue, setInputValue, handleAddTask, darkMode }) => {
  return (
    <form onSubmit={handleAddTask} className='flex mb-8 '>
      <input
        type='text'
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        placeholder='Add a task...'
        className={`flex-1 rounded-l border border-r-0 py-2 px-4 shadow-md border-transparent ${
          darkMode
            ? 'bg-input-dark text-primary-text-dark shadow-shadow-dark'
            : 'bg-input-light text-primary-text-light shadow-shadow-light'
        }`}
      />
      <button
        type='submit'
        className={`rounded-r py-2 px-4 shadow-md hover:opacity-50 text-primary-text-dark ${
          darkMode
            ? 'bg-primary-button-dark shadow-shadow-dark '
            : 'bg-primary-button-light shadow-shadow-light'
        }`}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
