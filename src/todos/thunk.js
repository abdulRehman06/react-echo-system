import { loadTodoSuccess, loadTodoFailure, loadTodoInProgress } from './actions'


export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodoInProgress)
        let todos =await  fetch('http://localhost:8080/todos-delay');
         todos = await todos.json();
        console.log('resver res  todos :' , todos)
        dispatch(loadTodoSuccess(todos));
    }
    catch(e){
        dispatch(loadTodoFailure) ;
        dispatch(displayAlert(e))
    }

}


export const displayAlert = text => () => {
    alert(text);
};