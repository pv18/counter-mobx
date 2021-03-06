import React from 'react';
import {observer} from "mobx-react-lite";
import todo from "./store/todo";

export const Todo = observer(() => {
    return (
        <div>
            {todo.todos.map(item =>
                <div className={'todo'} key={item.id}>
                    <input type="checkbox" checked={item.completed} onChange={() => todo.completedTodo(item.id)}/>
                    {item.title}
                    <button onClick={() => todo.removeTodo(item.id)}>X</button>
                </div>)}
        </div>
    );
});

