import React, { useEffect, useState } from 'react';

import { 
  getAllActiveOrders, 
  finishOrder as finishOrderRequest
} from '../../../services/http-client';
import { OrdersList } from './OrdersList';
import { useRequest } from '../../../hooks';
import { LoadingComponent } from '../../index';

function ManageOrders() {
    const [ loadUsers, setLoadOrders ] = useState(true);
    const allUsersResponse = useRequest(getAllActiveOrders, [], loadUsers);
  
    useEffect(() => {
      if(allUsersResponse.data) {
        setLoadOrders(false);
      }
    }, [allUsersResponse.data]);
    
    const finishOrder = id => {
      return finishOrderRequest(id).then(
        () => setLoadOrders(true)
      );
    };
    
    return (
      <LoadingComponent {...allUsersResponse}>
        <OrdersList finishOrder={finishOrder}/>
      </LoadingComponent>
    )
}

export { ManageOrders };