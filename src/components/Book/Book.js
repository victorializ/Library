import React  from 'react';
import { Card } from 'semantic-ui-react';

import { constants } from '../../i18n';
import { formatData } from '../../services/format-data/books';

function Book ({item}) {
    const {
        name, 
        bookYear, 
        numberAvailable,
        bookAuthors, 
        bookGenres
    } = formatData(item);
    return (
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
    )
}

export { Book };