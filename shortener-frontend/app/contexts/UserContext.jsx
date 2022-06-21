import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    let [user, setUser] = useState(null);

    let contextData = {
        username: ''
    }

    return(
        <UserContext.Provider value={contextData}>
            { children }
        </UserContext.Provider>
    );


}

export default UserProvider