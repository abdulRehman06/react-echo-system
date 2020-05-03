import React from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => {
    const { todo, onRemovePressed, onCompletedPressed } = props;
    // console.log('--props :', props)

    return (
        <div className="todo-item-container"  >

            <h3>{todo.text}</h3>
            <div className="buttons-container">
                { (todo.isCompleted) ? null :

                        <button className="completed-button"
                            onClick={() => onCompletedPressed(todo.text)}
                        >Mark As Completed</button>
                }
                <button className="remove-button"
                    onClick={() => onRemovePressed(todo.text)}
                >Remove</button>
            </div>
        </div>
    )
}

export default TodoListItem
