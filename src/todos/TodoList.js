import React, { useEffect } from 'react'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'
import { loadTodos } from './thunk'
import { ucRemoveTodo, markTodoAsCompleted } from './actions'


const TodoList = (props) => {

    const { todos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos } = props;
    useEffect(() => {
        startLoadingTodos();
    }, []);
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
        isLoading: state.isLoading,
    }
}


const mapDispatchToProp = (dispatch) => {
    return {
        onRemovePressed: text => dispatch(ucRemoveTodo(text)),
        onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
        startLoadingTodos: () => dispatch(loadTodos()) // thunk call
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(TodoList)
