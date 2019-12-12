import React, { Fragment, useState } from 'react';

import { Card, Dropdown, Segment, Button } from 'semantic-ui-react';
import { User, useRequest, WithRequest, ErrorMessage } from '../../components';
import { getAll as getAllUsers } from '../../services/http-client/user';
import { getAllBooks } from '../../services/http-client/books';
import { order as orderRequest} from '../../services/http-client/orders';
import { Link, Switch, Route } from 'react-router-dom';

import './style.scss';
import { constants } from '../../i18n';
import { Menu, Header } from 'semantic-ui-react';
import { colors } from '../../assets/semantic-colors';

function Admin() {
  return (
    <Fragment>
      <Segment textAlign="center">
        {constants.admin}
      </Segment>
      <AdminHeader />
      <div className='admin'> 
        <Switch>
          <Route exact path='/admin' component={Order} />
          <Route exact path='/admin/order' component={Order} />
          <Route path='/admin/manage' component={Manage} />
        </Switch>
      </div>
    </Fragment>
  );
}

function Order() {
  const [ users, errorUsers ] = useRequest(getAllUsers, true);
  const [ books, errorBooks ] = useRequest(getAllBooks, true);
  const [ orderSelected, setOrderSelected ] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [ order, errorOrder ] = useRequest(orderRequest, orderSelected, selectedUser, selectedBook);

  const getUsers = () => {
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
  const getBooks = () => {
    return books === null ? 
      [] : books.map(
        book => {
          return {
            key: book.bookId, 
            value: book.bookId,
            text: book.name
          }
        }
      )
  }
  return (
    <div className="admin__order">
      {
          orderSelected && <WithRequest 
            data={order} 
            error={errorOrder}
            WrappedComponent={() => <Segment color={colors.primary}>{constants.success}</Segment>} 
          />
        }
      <div className="admin__order__items">
        {
          errorBooks.message ?
            <ErrorMessage text={errorBooks.message} /> 
              :
            <Dropdown 
              search
              selection
              loading={users === null} 
              onChange={(e, {value}) => setSelectedUser(value)}
              value={selectedUser}
              placeholder={constants.userslist}
              options={getUsers()}
            />
        }
        {
          errorUsers.message ?
            <ErrorMessage text={errorUsers.message} /> 
              :
            <Dropdown 
              search
              selection
              loading={users === null} 
              onChange={(e, {value}) => setSelectedBook(value)}
              value={selectedBook}
              placeholder={constants.books}
              options={getBooks()}
            />
        }
      </div>
      <Button 
        className='registration__button'
        onClick={() => setOrderSelected(true)}
        disabled={!selectedUser || !selectedBook}>
        {constants.order}
      </Button>
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