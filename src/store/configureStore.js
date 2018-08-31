import { createStore, combineReducers } from 'redux';
import todosReducer from './../reducers/todos';
import filterReducer from './../reducers/filters';

const configureStore = () => {
    const store = createStore(combineReducers({
        todos: todosReducer,
        filters: filterReducer
    }));

    return store;
};

export default configureStore;