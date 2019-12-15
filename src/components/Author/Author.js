import React from 'react';

import { List } from 'semantic-ui-react';

const Author = (
    {
        authorId, 
        firstName, 
        lastName,
        onAuthorSelect
    }
) => {
    return (
        <List.Item key={authorId} onClick={() => onAuthorSelect(authorId)}>
        <List.Content 
          className='authors__list-item'>
          <List.Header>{`${firstName} ${lastName}`}</List.Header>
        </List.Content>
      </List.Item>
    )
}

export { Author };