import React, { useState, useEffect } from 'react';

import { List, Segment } from 'semantic-ui-react';

import { BooksList } from '../../components';
import { constants } from '../../i18n';
import { getAllAuthors, getAuthor } from '../../services/http-client/authors';
import { formatData } from '../../services/format-data/books';

import './style.scss';

function Authors() {
  const [ authors, setAuthors ] = useState([]);
  const [ bookAuthors, setBookAuthors ] = useState([]);

  useEffect(() => {
    getAllAuthors().then(res => setAuthors(res.data));
  }, []);

  return (
    <div className='authors'>
      <List divided className='authors__list'>
        { authors.map(element => 
          <List.Item 
            key={element.authorId}
            onClick={() => getAuthor(element.authorId).then(res => setBookAuthors(res.data.bookAuthors))}>
            <List.Content className='authors__list-item'>
              <List.Header as='a'>{element.firstName}  {element.lastName}</List.Header>
            </List.Content>
          </List.Item>
          )
        }
      </List>
      {
        bookAuthors.length ? 
          <BooksList 
            elements={bookAuthors.map(element => formatData(element.book))}>
          </BooksList> : 
          <Segment color='red' className='authors__error-message'>{constants.nobooks}</Segment>
      }
    </div>
  );
}

export { Authors };