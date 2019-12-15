import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import { constants  } from '../i18n';
import { CurrentUser, LoadingComponent, OrdersList } from '../components';
import { useRequest } from '../hooks';
import { getAllOrders } from '../services/http-client';

function Orders({id: userId}) {
    
  const [ orders, error ]  = useRequest(getAllOrders, userId);
  return (
      <Fragment>
        <CurrentUser />   
        <Header>{constants.orders}</Header>
        <div className='orders__list'>
            <LoadingComponent
                error={error}
                data={orders} 
                WrappedComponent={OrdersList} 
            /> 
        </div>
      </Fragment>
  )
}

const UserOrders = connect(({user}) => user)(Orders);

export { UserOrders, Orders };
