import React, { useState, useEffect } from 'react';

import { List, Segment } from 'semantic-ui-react';

import { BooksList, ErrorMessage } from '../../components';
import { constants } from '../../i18n';
import { getAllAuthors, getAuthor } from '../../services/http-client/authors';
import { formatData } from '../../services/format-data/books';

import './style.scss';

const SelectedAuthorName = ({firstName = '', lastName = ''}) =>
  (firstName || lastName) && 
  <Segment className='authors__name'>{`${firstName} ${lastName}`}</Segment>

const AuthorsList = (
  {
    authors,
    onAuthorSelect
  }) => 
  <List inverted divided className='authors__list'>
    { authors.map(
      ({
        authorId, 
        firstName, 
        lastName
      }) => 
      <List.Item key={authorId} onClick={() => onAuthorSelect(authorId)}>
        <List.Content 
          className='authors__list-item'>
          <List.Header>{`${firstName} ${lastName}`}</List.Header>
        </List.Content>
      </List.Item>
      )
    }
  </List>

const AuthorsBooks = ({books}) => 
  books.length ? 
    <BooksList elements = {books.map(({book}) => formatData(book))} />
    : 
    <ErrorMessage text = {constants.nobooks} />

function Authors() {
  const [ authors, setAuthors ] = useState([]);
  const [ selectedAuthor, setSelectedAuthor ] = useState({bookAuthors: []});

  useEffect(() => {
    getAllAuthors().then(res => setAuthors(res.data));
  }, []);

  return (
    <div className='authors'>
      <AuthorsList 
        authors={authors} 
        onAuthorSelect={
          authorId => getAuthor(authorId)
            .then(({ data }) => setSelectedAuthor(data))
        } 
      />
      <div className='authors--selected'>
        <SelectedAuthorName {...selectedAuthor} />
        {(selectedAuthor.firstName || selectedAuthor.lastName) && 
          <AuthorsBooks books={selectedAuthor.bookAuthors} /> }
      </div>
    </div>
  );
}

export { Authors };