import React from 'react'

// if task is completed it will be crossed by line (bootstrap text-decoration-line-through)

export default ({todo}) => (
    <div
        className={`list-group-item ${
            todo.completed 
                ? 'text-decoration-line-through' 
                : ''}`
        }>{todo.title}</div>
)