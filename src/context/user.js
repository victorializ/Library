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
    const [ state, setState ] = useState({
        user: initialValue
    });

    return (
        <UserContext.Provider value={{...state, setUser: setState}}>
            { props.children }
        </UserContext.Provider>
    )
};

export { UserContextProvider, UserContext, initialValue };
