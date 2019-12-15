import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import { constants  } from '../i18n';
import { CurrentUser, LoadingComponent, OrdersList } from '../components';
import { useRequest } from '../hooks';
import { getAll } from '../services/http-client/orders';

function Orders({id: userId}) {
    
  const [ orders, error ]  = useRequest(getAll, userId);
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
