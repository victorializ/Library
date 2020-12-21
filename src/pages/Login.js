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
      token: isLoggedIn
    }
  }
) {
  return {
    loading,
    isLoggedIn,
    error
  };
}
 
const Login = connect(mapStateToProps, { login, logout })(LoginForm);

export { Login, LoginForm };