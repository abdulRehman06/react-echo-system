import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from './actions';
const reducerTodo = (state = [], action) => {
    const { type, payload } = action;
    console.log(' type :', type)

    switch (type) {
        case REMOVE_TODO: {
            const { text } = payload;
            console.log('text :', text)
            return state.filter(value => value.text !== text)
        }
        case CREATE_TODO: {
            const { text } = payload;
            // console.log('text :' , text )
            state = state.concat({
                text,
                isCompleted: false,
            })
            return state;
        }
       
        case MARK_TODO_AS_COMPLETED: {
            const { text } = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isCompleted: true };
                }
                return todo;
            });
        }
        default:
            return state

    }


}

export default reducerTodo
