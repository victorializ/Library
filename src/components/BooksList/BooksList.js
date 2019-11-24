import React  from 'react';

import { Card } from 'semantic-ui-react';
import { constants } from '../../i18n';

const Book = (
  {
    book: {
      bookId, 
      name, 
      bookYear, 
      numberAvailable,
      bookAuthors, 
      bookGenres
    }
  }) => 
  <Card key={bookId}>
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
        {constants.authors}: {bookAuthors}
      </Card.Description>
      <Card.Description>
        {constants.genres}: {bookGenres}
      </Card.Description>
    </Card.Content>
  </Card>

function BooksList({elements}) {
    return (
      <Card.Group>
        { elements.map(element => <Book book={element} />) }
      </Card.Group>
    )
}

export { BooksList };