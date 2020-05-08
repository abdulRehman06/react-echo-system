import React, { useState } from 'react'
import './NewTodoForm.css';
import { connect } from 'react-redux'
import { ucCreateTodo } from './actions'

const NewTodoForm = (props) => {
    let [inputValue, setInputValue] = useState('')
    const { ucCreateTodo, todos } = props;
    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={ev => setInputValue(ev.target.value)}
            />
            <button className="new-todo-button"
                onClick={() => {
                    // console.log('todos -------' , todos ) 
                    const isDublicate = todos.some(value => value.text === inputValue)
                    if (!isDublicate) {
                        ucCreateTodo(inputValue);
                        setInputValue('');
                    }
                    else{
                        console.log('Dublicate value ')
                    }
                }
                }
            >Create Todo</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('state :', state.reducer)
    return {
        todos: state.reducerTodo
    }
}

export default connect(mapStateToProps, { ucCreateTodo })(NewTodoForm)
