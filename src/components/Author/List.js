import React from 'react';

import { List } from 'semantic-ui-react';
import { Author } from './Author';

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
      <Author 
          key={authorId}
          authorId={authorId}
          firstName={firstName}
          lastName={lastName}
          onAuthorSelect={onAuthorSelect}
          className='authors__list-item'
      />
    )}
  </List>

export { AuthorsList };