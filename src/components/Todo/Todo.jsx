import React, {useState, useContext} from 'react';
import {TodoContext} from '../Context';
import { GoPencil } from 'react-icons/go';
import { RiDeleteBin7Line } from "react-icons/ri";
import styles from './Todo.module.css';

export default function Todo({todo, key}) {
    const {remove, update, toggleCompleted} = useContext(TodoContext);

    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    function handleChange(event) {
        setTask(task => event.target.value);
    }

    function submit(event) {
        event.preventDefault();
        update(todo.id, task);
        setIsEditing(false);
    }

    const result = isEditing? <form onSubmit={submit} className={styles.formContainer}>
        <input className={styles.input} onChange={handleChange} id='edit' type='text' placeholder={todo.task} />
        <input className={styles.submit} type='submit' value='SAVE' />
    </form>
    :
    <li className={styles.list} key={key}>
        <div onClick={() => {toggleCompleted(todo.id)}} className={`${styles.todoTask} ${todo.completed? styles.todoTaskComp : ''}`}>
        {task}
        </div>
        <div className={styles.icons}>
            <button onClick={() => {setIsEditing(true)}}><GoPencil /></button>
            <button onClick={() => {remove(todo.id)}}><RiDeleteBin7Line /></button>
        </div>
    </li>;

    return result;
}