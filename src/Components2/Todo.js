import React from 'react'
import TodoItem from './TodoItem';

export default function Todo(props) {
  return (
    <div className="container">
        <h3>Todos List</h3>
        <TodoItem todo={props.todo[0]}/>
    </div>
  )
}

