import React, { Fragment, useState, useEffect } from 'react';

import { Card, Dropdown, Segment, Button, Form } from 'semantic-ui-react';
import { User, useRequest, WithRequest, ErrorMessage } from '../../components';
import { getAll } from '../../services/http-client/user';
import { getAllBooks, newBook } from '../../services/http-client/books';
import { order as orderRequest} from '../../services/http-client/orders';
import { Link, Switch, Route } from 'react-router-dom';
import { roles } from '../../types';
import './style.scss';
import { constants } from '../../i18n';
import { Menu, Header } from 'semantic-ui-react';
import { colors } from '../../assets/semantic-colors';
import { newAuthor,  getAllAuthors, addAuthor } from '../../services/http-client/authors';
import { Book } from '../../components/BooksList/BooksList';

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
  const [ users, errorUsers ] = useRequest(getAll, true);
  const [ books, errorBooks ] = useRequest(getAllBooks, true);
  const [order, setOrder] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

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
  const orderBook = () => {
    return orderRequest(selectedUser, selectedBook).then(
      () => setOrder({
        data: true, 
        error: {message: ""}
      })
    )
  }
  return (
    <div className="admin__order">
      {
        order &&  <WithRequest 
            data={order.data} 
            error={order.error}
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
        onClick={orderBook}
        disabled={!selectedUser || !selectedBook}>
        {constants.order}
      </Button>
    </div>
  );
}

function ManageHeader() {
  return (
    <Menu  widths={4}>
      <Menu.Item as={Link} to='/admin/manage/books'>
        <Header>
          {constants.books}
        </Header>
      </Menu.Item>
      <Menu.Item as={Link} to='/admin/manage/authors'>
        <Header>
          {constants.bookAuthors}
        </Header>
      </Menu.Item>
      <Menu.Item as={Link} to='/admin/manage/cells'>
        <Header>
          {constants.cells}
        </Header>
      </Menu.Item>
      <Menu.Item as={Link} to='/admin/manage/users'>
        <Header>
          {constants.userslist}
        </Header>
      </Menu.Item>
    </Menu>
  )
}
function Manage() {
  return (
    <div className="manage">
      <ManageHeader />
      <Switch>
        <Route exact path='/admin/manage/authors' component={ManageAuthors} />
        <Route path='/admin/manage/users' component={ManageUsers} />
        <Route path='/admin/manage/books' component={ManageBooks} />
      </Switch>
    </div>
  );
}

function ManageBooks() {
  const [a, setA] = useState({
    loading: false, 
    success: null, 
    error:  {message: ""}
  });
  const [ authors, setAuthors ] = useState({
    data: [], 
    loading: false
  });
  const [ book, setBook ] = useState({
    Name: "", 
    BookYear: "", 
    NumberAvailable: ""
  });
  const submit = () => {
    setA(
      {
        loading: true, 
        success: false, 
        error:  {message: ""}
      });
    newBook(book.Name, book.BookYear, book.NumberAvailable).then(
      () => setA(
        {
          loading: false, 
          success: true, 
          error:  {message: ""}
        }
      )
    )
    setAuthors({
      data: [], 
      loading: true
    })
    getAllAuthors().then(
      res => setAuthors({
        data: res.data, 
        loading: false
      })
    )
  }
  const handleChange =  ({target: {name, value}}) => {
    setBook({
      ...book, 
      [name]: value
    })
  } 
  const getBook = () => {
    return {
      name: book.Name, 
      bookYear: book.BookYear, 
      numberAvailable: book.NumberAvailable,
      bookAuthors: '', 
      bookGenres: ''
    }
  }
  const getAuthors = () => {
    return authors === null ? 
      [] : authors.data.map(
        author => {
          return {
            key: author.authorId,
            value: author.authorId, 
            text: `${author.firstName} ${author.lastName}`
          }
        }
      );
  }
  const addAuthorToBook = (value) => {
    addAuthor(1, value).then(
      res => console.log(res)
    )
  }
  return (
    <div className="new_author">
      {a.success !== null && <WithRequest
          data={a.success}
          error={a.error}
          WrappedComponent={() => <Book book={getBook()} />}
        />}
        {(a.success !== null && !a.error.message) &&
          <div>
        
             <Dropdown 
              search
              selection
              loading={authors.loading} 
              onChange={(e, {value}) => addAuthorToBook(value)}
              placeholder="Authors"
              options={getAuthors()}
            />
        
          </div>
        }
      {a.success === null && <Form className="new_author_form">
        {a.success !== null && <WithRequest
          data={a.success}
          error={a.error}
          WrappedComponent={() => <Segment>Success!</Segment>}
        />}
        <Form.Field>
          <label>
            Name
          </label>
          <input 
            name="Name"
            value={book.Name}
            placeholder="Name"
            onChange={handleChange}>
          </input>
        </Form.Field>
        <Form.Field>
          <label>
            Year
          </label>
          <input 
            name="BookYear"
            value={book.BookYear}
            placeholder="Year"
            onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>
            Number Available
          </label>
          <input 
            name="NumberAvailable"
            value={book.NumberAvailable}
            placeholder="Number Available"
            onChange={handleChange}/>
        </Form.Field>
        <Button onClick={submit}>Submit</Button>
      </Form>
    } 
  </div>
  )
}

function ManageAuthors() {
  const [ author, setAuthor ] = useState({
    firstName: "", 
    lastName: ""
  });
  const [a, setA] = useState({
    loading: false, 
    success: null, 
    error:  {message: ""}
  });
  const handleChange =  ({target: {name, value}}) => {
    setAuthor({
      ...author, 
      [name]: value
    })
  } 
  const submit = () => {
    setA(
      {
        loading: true, 
        success: false, 
        error:  {message: ""}
      });
    newAuthor(author.firstName, author.lastName).then(
      () => setA(
        {
          loading: false, 
          success: true, 
          error:  {message: ""}
        }
      )
    )
  }
  return (
    <div className="new_author">
      <Form className="new_author_form">
        {a.success !== null && <WithRequest
          data={a.success}
          error={a.error}
          WrappedComponent={() => <Segment>Success!</Segment>}
        />}
        <Form.Field>
          <label>
            {constants.firstName}
          </label>
          <input 
            name="firstName"
            value={author.firstName}
            placeholder={constants.firstName} 
            onChange={handleChange}>
          </input>
        </Form.Field>
        <Form.Field>
          <label>
            {constants.lastName}
          </label>
          <input 
            name="lastName"
            value={author.lastName}
            placeholder={constants.lastName} 
            onChange={handleChange}/>
        </Form.Field>
        <Button onClick={submit}>Submit</Button>
      </Form>
  </div>
  )
}

function ManageUsers() {
  const [ users, errorUsers ] = useRequest(getAll, true);
  return (
    <WithRequest
      data={users}
      error={errorUsers}
      WrappedComponent={UsersList}
    />
  )
}

function UsersList({data}) {
  return (
    <Card.Group>
      {
        data.map(element => 
            <Card>
              <Card.Content>
                <User key={element.userId} {...element} />
              </Card.Content>
              <Card.Content extra>
                <Button.Group>
                  <Button>{element.role === "User" ? "Make admin" : "Make user"}</Button>
                </Button.Group>
              </Card.Content>
            </Card>
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