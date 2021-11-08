import React from 'react'

// if there is no active user or tasks by user was not rendered - return No Items to do (component <NoTodo />)

export default props => (
    <div className="list-group-item list-group-item-danger">No Items for ToDo</div>
)