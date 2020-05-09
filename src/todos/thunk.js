import {
    loadTodoSuccess,
    loadTodosFailure,
    loadTodosInProgress,
    ucCreateTodo,
    ucRemoveTodo,
    markTodoAsCompleted
} from './actions'


export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress)
        let response = await fetch('http://localhost:8080/todos');
        let todos = await response.json();
        console.log('resver res  todos :', todos)
        dispatch(loadTodoSuccess(todos));
    }
    catch (e) {
        dispatch(loadTodosFailure);
        dispatch(displayAlert(e))
    }

}

export const addTodoRequest = (text) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8080/todos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        })
        const todo = await response.json();
        console.log('response :', todo)
        dispatch(ucCreateTodo(todo));

    }
    catch (e) {
        dispatch(displayAlert(e))
    }

}


export const removeTodRequest = (todo) => async (dispatch) => {
    const { id } = todo
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`,
            {
                headers: { 'Content-Type': 'application/json' },
                method: 'DELETE'
            }
        )
        const todo = await response.json();
        console.log(' remove todo :', todo)
        dispatch(ucRemoveTodo(todo));
    }
    catch (e) {
        dispatch(displayAlert(e))
    }
}

export const markTodoCompletedReq = (todo) => async (dispatch) => {
    const {id}  = todo ;
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'POST',
            headers: { 'Application-Type': 'content' }

        })
        const todo = await response.json()
        dispatch(markTodoAsCompleted(todo))
    }
    catch (e) {
        dispatch(displayAlert(e))
    }
}


export const displayAlert = text => function () { alert(text) }