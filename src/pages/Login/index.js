import { connect } from 'react-redux';

import { login, logout } from '../../redux/actions';
import { Login } from './Login';

function mapStateToProps({loading, user:{token: isLoggedIn}, errorMessage}) {
  return {
    loading,
    isLoggedIn,
    errorMessage
  };
}

const mapDispatchToProps = { login, logout };
  
const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginPage };