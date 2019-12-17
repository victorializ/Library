import React, { useEffect, useState } from 'react';

import { 
  getAllActiveOrders, 
  finishOrder as finishOrderRequest
} from '../../../services/http-client';
import { OrdersList } from './OrdersList';
import { useRequest } from '../../../hooks';
import { LoadingComponent } from '../../index';

function ManageOrders() {
    const [ loadUsers, setLoadUsers ] = useState(true);
    const allUsersResponse = useRequest(getAllActiveOrders, [], loadUsers);
  
    useEffect(() => {
      if(allUsersResponse.data) {
        setLoadUsers(false);
      }
    }, [allUsersResponse.data]);
    
    const finishOrder = id => {
      return finishOrderRequest(id).then(
        setLoadUsers(true)
      );
    };
    
    return (
      <LoadingComponent
        {...allUsersResponse}
        WrappedComponent={OrdersList}
        finishOrder={finishOrder}
      />
    )
}

export { ManageOrders };