import {
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';




export const isLoading = (state = false, action) => {
    const { type } = action;
    console.log('reducer isLoading call type --------------:', type)
    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}

export const reducerTodo = (state = [], action) => {
    const { type, payload } = action;
    console.log('reducer reducerTodo call type :', type)

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
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            console.log('todos : ', todos)
            return [...state, ...todos];
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default:
            return state

    }


}

