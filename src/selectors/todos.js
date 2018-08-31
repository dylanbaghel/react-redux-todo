//TODOS SELECTORS
const getVisibleTodos = (todos, { text }) => {
    return todos.filter((todo) => {
        const textMatch = todo.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    })
};

export default getVisibleTodos;