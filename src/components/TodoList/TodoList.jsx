import React, {useState, useContext} from 'react';
import styles  from './TodoList.module.css';
import Todo from '../Todo/Todo';
import {TodoContext} from '../Context';

export default function TodoList() {
    const {todos} = useContext(TodoContext);

    const todosList = todos.map((todo) => {
        return <Todo 
        todo={todo}
        key={todo.id}
        />
    })

    return (
        <ul className={styles.container}>
            {todosList}
        </ul>
    )
}