import React, { useState, useEffect } from 'react';

import { List } from 'semantic-ui-react';

import { BooksList, ErrorMessage } from '../../components';
import { constants } from '../../i18n';
import { getAllAuthors, getAuthor } from '../../services/http-client/authors';
import { formatData } from '../../services/format-data/books';

import './style.scss';

const AuthorsList = (
  {
    authors,
    onAuthorSelect
  }) => 
  <List divided className='authors__list'>
    { authors.map(
      ({
        authorId, 
        firstName, 
        lastName
      }) => 
      <List.Item key={authorId}>
        <List.Content 
          className='authors__list-item' 
          onClick={() => onAuthorSelect(authorId)}>
          <List.Header as='a'>{firstName}  {lastName}</List.Header>
        </List.Content>
      </List.Item>
      )
    }
  </List>

const AuthorsBooks = ({books}) => 
  books.length ? 
    <BooksList elements = {books.map(element => formatData(element.book))} />
    : 
    <ErrorMessage text = {constants.nobooks} />

function Authors() {
  const [ authors, setAuthors ] = useState([]);
  const [ bookAuthors, setBookAuthors ] = useState([]);

  useEffect(() => {
    getAllAuthors().then(res => setAuthors(res.data));
  }, []);

  return (
    <div className='authors'>
      <AuthorsList 
        authors={authors} 
        onAuthorSelect={authorId => getAuthor(authorId).then(res => setBookAuthors(res.data.bookAuthors))} />
      <AuthorsBooks books={bookAuthors} />
    </div>
  );
}

export { Authors };