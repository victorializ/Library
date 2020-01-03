import React, { useState } from 'react';

import { LoadingComponent, SelectedAuthor, AuthorsList } from '../components';
import { getAllAuthors } from '../services/http-client';
import { useRequest } from '../hooks';

function Authors() {
  const [ authorId, setAuthorId ] = useState(null);
  const response = useRequest(getAllAuthors);

  return (
    <div className='authors'>
      <div className='authors__list'>
        <LoadingComponent {...response}>
          <AuthorsList onAuthorSelect={authorId => setAuthorId(authorId)} data={response.data} />
        </LoadingComponent>
      </div>
      {authorId && <SelectedAuthor authorId={authorId} />}
    </div>
  );
}

export { Authors };