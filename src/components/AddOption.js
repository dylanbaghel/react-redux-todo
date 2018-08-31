import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions/todos';
 
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddTodo(e) {
        e.preventDefault();
        let newTodo = e.target.newTodo.value.trim().toLowerCase();
        if (!newTodo) {
            this.setState(() => ({
                error: 'Please Enter A Todo'
            }));
        }else if (this.props.todos.indexOf(newTodo) > -1) {
            this.setState(() => ({
                error: 'Duplicate Todo Not Allowed'
            }))
        } else {
            this.setState(() => ({
                error: undefined
            }));
            this.props.dispatch(addTodo({ todo: newTodo }));
            e.target.newTodo.value = '';
        }
    }

    render(){
        return (
            <form onSubmit={this.handleAddTodo}>
            {
                this.state.error && <p className="text-muted text-center lead">{this.state.error}</p>
            }
            <div className="form-group d-flex add-todo-form">
                <input type="text" name="newTodo" className="form-control add-option__input" autoComplete="off"/>
                <span className="mx-2"></span>
                <button type="submit" value="Submit" className="btn btn-outline-success add-option__btn">Add Todo</button>
            </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps)(AddOption);