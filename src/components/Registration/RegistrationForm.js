import React, { useState } from 'react';

import {
  Button,
  Form,
  Checkbox
} from 'semantic-ui-react';

import { constants } from "../../i18n";

function RegistrationForm({register}) {

  const [ user, setUser ] = useState(
    {
      firstName: '', 
      lastName: '', 
      email: '', 
      password: '', 
      reenter: ''
    }
  );

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
          className='registration__firstName'
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
          className='registration__lastName'
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
          className='registration__email'
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
          className='registration__password'
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
          className='registration__reenter'
          type='password'
          name='reenter'
          value={user.reenter}
          placeholder={constants.reenter} 
          onChange={handleChange}/>
      </Form.Field>
      <Checkbox 
        className='registration__agree'
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

export { RegistrationForm };