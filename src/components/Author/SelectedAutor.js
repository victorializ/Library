import React from 'react';

import { getAuthor } from '../../services/http-client';
import { useRequest } from '../../hooks';
import { LoadingComponent } from '../../components';
import { SelectedAuthorName } from './SelectedAuthorName';
import { AuthorsBooks } from './AuthorsBooks';

const SelectedAuthor = ({authorId}) => {
    const response = useRequest(getAuthor, [authorId]);
    return (
      <div className='authors--selected'>
        <LoadingComponent
          {...response}
          WrappedComponent={SelectedAuthorName} 
        />
        <LoadingComponent
          {...response}
          WrappedComponent={AuthorsBooks} 
        />
      </div>
    ); 
  }

export { SelectedAuthor };