import React from 'react';

import { User } from './User';
import { ItemsList } from '../../hocs/ItemsList';

const UsersList = ({data}) => <ItemsList data={data} Component={User} />

export { UsersList };