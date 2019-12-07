import { connect } from 'react-redux';

import { User } from './User';

const UserIcon = connect(({user}) => user)(User);

export { UserIcon };