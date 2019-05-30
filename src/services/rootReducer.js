// import movieListReducer from '../MovieList/movieListReducer';
//
// export default combineReducers({
//     movieList: movieListReducer
// });

import { combineReducers } from 'redux';
import { todos, visibilityFilter } from '../TodoList/todoListReducer';

export default combineReducers({
    todos,
    visibilityFilter
});
