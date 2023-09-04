'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import NavigationHeader from '@/app/pages/components/NavigationHeader/page';
import TodoForm from '@/app/pages/components/TodoForm/page';
import TodoFilter from '@/app/pages/components/TodoFilter/page';
import TodoList from '@/app/pages/components/TodoList/page';

type Todo = {
  text: string;
  completed: boolean;
};

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const deleteButtonIsDisabled = !todos.some((todo) => todo.completed);
  const initialLabel = 'Check All';
  const [label, setLabel] = useState<string>(initialLabel);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'on' ? true : false
  );

  const handleDarkModeOn = () => {
    localStorage.setItem('darkMode', 'on');
    setDarkMode(true);
  };
  const handleDarkModeOff = () => {
    localStorage.setItem('darkMode', 'off');
    setDarkMode(false);
  };

  // BGのダークモード切り替え処理
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
    if (window.confirm('Delete checked tasks?')) {
      setTodos(todos.filter((_, i) => i != index));
    }
  };

  const handleDeleteCompletedTasks = () => {
    if (window.confirm('Delete all selected tasks?')) {
      setTodos(todos.filter((todo) => !todo.completed));
    }
  };

  const handleToggleAllTasks = () => {
    if (todos.every((todo) => todo.completed)) {
      setTodos(todos.map((todo) => ({ ...todo, completed: false })));
      setLabel(initialLabel);
    } else {
      setTodos(todos.map((todo) => ({ ...todo, completed: true })));
      setLabel('Uncheck All');
    }
  };

  const handleToggleTask = (index: number) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <div className='w-screen h-screen grid place-items-center overflow-hidden '>
        <div
          className={`max-w-lg min-w-[30rem] min-h-[43rem] max-h-[43rem] h-auto
        mx-auto px-8 py-12 text-white rounded-md shadow-md overflow-hidden relative ${
          darkMode ? 'bg-card-dark' : 'bg-white'
        }`}
        >
          <NavigationHeader darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} />
          <TodoForm
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleAddTask={handleAddTask}
            darkMode={darkMode}
          />

          <TodoFilter
            completedCount={completedCount}
            handleDeleteCompletedTasks={handleDeleteCompletedTasks}
            handleToggleAllTasks={handleToggleAllTasks}
            darkMode={darkMode}
            deleteButtonIsDisabled={deleteButtonIsDisabled}
            label={label}
            todos={todos}
          />
          <TodoList
            todos={todos}
            handleToggleTask={handleToggleTask}
            handleDeleteTask={handleDeleteTask}
            darkMode={darkMode}
          />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
