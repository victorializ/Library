import React, { useState, useEffect, Fragment } from 'react';

import { newBook as newBookRequest, addAuthor, getAllAuthors, getAllGenres, addGenre } from '../../../services/http-client';
import { LoadingComponent, Book } from '../../index';
import { Dropdown, Button } from 'semantic-ui-react';
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
    const allGenreResponse = useRequest(getAllGenres, [], addingBook);

    const [ selectedAuthor, setSelectedAuthor ] = useState(null);
    const addAuthorResponse = useRequest(addAuthor, [addBookResponse.data, selectedAuthor], selectedAuthor);

    const [ selectedGenre, setSelectedGenre ] = useState(null);
    const addGenreResponse = useRequest(addGenre, [addBookResponse.data, selectedGenre], selectedGenre);

    const authorToDropdownOption =  author => {
      return {
        key: author.authorId,
        value: author.authorId, 
        text: `${author.firstName} ${author.lastName}`
      };
    };

    const genreToDropdownOption = genre => {
        return {
            key: genre.genreId,
            value: genre.genreId, 
            text: genre.name
        };
    };
  
    const submit = book => {
      setBook(book);
      setAddingBook(true);
    };
    
    useEffect(() => {
      if(addAuthorResponse.data) {
        setBook(addAuthorResponse.data);
      }
    }, [addAuthorResponse.data]);

    useEffect(() => {
      if(addGenreResponse.data) {
        setBook(addGenreResponse.data);
      }
    }, [addGenreResponse.data]);

    const save = () => {
      setBook(null);
      setAddingBook(false);
      setSelectedAuthor(null);
      setSelectedGenre(null);
    }
   
    return (
      <Fragment>
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
          (book && (allAuthorsResponse.data || allAuthorsResponse.loading)) && 
            <Fragment>
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
              <Dropdown 
                search
                selection
                loading={allGenreResponse.loading || addGenreResponse.loading} 
                onChange={(e, {value}) => {
                  setAddingBook(false);
                  setSelectedGenre(value);
                }}
                value={selectedGenre}
                placeholder={constants.bookGenres}
                options={getDropdownOptions(allGenreResponse.data, genreToDropdownOption)}
              />
              <Button onClick={save}>
                {
                  constants.save
                }
              </Button>
            </Fragment>
        }
        {!book  && 
          <BookAddForm submit={submit} />
        }
    </Fragment>
    )
  }

export { ManageBooks };