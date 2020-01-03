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
    const response = useRequest(getAllActiveOrders, [], loadUsers);
  
    useEffect(() => {
      if(response.data) {
        setLoadOrders(false);
      }
    }, [response.data]);
    
    const finishOrder = id => {
      return finishOrderRequest(id).then(
        () => setLoadOrders(true)
      );
    };
    
    return (
      <LoadingComponent {...response}>
        <OrdersList finishOrder={finishOrder} data={response.data} />
      </LoadingComponent>
    )
}

export { ManageOrders };