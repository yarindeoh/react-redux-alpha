import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { setVisibilityFilter, addTodo, toggleTodo } from './todoListConstants';
import {
    getCurrentVisibilityFilter,
    getVisibleTodos
} from './todoListSelectors';

export const useFilter = filter => {
    const dispatch = useDispatch();
    const onClick = useCallback(
        filter => {
            dispatch(setVisibilityFilter(filter));
        },
        [dispatch]
    );
    const visibilityFilter = useSelector(
        state => getCurrentVisibilityFilter(state, filter),
        shallowEqual
    );

    const currentVisibilityFilter = useMemo(() => visibilityFilter, [[filter]]);
    return {
        visibilityFilter: currentVisibilityFilter,
        onClick
    };
};

export const useTodo = () => {
    const dispatch = useDispatch();
    const addTodoItem = useCallback(
        todo => {
            dispatch(addTodo(todo));
        },
        [dispatch]
    );

    return {
        addTodo: addTodoItem
    };
};

export const useTodos = () => {
    const dispatch = useDispatch();
    const toggleTodoItem = useCallback(
        id => {
            dispatch(toggleTodo(id));
        },
        [dispatch]
    );
    const todos = useSelector(getVisibleTodos, shallowEqual);
    return {
        toggleTodo: toggleTodoItem,
        todos
    };
};
