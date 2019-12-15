import React, { useState } from 'react';

import { getAllAuthors } from '../services/http-client';
import { useRequest } from '../hooks';
import { LoadingComponent, SelectedAuthor, AuthorsList } from '../components';

function Authors() {
  const [ authorId, setAuthorId ] = useState(null);

  const response = useRequest(getAllAuthors);

  return (
    <div className='authors'>
      <div className='authors__list'>
        <LoadingComponent
          {...response}
          onAuthorSelect={authorId => setAuthorId(authorId)}
          WrappedComponent={AuthorsList} 
        />
      </div>
      {authorId && <SelectedAuthor authorId={authorId} />}
    </div>
  );
}

export { Authors };