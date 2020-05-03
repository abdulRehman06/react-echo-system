import React, { Component } from 'react'
import './App.css'
import TodoList from './todos/TodoList'
import NewTodoForm from './todos/NewTodoForm'


export default class App extends Component {
    render() {
        return (
            <div className="container">
                <NewTodoForm/>
                <TodoList/>
               
            </div >
        )
    }
}
