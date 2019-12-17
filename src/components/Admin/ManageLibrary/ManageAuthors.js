import React, { useState, Fragment } from 'react';

import { newAuthor } from '../../../services/http-client';
import { LoadingComponent } from '../../index';

import { useRequest } from '../../../hooks';

import { AuthorAddForm } from './AuthorAddForm';

function ManageAuthors() {
    const [ author, setAuthor ] = useState(null);
    const response = useRequest(newAuthor, [author], author);
    
    const submit = author => setAuthor(author);

    return (
        <Fragment>
            <LoadingComponent {...response} />
            <AuthorAddForm submit={submit} />
        </Fragment>
    );
}

export { ManageAuthors };
  