import React from 'react'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'
import { ucRemoveTodo  , ucIsTodoCompleted } from './actions'


const TodoList = (props) => {
    
    const { todos, onRemovePressed , onCompletedPressed  } = props;
    console.log("todos", todos);
    return (
        <div>
            {todos.map(todo => <TodoListItem todo={todo}  onCompletedPressed={onCompletedPressed} onRemovePressed={onRemovePressed} key ={todo.text} />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log( 'state =------' , state )
    return {
        todos: state.reducer
    }
}


const mapDispatchToProp = (dispatch) => {
    return {
        onRemovePressed: text => dispatch(ucRemoveTodo(text)),
        onCompletedPressed: text => dispatch(ucIsTodoCompleted(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(TodoList)