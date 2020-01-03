import React from 'react';

import { Order } from './Order';
import { ItemsList } from '../../ItemsList';

const OrdersList = ({data, finishOrder}) => 
    <ItemsList data={data} finishOrder={finishOrder} Component={Order} />
    
export { OrdersList };