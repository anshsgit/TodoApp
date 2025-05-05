import {createContext, useState} from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    function create(todo) {
    setTodos(todos => [...todos, todo]);
    }

    function remove(id) {
    setTodos((todos) => {
        return todos.filter((todo) => {
        return todo.id !== id;
        })
    })
    }

    function update(id, updatedTask) {
    const updatedTodos = todos.map((todo) => {
        if(todo.id === id) {
        return {...todo, task: updatedTask};

        } else {
            return todo;
        }
    })

    setTodos(todos => updatedTodos);
    }

    function toggleCompleted(id) {
    const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
        const tempComplete = todo.completed;
        return {...todo, completed: !tempComplete};

        } else {
            return todo;
        }
    })

    setTodos(todos => updatedTodos);
    }

    return (
    <TodoContext.Provider value={{todos, setTodos, create, remove, update, toggleCompleted}} >
        {children}
    </TodoContext.Provider>
    )
}

export default TodoContextProvider;