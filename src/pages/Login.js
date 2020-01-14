//import { connect } from 'react-redux';
import React from 'react';
import { LoginForm } from '../components'; 
import { useUser } from '../hooks';
//import { login, logout } from '../redux/actions';

/*
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
*/ 
//const Login = connect(mapStateToProps, { login, logout })(LoginForm);

const Login = () => {
  const {
    user: {
      token: isLoggedIn, 
      isAdmin
    }, 
    error, 
    loading
  } = useUser();
  return <LoginForm isLoggedIn={isLoggedIn} isAdmin={isAdmin} error={error} loading={loading} />
}
export { Login };