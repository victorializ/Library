import React, { Fragment } from 'react';

import { Card } from 'semantic-ui-react';
import { User, useRequest, WithRequest } from '../../components';
import { getAll } from '../../services/http-client/user';

import './style.scss';
import { constants } from '../../i18n';

function Admin() {
  const [ users, error ] = useRequest(getAll);
  return (
    <Fragment>
      <div className="users__list">
        <div>{constants.userslist}</div>
        <WithRequest 
          error={error}
          data={users} 
          WrappedComponent={UsersList} 
        />
      </div>
    </Fragment>
  );
}

function UsersList({data}) {
  return (
    <Card.Group>
      {
        data.map(element => 
            <User key={element.userId} {...element} />
        )
      }
    </Card.Group>
  )
}

export { Admin };