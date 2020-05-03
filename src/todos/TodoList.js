import React from 'react'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'
import { ucRemoveTodo   } from './actions'


const TodoList = (props) => {
    console.log("todos", props)

    const { todos, onRemovePressed } = props;
    return (
        <div>
            {todos.map(todo => <TodoListItem todo={todo}  onRemovePressed={onRemovePressed}/>)}
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
        onRemovePressed:  text  => dispatch(ucRemoveTodo(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(TodoList)
