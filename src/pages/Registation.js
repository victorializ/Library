import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';

import { colors } from "../assets/semantic-colors";
import { register } from '../services/http-client';
import { useRequest } from '../hooks';
import { LoadingComponent, RegistrationForm , RegistrationResult } from '../components';

function Registration() {
  const [ user, setUser ] = useState(false);
  const response = useRequest(register, [user], user);

  return (
    <div className="center-vertical">
      <Segment 
        color={colors.primary} 
        className='registration__form'
      >
        {
          user ? 
            <LoadingComponent {...response}>
              <RegistrationResult data={response.data} />
            </LoadingComponent>
          :
            <RegistrationForm 
              register={user => setUser(user)}
            />
        }
      </Segment>
    </div>
  );
}

export { Registration };
