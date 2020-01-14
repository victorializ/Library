import { useContext, useState, useEffect } from 'react';

import { UserContext, initialValue } from '../context/user';
import { login as httpLogin } from '../services/http-client';
import { useRequest } from './useRequest';

/*
{
    loading, 
    isLoggedIn, 
    error, 
    isLoggedIn, 
    login, 
    logout
  }
*/
const useUser = () => {
    const { user, setUser } = useContext(UserContext);
    
    const { startLogin, setStartLogin } = useState(false);
    const { data, error, loading } = useRequest(httpLogin, [user.email, user.password], startLogin);
    
    useEffect(() => {
        if(data) {
          setStartLogin(false);
          const loggedinUser = data.data;
          const role = loggedinUser.role;
          setUser({
            ...loggedinUser,
            isAdmin: role === "Admin" || 
            role === "Manager"
          });
        }
      }, [data]);

    const login = (email, password) => {
        setUser({
            ...initialValue, 
            email, 
            password
        });
        setStartLogin(true);
    };

    const logout = () => setUser(initialValue);

    return {
        user, 
        error, 
        loading, 
        login, 
        logout
    }
};

export { useUser };