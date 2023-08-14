'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Router, { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SignIn from '@/app/pages/components/SignIn/page';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#302f32',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#5985ff' : '#3872ff',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#eaecef',
    borderRadius: 20 / 2,
  },
}));

type Todo = {
  text: string;
  completed: boolean;
};

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark');
    } else {
      document.body.classList.remove('bg-dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index: number) => {
    if (window.confirm('削除しますか？')) {
      setTodos(todos.filter((_, i) => i !== index));
    }
  };

  const handleDeleteCompletedTasks = () => {
    if (window.confirm('完了したタスクをすべて削除しますか？')) {
      setTodos(todos.filter((todo) => !todo.completed));
    }
  };

  const handleAllCompletedTasks = () => {
    setTodos(todos.filter((todo) => (todo.completed = true)));
  };

  const handleAllNotCompletedTasks = () => {
    setTodos(todos.filter((todo) => (todo.completed = false)));
    console.log('handleAllNotCompletedTasks');
  };

  const handleToggleTask = (index: number) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const HandleToggleAllTasks = () => {
    const initialLabel = 'Check All';
    const [label, setLabel] = useState<string>(initialLabel);
    const handleToggleTasks = () => {
      if (todos.every((todo) => todo.completed)) {
        setTodos(todos.map((todo) => ({ ...todo, completed: false })));
      } else {
        setTodos(todos.map((todo) => ({ ...todo, completed: true })));
      }
    };

    useEffect(() => {
      if (todos.every((todo) => todo.completed)) {
        setLabel('Uncheck All');
      } else {
        setLabel(initialLabel);
      }
    }, [todos]);
    return (
      <>
        <button
          onClick={handleToggleTasks}
          className={`text-white text-xs py-1 px-2 rounded mb-4 transition hover:opacity-50 shadow-md ${
            darkMode
              ? 'bg-primary-button-dark shadow-shadow-dark '
              : 'bg-primary-button-light shadow-shadow-light'
          } `}
        >
          {label}
        </button>
      </>
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  const AllClearButton = () => {
    const completedLength = todos.filter((todo) => todo.completed).length;
    if (completedLength === 0 || completedLength < todos.length) {
      return (
        <>
          <Button
            onClick={handleAllCompletedTasks}
            className={`text-white text-xs py-1 px-2 rounded mb-4 transition hover:opacity-50 ${
              darkMode
                ? 'bg-primary-button-dark shadow-shadow-dark '
                : 'bg-primary-button-light shadow-shadow-light'
            } `}
          >
            Check All
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button
            className={`bg-input-light text-primary-text-light py-1 px-2 rounded mb-4 transition `}
            onClick={handleAllNotCompletedTasks}
          >
            Uncheck All
          </Button>
        </>
      );
    }
  };

  return (
    <div className='w-screen h-screen grid place-items-center overflow-hidden '>
      <div
        className={`max-w-lg min-w-[30rem] max-h-[80%] min-h-[50%] mx-auto px-8 py-12 text-white rounded-md shadow-md overflow-hidden ${
          darkMode ? 'bg-card-dark' : 'bg-white'
        }`}
      >
        <div className='flex justify-between items-center mb-4'>
          <h1
            className={`text-2xl font-bold ${
              darkMode ? 'text-primary-text-dark' : 'text-primary-text-light'
            }`}
          >
            Todo App
          </h1>
          {/* <IconButton
            onClick={() => setMenuOpen(true)}
            className={`${darkMode ? 'text-white' : 'text-black'}`}
          >
            <MenuIcon />
          </IconButton> */}
          <FormControlLabel
                control={
                  <MaterialUISwitch
                    color='secondary'
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    sx={{ m: 1 }}
                    defaultChecked
                  />
                }
                className={`m-0 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}
                label=''
              />
        </div>

        <form onSubmit={handleAddTask} className='flex mb-6 '>
          <input
            type='text'
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            placeholder='Add a task...'
            className={`flex-1 rounded-l border border-r-0 py-2 px-4 shadow-md ${
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

        {todos.length === 0 ? (
          <p className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>No Tasks</p>
        ) : (
          <>
            <HandleToggleAllTasks />
            {completedCount > 0 && (
              <>
                <p
                  className={`mb-2 text-sm transition ${darkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  Checks Task: {completedCount}
                </p>

                <button
                  onClick={handleDeleteCompletedTasks}
                  className={`bg-red-500 text-white text-xs py-1 px-2 rounded mb-4 transition shadow-md ${
                    darkMode ? 'hover:bg-red-600' : 'hover:bg-red-400'
                  }`}
                >
                  Delete
                </button>
              </>
            )}
            <ul
              className={`transition overflow-y-scroll max-h-96 ${
                darkMode ? 'scrollbar-dark' : 'scrollbar-light'
              }`}
            >
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className={`flex items-center mb-2 mr-2 shadow-md rounded-md p-2 transition hover:opacity-50 ${
                    darkMode
                      ? 'bg-input-dark text-primary-text-dark'
                      : 'bg-input-light text-primary-text-light'
                  } ${todo.completed ? 'opacity-50' : ''}`}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={todo.completed}
                        onChange={() => handleToggleTask(index)}
                        className={`${
                          darkMode ? 'text-primary-text-dark' : 'text-primary-text-light'
                        }`}
                      />
                    }
                    label={todo.text}
                    className={`flex-1 ${todo.completed ? 'line-through' : ''}`}
                  />
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className={`bg-none p-1 ${
                      darkMode
                        ? 'hover:text-gray-600 text-primary-text-dark'
                        : 'hover:text-gray-400 text-primary-text-light'
                    }`}
                  >
                    <DeleteIcon />
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* <Drawer
          anchor='right'
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          className='rounded-md max-h-[80%] min-h-[50%] h-min top-[25%]'
        >
          <Box
            sx={{
              width: '50vw',
              height: '100%',
              bgcolor: darkMode ? 'grey' : 'white',
              color: darkMode ? 'white' : 'black',
              p: 2,
            }}
            align='center'
          >
            <div className='flex flex-col gap-2 items-center'>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Avatar />
              </Box>
              <h2 className='text-xl font-bold mb-4'>UserName</h2>
              <h3 className='text-lg font-bold mb-4'>Settings</h3>
              <form className='flex mb-6 '>
                <Link
                  className={`text-white shadow-md inline-block text-center w-full rounded-md px-4 py-2 hover:bg-blue-800 transition ${
                    darkMode
                      ? 'bg-primary-button-dark shadow-shadow-dark '
                      : 'bg-primary-button-light shadow-shadow-light'
                  }`}
                  href='pages/components/SignIn'
                >
                  Sign In
                </Link>
              </form>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    color='secondary'
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    sx={{ m: 1 }}
                    defaultChecked
                  />
                }
                className={`m-0 transition bottom-4 fixed ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}
                label='Switch to dark mode'
              />
            </div>
          </Box>
        </Drawer> */}
      </div>
    </div>
  );
};

export default TodoApp;
