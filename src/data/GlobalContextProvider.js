import React, {createContext, useEffect, useState} from 'react';

export const GlobalContext = createContext({});

// we created global component, logic of our app

const GlobalContextProvider = (props) => {

// we define variables with default state null

    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState(null);
    const [todos, setTodos] = useState([]);

// we take all data about our users and their todos

    useEffect(()=>{
        fetchUsers();
        fetchTodos();
    },[]);

    // we extract our users from placeholder, if users not fetched - return error to error log

    const fetchUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await res.json());
        } catch (e) {
            console.log( e.message );
        }
    }

    // we extract our tasks form placeholder, if tasks not fetched - we log error

    const fetchTodos = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            setTodos(await res.json());
        } catch (e) {
            console.log( e.message );
        }
    }

    // returns todos.filter - only tasks of active user?
    // ....... zapis rashufrovat

// filters todos: props of userId should be = to property of our active user

    const getTodosByUserId = () => todos.filter(todo => todo.userId === activeUser.id);

    // we search in our array of users a user,
    // if index -1 - we dont do anything


    const changeActiveUser = userId => {
        const idx = users.findIndex(user => user.id===userId);
        if (idx === -1 ) return;
        setActiveUser(users[idx]);
    }

// on the left: array of users, active user and function changeActiveUser and function getTodosByUserId ---> we transfer to value
    return (
        <GlobalContext.Provider value={{
            users,
            activeUser,
            changeActiveUser,
            getTodosByUserId
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider