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
      className={`flex items-center justify-between mb-2 mr-2 shadow-md rounded-md p-2 hover:opacity-50 ${
        todo.completed ? 'opacity-50' : ''
      } ${
        darkMode ? 'text-primary-text-dark bg-input-dark' : 'text-primary-text-light bg-input-light'
      }`}
    >
      <FormControlLabel
        control={
          <Checkbox
            checked={todo.completed}
            onChange={onToggle}
            className={`${todo.completed ? 'line-through ' : ''} ${
              darkMode ? 'text-primary-text-dark' : 'text-primary-text-light'
            }`}
          />
        }
        label={todo.text}
        className={`flex-1 ml-[-4px]  ${todo.completed ? 'line-through' : ''}`}
      />
      <Button onClick={onDelete} className={`bg-none p-1 justify-end`}>
        <DeleteIcon
          className={`${darkMode ? 'text-primary-text-dark' : 'text-primary-text-light'}`}
        />
      </Button>
    </li>
  );
};

export default TodoItem;
