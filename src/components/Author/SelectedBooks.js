import React from 'react';

import { BooksList, ErrorMessage } from '../../components';
import { constants } from '../../i18n';

const SelectedBooks = ({
    data: {
        bookAuthors: books
    }
}) =>
  books.length ? 
    <BooksList 
        data={books.map(({book}) => book)} 
    />
    : 
    <ErrorMessage text={constants.nobooks} />

export { SelectedBooks as SelectedAuthorsBooks };