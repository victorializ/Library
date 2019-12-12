import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Form,
  Checkbox,
  Header,
  Segment
} from 'semantic-ui-react';

import { constants } from "../../i18n";
import { colors } from "../../assets/semantic-colors";

import './style.scss';

import { register } from '../../services/http-client/user';
import { useRequest, WithRequest  } from '../../components';

function RegistrationForm({register}) {

  const [ user, setUser ] = useState({
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '', 
    reenter: ''
  });

  const [ checked, setChecked ] = useState(false);

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value});
  }

  const isSubmitDisabled = () => {
    return !checked || 
      user.password !== user.reenter || 
      Object.keys(user).some(key => !user[key]);
  }

  return (
    <Form>
      <Form.Field>
        <label>
          {constants.firstName}
        </label>
        <input 
          name='firstName'
          value={user.firstName}
          placeholder={constants.firstName} 
          onChange={handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>
          {constants.lastName}
        </label>
        <input 
          name='lastName'
          value={user.lastName}
          placeholder={constants.lastName} 
          onChange={handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>
          {constants.email}
        </label>
        <input 
          name='email'
          value={user.email}
          placeholder={constants.email} 
          onChange={handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>
          {constants.password}
        </label>
        <input 
          type='password'
          name='password'
          value={user.password}
          placeholder={constants.password} 
          onChange={handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>
          {constants.reenter}
        </label>
        <input 
          type='password'
          name='reenter'
          value={user.reenter}
          placeholder={constants.reenter} 
          onChange={handleChange}/>
      </Form.Field>
      <Checkbox 
        checked={checked}
        label={constants.agree}
        onChange={() => setChecked(!checked)}
      />
      <Button 
        className='registration__button'
        onClick={() => register(user)}
        disabled={isSubmitDisabled()}>
        {constants.register}
      </Button>
    </Form>
  );
}

const RegistrationResult = () => 
  <Fragment>
    <Header textAlign="center">
      {constants.registered}
    </Header>
    <Button 
      as={Link} to='/login' 
      color={colors.primary}>
      {constants.login}
    </Button>
  </Fragment>

function Registration() {

  const [ user, setUser ] = useState(null);
  const [ response, error ] = useRequest(register, user, user);

  return (
    <div className="registration__wrapper">
      <Segment color={colors.primary} className='registration__form'>
        {
          user && 
            <WithRequest
              error={error}
              data={response}
              WrappedComponent={RegistrationResult} 
            /> 
        }
        <RegistrationForm 
          register={user => setUser(user)}
        />
      </Segment>
    </div>
  );
}

export { Registration };
