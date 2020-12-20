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
  logout
}) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div className="center">
      <Segment color={colors.primary} className='login__form'>
        { loading && <Loader active inline='centered' className='login__loader' /> }
        { error && <ErrorMessage text={error.message} className='login__error' /> }
        {
          !isLoggedIn ?
            <>
              <Form>
                <Form.Field>
                  <label>
                    {constants.email}
                  </label>
                  <input 
                    className='login__input-email'
                    value={email}
                    placeholder={constants.email} 
                    onChange={({target: {value}}) => setEmail(value)}/>
                </Form.Field>
                <Form.Field>
                  <label>
                    {constants.password}
                  </label>
                  <input 
                    className='login__input-password'
                    type='password'
                    value={password}
                    placeholder={constants.password} 
                    onChange={({target: {value}}) => setPassword(value)}/>
                </Form.Field>
                <Button 
                  attached
                  className='login__button'
                  onClick={() => login(email, password)}
                  disabled={!email || !password}>
                  {constants.login}
                </Button>
              </Form>
              <Link to='/registration'>{constants.register}</Link>
            </> 
            :
            <div className='logged-in'>
              <Header textAlign="center">
                {constants.loggedin}
              </Header>
              <Button.Group>
                <Button 
                  as={Link} to='/orders' 
                  color={colors.primary}>
                  {constants.personalAccount}
                </Button>
                <Button.Or />
                <Button onClick={logout}>
                  {constants.logout}
              </Button>
              </Button.Group>
            </div>
        }
      </Segment>
    </div>
  );
}

export { Login as LoginForm };