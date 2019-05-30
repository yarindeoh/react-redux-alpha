import { visibilityFilters } from './todoListConstants';

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};

export const visibilityFilter = (
    state = visibilityFilters.SHOW_ALL,
    action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};
