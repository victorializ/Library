import { connect } from 'react-redux';

import { LoginForm } from '../components'; 
import { login, logout } from '../redux/actions';

function mapStateToProps(
  {
    details: { 
      loading, 
      error
    },
    user: {
      token: isLoggedIn, 
      isAdmin
    }
  }
) {
  return {
    loading,
    isLoggedIn,
    error, 
    isAdmin
  };
}
 
const Login = connect(mapStateToProps, { login, logout })(LoginForm);

export { Login };