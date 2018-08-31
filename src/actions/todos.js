//TODOS ACTIONS
const addTodo = ({ todo } = {}) => {
    return {
        type: 'ADD_TODO',
        todo
    }
};

const removeTodo = ({ todo } = {}) => {
    return {
        type: 'REMOVE_TODO',
        todo
    }
};

const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    }
};

const setTodos = (todos) => {
    return {
        type: 'SET_TODOS',
        todos
    }
};

export {
    addTodo,
    removeTodo,
    removeAll,
    setTodos
}