import React, { useState } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

import { constants } from '../../i18n';
import { LoadingComponent } from '../hocs/LoadingComponent';
import { ErrorMessage } from '../UITable/ErrorMessage';
import { useRequest } from '../../hooks';
import { getAllBooks, getAllUsers } from '../../services/http-client';

function Order() {
    const allUsersResponse = useRequest(getAllUsers);
    const allBooksResponse = useRequest(getAllBooks);

    const [order, setOrder] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedBook, setSelectedBook] = useState(null);
  
    const getDropdownOptions = (array, mapper) => {
        return array === null ? 
        [] : array.map(item => mapper(item));
    }

    const bookToDropdownOption = book => {
        return {
            key: book.bookId, 
            value: book.bookId,
            text: book.name
        };
    };

    const userToDropdownOption = user => {
        return {
            key: user.userId,
            value: user.userId, 
            text: `${user.firstName} ${user.lastName} (${user.email})`
        };
    };

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
          order &&  <LoadingComponent 
              data={order.data} 
              error={order.error}
            />
          }
        <div className="admin__order__items">
          {
            allBooksResponse.error.message ?
              <ErrorMessage text={allBooksResponse.error.message} /> 
                :
              <Dropdown 
                search
                selection
                loading={allBooksResponse.loading} 
                onChange={(e, {value}) => setSelectedBook(value)}
                value={selectedBook}
                placeholder={constants.books}
                options={getDropdownOptions(allBooksResponse.data, bookToDropdownOption)}
              />
          }
          {
            allUsersResponse.error.message ?
              <ErrorMessage text={allUsersResponse.error.message} /> 
                :
              <Dropdown 
                search
                selection
                loading={allUsersResponse.loading} 
                onChange={(e, {value}) => setSelectedUser(value)}
                value={selectedUser}
                placeholder={constants.usersList}
                options={getDropdownOptions(allUsersResponse.data, userToDropdownOption)}
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

export { Order };