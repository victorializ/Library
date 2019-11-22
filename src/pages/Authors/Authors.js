import React, { useState, useEffect } from 'react';

import { List } from 'semantic-ui-react'
import { getAllAuthors } from '../../services/http-client/authors';

import './style.scss';

function Authors() {
  const [ authors, setAuthors ] = useState('');
  useEffect(() => 
    setAuthors(getAllAuthors()));
  return (
    <div></div>
    /*
    <List divided className='authors__list'>
      { authors.map(author => 
      <List.Item>
        <List.Content className='authors__list-item'>
          <List.Header as='a'>{author.firstName}  {author.lastName}</List.Header>
        </List.Content>
      </List.Item>)
      }
    </List>
    */
  );
}

export { Authors };