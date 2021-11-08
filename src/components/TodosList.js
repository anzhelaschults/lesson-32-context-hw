import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";
import NoTodo from "./NoTodo";
import TodoItem from "./TodoItem";

// 1. import GlobalContextProvider
// 2. we need active user and getTodosByUserId from global component
// if there is no active user or tasks by user was not rendered - return No Items to do (component <NoTodo />)

const TodosList = () => {
    const {activeUser, getTodosByUserId} = useContext(GlobalContext);
    if (!activeUser || !getTodosByUserId().length) return <NoTodo />
    return getTodosByUserId().map(todo => <TodoItem key={todo.id} todo={todo} />)
}

export default TodosList;