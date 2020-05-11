export const selGetTodo = (state) =>   state.reducerTodo.data ;  
export const selGetIsLoading = (state) =>   state.reducerTodo.isLoading  ;  
export const selGetCompletedTodos =  (state)  => selGetTodo(state).filter( todo => todo.isCompleted) 
export const selGetInCompletedTodos =  (state)  => selGetTodo(state).filter( todo => !todo.isCompleted) 