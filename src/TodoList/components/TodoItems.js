import React from 'react';

import Todo from './Todo';
import { useTodos } from '../TodoListHooks';

const TodoItems = () => {
    const { todos, toggleTodo } = useTodos();
    return (
        <ul>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => toggleTodo(todo.id)}
                />
            ))}
        </ul>
    );
};
export default TodoItems;
