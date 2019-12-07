import React, { useState, useEffect } from 'react';

import { List, Segment } from 'semantic-ui-react';

import { BooksList, ErrorMessage } from '../../components';
import { constants } from '../../i18n';
import { getAllAuthors, getAuthor } from '../../services/http-client/authors';
import { useRequest, WithRequest } from '../../components';

import './style.scss';

const SelectedAuthorName = ({data: {firstName = '', lastName = ''}}) =>
  (firstName || lastName) && 
  <Segment className='authors__name'>{`${firstName} ${lastName}`}</Segment>

const AuthorsList = (
  {
    data,
    onAuthorSelect
  }) => 
  <List inverted divided>
    { data.map(
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

const AuthorsBooks = ({data : {bookAuthors: books}}) =>
  books.length ? 
    <BooksList data={books.map(({book}) => book)} />
    : 
    <ErrorMessage text={constants.nobooks} />


const SelectedAuthor = ({authorId}) => {
  const selectedAuthor = useRequest(getAuthor, authorId);
  return (
    <div className='authors--selected'>
      <WithRequest 
        data={selectedAuthor[0]} 
        error={selectedAuthor[1]}
        WrappedComponent={SelectedAuthorName} 
      />
      <WithRequest 
        data={selectedAuthor[0]} 
        error={selectedAuthor[1]}
        WrappedComponent={AuthorsBooks} 
      />
    </div>
  ); 
}

function Authors() {
  const [ authorId, setAuthorId ] = useState(null);

  const authors = useRequest(getAllAuthors);

  return (
    <div className='authors'>
      <div className='authors__list'>
        <WithRequest 
          error={authors[1]}
          data={authors[0]} 
          onAuthorSelect={authorId => setAuthorId(authorId)}
          WrappedComponent={AuthorsList} 
        />
      </div>
      {authorId && <SelectedAuthor authorId={authorId} />}
    </div>
  );
}

export { Authors };