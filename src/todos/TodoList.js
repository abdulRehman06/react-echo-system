import React, { useEffect } from 'react'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'
import { selGetTodo, selGetIsLoading, selGetCompletedTodos , selGetInCompletedTodos } from './selector'
import { loadTodos, removeTodRequest, markTodoCompletedReq } from './thunk'


const TodoList = ({ todos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos, selGetCompletedTodos , selGetInCompletedTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    // console.log("isLoading", isLoading);
    console.log("selGetCompletedTodos", selGetCompletedTodos);
    const LoadingMessage = <div>Loading Todos...</div>
    const content = (
        <div>
            <h1>Un Completed Totos...</h1>
            {selGetInCompletedTodos.map(todo =>
                <TodoListItem todo={todo} key={todo}
                    onCompletedPressed={onCompletedPressed}
                    onRemovePressed={onRemovePressed} />)}
            <h1>Completed Totos...</h1>
            {selGetCompletedTodos.map(todo =>
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
        todos: selGetTodo(state),
        isLoading: selGetIsLoading(state),
        selGetCompletedTodos: selGetCompletedTodos(state),
        selGetInCompletedTodos: selGetInCompletedTodos(state)
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
