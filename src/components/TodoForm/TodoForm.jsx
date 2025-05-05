import React, {useState, useContext} from 'react';
import {TodoContext} from '../Context';
import {v4 as uuidv4} from 'uuid';
import styles from './TodoForm.module.css';

export default function TodoForm() {
  const {create} = useContext(TodoContext);

  const [todo, setTodo] = useState({});

  const handleChange = (event) => {
    setTodo((todo) => {
      return {task: event.target.value}});
  }

  const submit = (event) => {
    event.preventDefault();
    const todoNew = {
      id: uuidv4(),
      task: todo.task,
      completed: false
    }

    create(todoNew);
  }

    return (
      <div className={styles.formContainer}>
        <form onSubmit={submit}>
          <label htmlFor="addTodo">New todo</label>
          <input className={styles.input} id="addTodo" type="input" placeholder="New Todo" onChange={handleChange}/>
          <input className={styles.submit} type="submit" value="ADD TODO" />
        </form>
      </div>
    );
  }
  