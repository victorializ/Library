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
      <div className='authors--selected__name'>
        <LoadingComponent {...response}>
          <SelectedAuthorName data={response.data} /> 
        </LoadingComponent>
      </div>
      <div className='authors--selected__books'>
        <LoadingComponent {...response}>
          <SelectedAuthorsBooks data={response.data} />
        </LoadingComponent>
      </div>
    </div>
  ); 
};

export { SelectedAuthor };