import React  from 'react';

import { Card } from 'semantic-ui-react'
import { constants  } from '../../i18n';

function BooksList(props) {
    return (
        <div className="books__list">
        <Card.Group>
          { props.elements
            .map(book => 
              <Card key={book.bookId}>
                <Card.Content>
                  <Card.Header>{book.name}</Card.Header>
                  <Card.Meta>{book.bookYear}</Card.Meta>
                  <Card.Description>
                    {constants.available}: {book.numberAvailable}
                  </Card.Description>
                  <Card.Description>
                    {constants.authors}: {book.bookAuthors}
                  </Card.Description>
                  <Card.Description>
                    {constants.genres}: {book.bookGenres}
                  </Card.Description>
                </Card.Content>
              </Card>
            )
          }
        </Card.Group>
      </div>
    )
}

export { BooksList };