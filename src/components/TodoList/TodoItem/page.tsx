import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

type Todo = {
  text: string;
  completed: boolean;
};

const TodoItem: React.FC<{
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
  darkMode: boolean;
}> = ({ todo, onToggle, onDelete, darkMode }) => {
  return (
    <li
      className={`mb-2 mr-2 flex
      items-center justify-between rounded-md p-2 shadow-md hover:opacity-50 ${
        todo.completed ? 'opacity-50' : ''
      } ${
        darkMode ? 'bg-input-dark text-primary-text-dark' : 'bg-input-light text-primary-text-light'
      }`}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={todo.completed}
            onChange={onToggle}
            sx={{ color: darkMode ? '#ffffff' : '#1f2937' }}
            className={`${darkMode ? 'text-primary-text-dark' : 'text-primary-text-light'}`}
          />
        }
        label={todo.text}
        className={`ml-1 flex-1  ${todo.completed ? 'line-through' : ''} ${
          darkMode ? 'text-primary-text-dark' : 'text-primary-text-light'
        }`}
      />
      <Button onClick={onDelete} className='justify-end bg-none p-1'>
        <DeleteIcon
          className={`${darkMode ? 'text-primary-text-dark' : 'text-primary-text-light'}`}
        />
      </Button>
    </li>
  );
};

export default TodoItem;
