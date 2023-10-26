import { useEffect, useState } from 'react';

import { Todo } from "../Todo/Todo";
import { jsonPlaceHolderServise } from "../../../services/jsonPlaceHolderService";
import style from "./Todos.module.css"

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        jsonPlaceHolderServise.getAllTodos().then(({ data }) => setTodos(data));    
    },[])

    return (
        <div className={style.Todos}>
            {todos.map(todo=> <Todo key={todo.id} todo={todo} />)}
        </div>
    )
};

export { Todos };