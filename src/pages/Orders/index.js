import { connect } from 'react-redux';

import { Orders } from './Orders';

const UserOrders = connect(({user}) => user)(Orders);

export { UserOrders };