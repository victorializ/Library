import React from 'react';

import { getAuthor } from '../../services/http-client';
import { useRequest } from '../../hooks';
import { LoadingComponent } from '../../components';
import { SelectedAuthorName } from './SelectedName';
import { SelectedAuthorsBooks } from './SelectedBooks';

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
        WrappedComponent={SelectedAuthorsBooks} 
      />
    </div>
  ); 
};

export { SelectedAuthor };