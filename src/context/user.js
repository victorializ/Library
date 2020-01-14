import React, { createContext, useState } from 'react';

const initialValue = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    token: ''
};

const UserContext = createContext({
    user: {}, 
    setUser: () => {}
});

const UserContextProvider = props => {

    const [ user, setUser ] = useState(initialValue);

    return (
        <UserContext.Provider value={{user, setUser}}>
            { props.children }
        </UserContext.Provider>
    )
};

export { UserContextProvider, UserContext, initialValue };
