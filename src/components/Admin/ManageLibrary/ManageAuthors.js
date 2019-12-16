import React, { useState } from 'react';

import { newAuthor } from '../../../services/http-client';
import { LoadingComponent } from '../../index';

import { useRequest } from '../../../hooks';

import { AuthorAddForm } from './AuthorAddForm';

function ManageAuthors() {
    const [ author, setAuthor ] = useState(null);
    const response = useRequest(newAuthor, [author.firstName, author.lastName], author);
    
    const submit = author => setAuthor(author);

    return (
        <div className="new_author">
            <LoadingComponent {...response} />
            <AuthorAddForm submit={submit} />
        </div>
    );
}

export { ManageAuthors };
  