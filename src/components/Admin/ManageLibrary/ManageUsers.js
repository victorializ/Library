import React, { useEffect, useState } from 'react';

import { 
  getCustomersAndManagers, 
  changeRole as changeRoleRequest
} from '../../../services/http-client';
import { UsersList } from './UsersList';
import { useRequest } from '../../../hooks';
import { LoadingComponent } from '../../index';

function ManageUsers() {
    const [ loadOrders, setLoadOrders ] = useState(true);
    const response = useRequest(getCustomersAndManagers, [], loadOrders);

    useEffect(() => {
      if(response.data) {
        setLoadOrders(false);
      }
    }, [response.data]);
    
    const changeRole = id => {
      return changeRoleRequest(id).then(
        setLoadOrders(true)
      );
    };
    
    return (
      <LoadingComponent
        {...response}
        WrappedComponent={UsersList}
        changeRole={changeRole}
      />
    )
}

export { ManageUsers };