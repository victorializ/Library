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
    <List.Item 
      key={authorId} 
    >
      <List.Content 
        className='authors__list-item'
        onClick={() => onAuthorSelect(authorId)}
      >
        <List.Header>
          {firstName} {lastName}
        </List.Header>
      </List.Content>
    </List.Item>
  );
};

export { Author };