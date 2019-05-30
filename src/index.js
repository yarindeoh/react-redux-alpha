import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from 'services/rootReducer';
import TodoList from './TodoList/TodoList';

const middleware = [];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('root')
);
