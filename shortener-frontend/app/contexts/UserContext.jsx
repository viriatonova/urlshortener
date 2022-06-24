import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();


export function UserProvider ({ children }) {
    const [ user, setUser] = useState([]);

    useEffect(()=>{
        window.localStorage.setItem('username', user[0]);
        window.localStorage.setItem('token', user[1]);
    },[user])

    return(
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    );
}
