import { connect } from 'react-redux';

import { login, logout } from '../../redux/actions';
import { Login } from './Login';

function mapStateToProps({loading, user:{token: isLoggedIn, isAdmin}, error}) {
  return {
    loading,
    isLoggedIn,
    error, 
    isAdmin
  };
}
 
const LoginPage = connect(mapStateToProps, { login, logout })(Login);

export { LoginPage as Login };