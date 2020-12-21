import React from 'react';

import { BooksList, ErrorMessage } from '../../components';
import { constants } from '../../i18n';

const SelectedBooks = ({
    data: {
        bookAuthors: books
    }
}) => {
    return books.length ? 
        <BooksList 
            data={books.map(({book}) => book)}
            className='books__list'
        />
        : 
        <ErrorMessage text={constants.nobooks} />
}

export { SelectedBooks as SelectedAuthorsBooks };