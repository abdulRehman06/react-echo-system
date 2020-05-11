import {
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: [] }


export const reducerTodo = (state = initialState, action) => {
    const { type, payload } = action;
    console.log('reducer reducerTodo call type :', type)

    switch (type) {
        case REMOVE_TODO: {
            const { todo } = payload;
            console.log(' remove todo :', todo)
            return{
                ...state, 
                data : state.data.filter(value => value.id !== todo.id)
            } 
        }
        case CREATE_TODO: {
            const { todo } = payload;
            // console.log('payloads :' , payloads )
            console.log('create todo :' , todo )
            return {
                ...state,
                data: state.data.concat(todo)
            };
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo } = payload;
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === todo.id) {
                        return todo;
                    }
                    return item;
                })
            }
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            // console.log('todos : ', todos)
            return {
                ...state,
                data : todos,
                isLoading : false 
            };
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default:
            return {
                ...state ,
                isLoading : true 
            }

    }


}

