import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { removeAll } from './../actions/todos';
import getVisibleTodos from './../selectors/todos';


const Todos = (props) => (
    <div>
        <button className="btn btn-outline-danger btn-block mb-2" onClick={() => {
            props.dispatch(removeAll());
        }}>Remove All</button>
        <div className="list-group list-group-flush">
            {
                props.todos.map((todo) => {
                    return <Todo 
                        key={todo}
                        todo={todo}
                    />
                })
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.filters)
    }
};

export default connect(mapStateToProps)(Todos);