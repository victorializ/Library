import React from 'react';

import { getAuthor } from '../../services/http-client';
import { useRequest } from '../../hooks';
import { LoadingComponent } from '../../components';
import { SelectedAuthorName } from './SelectedAuthorName';
import { AuthorsBooks } from './AuthorsBooks';

const SelectedAuthor = ({authorId}) => {
    const selectedAuthor = useRequest(getAuthor, authorId);
    return (
      <div className='authors--selected'>
        <LoadingComponent
          data={selectedAuthor[0]} 
          error={selectedAuthor[1]}
          WrappedComponent={SelectedAuthorName} 
        />
        <LoadingComponent
          data={selectedAuthor[0]} 
          error={selectedAuthor[1]}
          WrappedComponent={AuthorsBooks} 
        />
      </div>
    ); 
  }

export { SelectedAuthor };