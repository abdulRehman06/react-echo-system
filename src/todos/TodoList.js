import React, { useEffect } from 'react'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'
import { loadTodos , removeTodRequest, markTodoCompletedReq} from './thunk'


const TodoList = ( { todos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos } ) => {
        useEffect(() => {
            startLoadingTodos();
        } , [] ); 
    
    console.log("isLoading", isLoading);
    const LoadingMessage = <div>Loading Todos...</div>
    const content = (
        <div>
            {todos.map(todo =>
                <TodoListItem todo={todo} key={todo}
                    onCompletedPressed={onCompletedPressed}
                    onRemovePressed={onRemovePressed} />)}
        </div>
    )
    return (
        isLoading ? LoadingMessage : content
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.reducerTodo,
        isLoading: state.isLoading
    }
}


const mapDispatchToProp = (dispatch) => {
    return {
        onRemovePressed: todo => dispatch(removeTodRequest(todo)),
        onCompletedPressed: todo => dispatch(markTodoCompletedReq(todo)),
        startLoadingTodos: () => dispatch(loadTodos()) // thunk call
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(TodoList)
