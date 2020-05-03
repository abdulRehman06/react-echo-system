import { CREATE_TODO, REMOVE_TODO } from './actions';
const reducerTodo = ( state = [{text : 'abcd'}] , action ) => {
    const { type ,  payload  }  = action ;
    console.log('reducerTodo call ' , ' type :' , type )
    
    switch (type){
        case REMOVE_TODO : {
            const {text}  =  payload  ;
            console.log('text :' , text )
            state =  state.filter( value =>   value.text != text )
            break;
        }
        case CREATE_TODO : {
            const {text}  =  payload  ;
            console.log('text :' , text )
            state =  state.concat({text})
            break;
        }
        default :
            return  state

    }

    return state
}

export default reducerTodo
