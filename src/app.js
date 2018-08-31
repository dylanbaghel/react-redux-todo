import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store = configureStore();
let jsx = (
    <Provider store={store}>
        <TodoApp />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));