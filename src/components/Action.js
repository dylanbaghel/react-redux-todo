import React from 'react';
import { generateRandomInt } from './../utils/utils';
import { connect } from 'react-redux';
 
const Action = (props) => {
    return(
        <div>
            <button className="btn btn-block btn-outline-success mb-2" onClick={() => {

                if (props.todos.length) {
                    alert(`You Should First Do: ${props.todos[generateRandomInt(props.todos.length)]}`)
                }
            }}>What Should I Do First?</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(Action);