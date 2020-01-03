import React, { useEffect, useState } from 'react';

import { 
  getCustomersAndManagers, 
  changeRole as changeRoleRequest
} from '../../../services/http-client';
import { UsersList } from './UsersList';
import { useRequest } from '../../../hooks';
import { LoadingComponent } from '../../index';

function ManageUsers() {
    const [ loadUsers, setLoadUsers ] = useState(true);
    const response = useRequest(getCustomersAndManagers, [], loadUsers);

    useEffect(() => {
      if(response.data) {
        setLoadUsers(false);
      }
    }, [response.data]);
    
    const changeRole = id => {
      return changeRoleRequest(id).then(
        () => setLoadUsers(true)
      );
    };
    
    return (
      <LoadingComponent {...response}>
        <UsersList changeRole={changeRole} data={response.data} />
      </LoadingComponent>
    )
}

export { ManageUsers };