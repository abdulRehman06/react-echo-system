import { CREATE_TODO, REMOVE_TODO, COMPLEDED_TODO } from './actions';
const reducerTodo = (state = [], action) => {
    const { type, payload } = action;
    console.log('reducerTodo call ', ' type :', type)

    switch (type) {
        case REMOVE_TODO: {
            const { text } = payload;
            console.log('text :', text)
            state = state.filter(value => value.text !== text)
            break;
        }
        case CREATE_TODO: {
            const { text } = payload;
            // console.log('text :' , text )
            state = state.concat({
                text,
                isCompleted: false,
            })
            break;
        }
        case COMPLEDED_TODO: {
            const { text } = payload;
            console.log('text :', text)
            state = state.map(value => {
                if (value.text === text) {
                   return {...value , isCompleted  : true }
                }
            })
            break;
        }
        default:
            return state

    }

    return state
}

export default reducerTodo
