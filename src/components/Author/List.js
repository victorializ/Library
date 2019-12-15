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
          authorId={authorId}
          firstName={firstName}
          lastName={lastName}
          onAuthorSelect={onAuthorSelect}
      />
    )}
  </List>

export { AuthorsList };