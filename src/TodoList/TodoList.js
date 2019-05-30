import React from 'react';

import FilterRow from './components/FilterRow';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';

const TodoList = () => (
    <div>
        <AddTodo />
        <TodoItems />
        <FilterRow />
    </div>
);

export default TodoList;
