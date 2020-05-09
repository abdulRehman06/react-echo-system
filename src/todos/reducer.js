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
            const { todo } = payload;
            console.log('todo :', todo)
            return state.filter(value => value.id !== todo.id)
        }
        case CREATE_TODO: {
            const { todo } = payload;
            // console.log('payloads :' , payloads )
            // console.log('todo :' , todo )
            state = state.concat(todo)
            return state;
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo  } = payload;
            return state.map(item => {
                if (item.id === todo.id) {
                    return todo;
                }
                return item;
            });
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            // console.log('todos : ', todos)
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default:
            return state

    }


}

