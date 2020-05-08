

export const CREATE_TODO = 'CREATE_TODO';
export const ucCreateTodo = (text) => {
    return {
        type: CREATE_TODO,
        payload: {
            text
        }
    }
}

export const REMOVE_TODO = 'REMOVE_TODO';
export const ucRemoveTodo = (text) => {
    return {
        type: REMOVE_TODO,
        payload: {
            text
        }
    }
}
export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text },
});



export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodoSuccess = (todos) => {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: {
            todos,
        }
    }
}

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodoInProgress = () => {
    return {
        type: LOAD_TODOS_IN_PROGRESS,
    }
}


export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodoFailure = () => {
    return {
        type: LOAD_TODOS_FAILURE,
    }
}