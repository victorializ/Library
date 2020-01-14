import { useContext, useState, useEffect } from 'react';

import { UserContext, initialValue } from '../context/user';
import { login as httpLogin } from '../services/http-client';
import { useRequest } from './useRequest';

const useUser = () => {
    const { user, setUser } = useContext(UserContext);
    
    const [ startLogin, setStartLogin ] = useState(false);
    const { data, error, loading } = useRequest(httpLogin, [user.email, user.password], startLogin);
    
    useEffect(() => {
      if(data) {
        setStartLogin(false);
        const role = data.role;
        setUser({
          ...data,
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