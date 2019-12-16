import React from 'react';

import { getAllUsers } from '../../../services/http-client';
import { UsersList } from './UsersList';
import { useRequest } from '../../../hooks';
import { LoadingComponent } from '../../index';

function ManageUsers() {
    const allUsersResponse = useRequest(getAllUsers);
    return (
      <LoadingComponent
        {...allUsersResponse}
        WrappedComponent={UsersList}
      />
    )
}

export { ManageUsers };
  