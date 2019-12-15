import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';

import { colors } from "../assets/semantic-colors";
import { register } from '../services/http-client/user';
import { useRequest } from '../hooks';
import { LoadingComponent, RegistrationForm , RegistrationResult } from '../components';

function Registration() {

  const [ user, setUser ] = useState(false);
  const [ response, error ] = useRequest(register, user);

  return (
    <div className="center-vertical">
      <Segment 
        color={colors.primary} 
        className='registration__form'>
        <LoadingComponent
          error={error}
          data={response}
          WrappedComponent={RegistrationResult} 
        />
        <RegistrationForm 
          register={user => setUser(user)}
        />
      </Segment>
    </div>
  );
}

export { Registration };
