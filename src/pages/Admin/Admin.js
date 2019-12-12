import React, { Fragment, useState } from 'react';

import { Card, Dropdown } from 'semantic-ui-react';
import { User, useRequest, WithRequest, ErrorMessage } from '../../components';
import { getAll } from '../../services/http-client/user';
import { Link, Switch, Route } from 'react-router-dom';

import './style.scss';
import { constants } from '../../i18n';
import { Menu, Header } from 'semantic-ui-react';

function Admin() {
  return (
    <Fragment>
      <AdminHeader />
      <Switch>
        <Route exact path='/admin' component={Order} />
        <Route exact path='/admin/order' component={Order} />
        <Route path='/admin/manage' component={Manage} />
      </Switch>
    </Fragment>
  );
}

function Order() {
  const [ users, error ] = useRequest(getAll, true);
  const [selectedUser, setSelectedUser] = useState(null);
  const getOptions = () => {
    return users === null ? 
      [] : users.map(
        user => {
          return {
            key: user.userId,
            value: user.userId, 
            text: `${user.firstName} ${user.lastName} (${user.email})`
          }
        }
      );
  }
  return (
    <div className="admin__order">
      {
        error.message ?
          <ErrorMessage text={error.message} /> 
            :
          <Dropdown 
            search
            selection
            loading={users === null} 
            onChange={(e, {value}) => setSelectedUser(value)}
            value={selectedUser}
            placeholder={constants.userslist}
            options={getOptions()}
          />
      }
    </div>
  );
}

function Manage() {
  return (
    <div>Manage</div>
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

function AdminHeader() {
  return (
    <Menu  widths={2}>
      <Menu.Item as={Link} to='/admin/order'>
        <Header>
          {constants.order}
        </Header>
      </Menu.Item>
      <Menu.Item as={Link} to='/admin/manage'>
        <Header>
          {constants.manage}
        </Header>
      </Menu.Item>
    </Menu>
  )
}
export { Admin };