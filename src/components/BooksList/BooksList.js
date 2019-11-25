import React  from 'react';

import { Card } from 'semantic-ui-react';
import { constants } from '../../i18n';

import './style.scss';

const Book = (
  {
    book: {
      name, 
      bookYear, 
      numberAvailable,
      bookAuthors, 
      bookGenres
    }
  }) => 
  <Card className='book'>
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Meta>
        {bookYear}
      </Card.Meta>
      <Card.Description>
        {constants.available}: {numberAvailable}
      </Card.Description>
      <Card.Description>
        {constants.bookAuthors}: {bookAuthors}
      </Card.Description>
      <Card.Description>
        {constants.bookGenres}: {bookGenres}
      </Card.Description>
    </Card.Content>
  </Card>

function BooksList({elements}) {
    return (
      <Card.Group>
        {
          elements.map(element => 
            <Book key={element.bookId} book={element} />) 
        }
      </Card.Group>
    )
}

export { BooksList };