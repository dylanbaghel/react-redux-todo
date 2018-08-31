import React from 'react';
import Header from './Header';
import Todos from './Todos';
import AddOption from './AddOption';
import Action from './Action';
import Search from './Search';
import { connect } from 'react-redux';
import { setTodos } from './../actions/todos';

class TodoApp extends React.Component {

    componentDidMount() {
        let todos = JSON.parse(localStorage.getItem('todos'));
        this.props.dispatch(setTodos(todos));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.todos.length !== this.props.todos.length) {
            let todosString = JSON.stringify(this.props.todos);
            localStorage.setItem('todos', todosString);
        }
    }



    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="card card-body">
                                <Search />
                                <Action />
                                <Todos />
                                <AddOption />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps)(TodoApp);