import React, {useState, useEffect} from 'react';
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoContextProvider from './components/Context';
import './App.css'

export default function App() {

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
        <span>A simple React Todo List App.</span>
      </header>

      <main>
        <TodoContextProvider>
          <TodoList />
          <TodoForm />
        </TodoContextProvider>
      </main>
    </div>
  );
}
