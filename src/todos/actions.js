

 export const CREATE_TODO  = 'CREATE_TODO' ;
 export const  ucCreateTodo = (text)  => {
    return{
        type : CREATE_TODO,
        payload : {
            text
        }
    }
} 

 export const REMOVE_TODO  = 'REMOVE_TODO' ;
 export const  ucRemoveTodo = (text)  => {
     return{
         type : REMOVE_TODO,
         payload : {
             text
         }
     }
 } 
 export const COMPLEDED_TODO  = 'COMPLEDED_TODO' ;
 export const  ucIsTodoCompleted = (text)  => {
     return{
         type : COMPLEDED_TODO,
         payload : {
             text
         }
     }
 } 