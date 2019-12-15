import React, { useState } from 'react';

import { getAllAuthors } from '../services/http-client';
import { useRequest } from '../hooks';
import { LoadingComponent, SelectedAuthor, AuthorsList } from '../components';

function Authors() {
  const [ authorId, setAuthorId ] = useState(null);

  const authors = useRequest(getAllAuthors);

  return (
    <div className='authors'>
      <div className='authors__list'>
        <LoadingComponent
          error={authors[1]}
          data={authors[0]} 
          onAuthorSelect={authorId => setAuthorId(authorId)}
          WrappedComponent={AuthorsList} 
        />
      </div>
      {authorId && <SelectedAuthor authorId={authorId} />}
    </div>
  );
}

export { Authors };