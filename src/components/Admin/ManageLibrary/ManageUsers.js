import React from 'react';

import { getAllUsers, getCustomers, getCustomersAndManagers } from '../../../services/http-client';
import { UsersList } from './UsersList';
import { useRequest } from '../../../hooks';
import { LoadingComponent } from '../../index';

function ManageUsers() {
    const allUsersResponse = useRequest(getCustomersAndManagers);
    return (
      <LoadingComponent
        {...allUsersResponse}
        WrappedComponent={UsersList}
      />
    )
}

export { ManageUsers };
  