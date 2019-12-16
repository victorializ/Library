import React, { useState, useEffect } from 'react';

import { newBook as newBookRequest, addAuthor, getAllAuthors } from '../../../services/http-client';
import { LoadingComponent, Book } from '../../index';
import { Dropdown } from 'semantic-ui-react';
import { useRequest } from '../../../hooks';
import { newBook } from '../../../services/format-data/books';
import { ErrorMessage } from '../../index';
import { constants } from '../../../i18n';
import { BookAddForm } from './BookAddForm';
import { getDropdownOptions } from '../../../utils/utils';

function ManageBooks() {
    const [ book, setBook ] = useState(null);
    const [ addingBook, setAddingBook ] = useState(false);
    const addBookResponse = useRequest(newBookRequest, [book], addingBook);
    const allAuthorsResponse = useRequest(getAllAuthors, [], addingBook);

    const [ selectedAuthor, setSelectedAuthor ] = useState(null);
    const addAuthorResponse = useRequest(addAuthor, [addBookResponse.data, selectedAuthor], selectedAuthor);

    const authorToDropdownOption =  author => {
      return {
        key: author.authorId,
        value: author.authorId, 
        text: `${author.firstName} ${author.lastName}`
      };
    };

  /*
  const genreToDropdownOption = genre => {
      return {
          key: user.userId,
          value: user.userId, 
          text: `${user.firstName} ${user.lastName} (${user.email})`
      };
  };
  */
    const submit = book => {
      setBook(book);
      setAddingBook(true);
    };
    
    useEffect(() => {
      if(addAuthorResponse.data) {
        setBook(addAuthorResponse.data);
      }
    }, [addAuthorResponse.data]);
      
    return (
      <div className="new_author">
        {book && <LoadingComponent
            {...addBookResponse}
            WrappedComponent={() => <Book item={newBook(book)} />}
        />
        }
        {
          allAuthorsResponse.error.message && 
            <ErrorMessage text={allAuthorsResponse.error.message} /> 
        }
        {
          (allAuthorsResponse.data || allAuthorsResponse.loading) && 
            <Dropdown 
              search
              selection
              loading={allAuthorsResponse.loading || addAuthorResponse.loading} 
              onChange={(e, {value}) => {
                setAddingBook(false);
                setSelectedAuthor(value);
              }}
              value={selectedAuthor}
              placeholder={constants.bookAuthors}
              options={getDropdownOptions(allAuthorsResponse.data, authorToDropdownOption)}
            />
        }
        <BookAddForm submit={submit} />
    </div>
    )
  }

export { ManageBooks };