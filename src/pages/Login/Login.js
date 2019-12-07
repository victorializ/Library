import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Loader,
  Header,
  Segment
} from 'semantic-ui-react';

import { ErrorMessage } from '../../components';
import { constants } from "../../i18n";
import { colors } from "../../assets/semantic-colors";

import "./style.scss";

function Login({
  loading,
  isLoggedIn,
  errorMessage, 
  login, 
  logout
}) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div className="login__wrapper">
      <Segment color={colors.primary} className='login__form'>
        { loading && <Loader active inline='centered' /> }
        { errorMessage && <ErrorMessage text={errorMessage} /> }
        {
          !isLoggedIn ?
            <Fragment>
              <Form>
                <Form.Field>
                  <label>
                    {constants.firstName}
                  </label>
                  <input 
                    value={email}
                    placeholder={constants.firstName} 
                    onChange={({target: {value}}) => setEmail(value)}/>
                </Form.Field>
                <Form.Field>
                  <label>
                    {constants.lastName}
                  </label>
                  <input 
                    value={password}
                    placeholder={constants.lastName} 
                    onChange={({target: {value}}) => setPassword(value)}/>
                </Form.Field>
                <Button 
                  attached
                  onClick={() => login(email, password)}
                  disabled={!email || !password}>
                  {constants.login}
                </Button>
              </Form>
              <Link to='/registration'>{constants.register}</Link>
            </Fragment> 
            :
            <Fragment>
              <Header textAlign="center">
                {constants.loggedin}
              </Header>
              <Button.Group>
                <Button 
                  as={Link} to='/account' 
                  color={colors.primary}>
                  {constants.personalAccount}
                </Button>
                <Button.Or />
                <Button onClick={logout}>
                  {constants.logout}
              </Button>
              </Button.Group>
            </Fragment>
        }
      </Segment>
    </div>
  );
}

export { Login };