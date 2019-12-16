import React, { useState } from 'react';

import { newBook as newBookRequest, addAuthor, getAllAuthors } from '../../../services/http-client';
import { LoadingComponent, Book } from '../../index';
import { Dropdown } from 'semantic-ui-react';
import { useRequest } from '../../../hooks';
import { newBook } from '../../../services/format-data/books';
import { ErrorMessage } from '../../index';
import { constants } from '../../../i18n';
import { BookAddForm } from './BookAddForm';

//TODO: aaaaaaaaaaaa
function ManageBooks() {
    const [ book, setBook ] = useState(null);
    const addBookResponse = useRequest(newBookRequest, [book.Name, book.BookYear, book.NumberAvailable], book);
    const allAuthorsResponse = useRequest(getAllAuthors, null, book);
    const [ selectedAuthor, setSelectedAuthor ] = useState(null);
    const addAuthorResponse = useRequest(addAuthor, [book.bookId, selectedAuthor], selectedAuthor);

    const submit = book => setBook(book);

    const getAuthors = () => {
      return allAuthorsResponse === null ? 
        [] : allAuthorsResponse.data.map(
          author => {
            return {
              key: author.authorId,
              value: author.authorId, 
              text: `${author.firstName} ${author.lastName}`
            }
          }
        );
    }

    return (
      <div className="new_author">
        <LoadingComponent
            {...addBookResponse}
            WrappedComponent={() => <Book book={newBook()} />}
        />
        {
          allAuthorsResponse.error.message && 
            <ErrorMessage text={allAuthorsResponse.error.message} /> 
        }
        {
          (allAuthorsResponse.data || allAuthorsResponse.loading) && 
            <Dropdown 
              search
              selection
              loading={allAuthorsResponse.loading} 
              onChange={(e, {value}) => setSelectedAuthor(value)}
              value={selectedAuthor}
              placeholder={constants.bookAuthors}
              options={getAuthors}
            />
        }
        <LoadingComponent {...addAuthorResponse} />
        <BookAddForm submit={submit} />
    </div>
    )
  }

export { ManageBooks };