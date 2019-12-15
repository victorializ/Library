import React  from 'react';

import { Order } from './Order';
import { ItemsList } from '../hocs/ItemsList';

const OrdersList = ({data}) => <ItemsList data={data} Component={Order} />

export { OrdersList };