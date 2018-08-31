import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from './../actions/todos';

const Todo = (props) => (
    <div className="list-group-item mb-2 d-flex justify-content-between todo-item">
        <p className="text-capitalize mr-5">{props.todo}</p>
        <button className="btn btn-danger" onClick={() => {
            props.dispatch(removeTodo({ todo: props.todo }));
        }}>Remove</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps)(Todo);