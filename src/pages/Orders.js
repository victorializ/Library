import React from 'react';
//import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import { constants  } from '../i18n';
import { CurrentUser, LoadingComponent, OrdersList } from '../components';
import { useRequest, useUser } from '../hooks';
import { getAllOrders } from '../services/http-client';

function Orders() {  
  const {id: userId} = useUser();
  const response = useRequest(getAllOrders, [userId]);
  return (
    <>
      <CurrentUser />   
      <Header>{constants.orders}</Header>
      <div className='orders__list'>
        <LoadingComponent {...response}>
          <OrdersList data={response.data} />
        </LoadingComponent>
      </div>
    </>
  );
}

//const UserOrders = connect(({user}) => user)(Orders);

export { Orders as UserOrders };