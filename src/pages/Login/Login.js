import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Checkbox,
  Loader,
  Header
} from 'semantic-ui-react';

import { constants } from "../../i18n";

function Login({
  loading,
  isLoggedIn,
  errorMessage, 
  login
}) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ checked, check ] = useState(false);

  return (
    <div class="login__wrapper">
      { loading && <Loader active inline='centered' /> }
      { errorMessage && <Header>{errorMessage}</Header> }
      {
        !isLoggedIn ? 
          <Form>
            <Form.Field>
              <label>
                {constants.firstName}
              </label>
              <input 
                placeholder={constants.firstName} 
                value={email}
                onChange={({target: {value}}) => setEmail(value)}/>
            </Form.Field>
            <Form.Field>
              <label>
                {constants.lastName}
              </label>
              <input 
                placeholder={constants.lastName} 
                value={password}
                onChange={({target: {value}}) => setPassword(value)}/>
            </Form.Field>
            <Form.Field>
              <Checkbox label={constants.agree} onClick={() => check(!checked)}/>
            </Form.Field>
            <Button 
              onClick={() => login(email, password)}
              disabled={!email || !password || !checked}>{constants.login}</Button>
          </Form>
        : 
          <Button as={Link} to='/'>{constants.ok}</Button>
      }
    </div>
  );
}

export { Login };