import { createSelector } from 'reselect';
import { visibilityFilters } from './todoListConstants';

export const getVisibilityFilter = state => state && state.visibilityFilter;
export const getCurrentVisibilityFilter = createSelector(
    state => state && state.visibilityFilter,
    (_, filter) => filter,
    (visibilityFilter, filter) => visibilityFilter === filter
);
export const getAllTodos = state => state.todos;
export const getCompletedTodos = createSelector(
    getAllTodos,
    todos => todos.filter(t => t.completed)
);
export const getActiveTodos = createSelector(
    getAllTodos,
    todos => todos.filter(t => !t.completed)
);

export const getVisibleTodos = createSelector(
    getVisibilityFilter,
    getAllTodos,
    getActiveTodos,
    getCompletedTodos,
    (filter, all, active, completed) => {
        switch (filter) {
            case visibilityFilters.SHOW_ALL:
                return all;
            case visibilityFilters.SHOW_COMPLETED:
                return completed;
            case visibilityFilters.SHOW_ACTIVE:
                return active;
            default:
                throw new Error('Unknown filter: ' + filter);
        }
    }
);
