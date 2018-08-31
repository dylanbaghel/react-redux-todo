//Todos Reducer
const todosDefaultState = [];
const todosReducer = (state = todosDefaultState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo !== action.todo);
        case 'REMOVE_ALL':
            return [];
        case 'SET_TODOS':
            return action.todos
        default:
            return state;
    }
};

export default todosReducer;