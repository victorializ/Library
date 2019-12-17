import React, { useState, Fragment } from 'react';

import { newGenre } from '../../../services/http-client';
import { LoadingComponent } from '../../index';

import { useRequest } from '../../../hooks';

import { GenreAddForm } from './GenreAddForm';

function ManageGenres() {
    const [ genre, setGenre ] = useState(null);
    const response = useRequest(newGenre, [genre], genre);
    
    const submit = genre => setGenre(genre);

    return (
        <Fragment>
            <LoadingComponent {...response} />
            <GenreAddForm submit={submit} />
        </Fragment>
    );
}

export { ManageGenres };