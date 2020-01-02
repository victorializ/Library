import React, { useState } from 'react';
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

function Login({
  loading,
  isLoggedIn,
  error, 
  login, 
  logout, 
  isAdmin
}) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div className="center">
      <Segment color={colors.primary} className='login__form'>
        { loading && <Loader active inline='centered' /> }
        { error && <ErrorMessage text={error.message} /> }
        {
          !isLoggedIn ?
            <>
              <Form>
                <Form.Field>
                  <label>
                    {constants.email}
                  </label>
                  <input 
                    value={email}
                    placeholder={constants.email} 
                    onChange={({target: {value}}) => setEmail(value)}/>
                </Form.Field>
                <Form.Field>
                  <label>
                    {constants.password}
                  </label>
                  <input 
                    type='password'
                    value={password}
                    placeholder={constants.password} 
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
            </> 
            :
            <>
              <Header textAlign="center">
                {constants.loggedin}
              </Header>
              <Button.Group>
                {isAdmin ? 
                  <Button 
                    as={Link} to='/admin' 
                    color={colors.red}>
                    {constants.admin}
                  </Button>
                  :
                  <Button 
                    as={Link} to='/orders' 
                    color={colors.primary}>
                    {constants.personalAccount}
                  </Button>
                }
                <Button.Or />
                <Button onClick={logout}>
                  {constants.logout}
              </Button>
              </Button.Group>
            </>
        }
      </Segment>
    </div>
  );
}

export { Login as LoginForm };