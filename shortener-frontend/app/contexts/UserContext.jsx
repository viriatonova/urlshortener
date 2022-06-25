import React, { createContext, useState, useEffect } from "react";
import { getData } from "../helpers/DataHelper";

export const UserContext = createContext();


export function UserProvider ({ children }) {
    const [ user, setUser] = useState([]);

    return(
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    );
}
