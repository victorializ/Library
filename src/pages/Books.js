import React,  { useState, Fragment }  from 'react';

import { book } from '../types';
import { compose, compare } from '../utils/utils';
import { getAllBooks } from '../services/http-client/books';

import { 
  BooksList, 
  BooksTopLevelMenu as TopLevelMenu, 
  LoadingComponent 
} from '../components';

import { useRequest } from '../hooks';

function Books() {

  const [ input, setInput ] = useState('');
  const [ sort, setSort ] = useState('');
  const [ filter, setFilter ] = useState(book.Name);

  const [ books, error ]  = useRequest(getAllBooks);
  
  const sortFunction = arr => 
    !sort ? arr : 
      arr.sort((a, b) => compare(a, b, sort, filter));
  
  const findFunction = arr => 
    !input || !filter ? arr :
      arr.filter(book => book[filter].toString().toLowerCase().includes(input.toLowerCase()));

  const putInOrder = items => compose(findFunction, sortFunction)(items);

  return (
    <Fragment>
      <TopLevelMenu 
        sort={sort}
        input={input}
        filter={filter}
        onSortSet={sort => setSort(sort)} 
        onSortUnsert={() => setSort('')}
        onInput={input => setInput(input)}
        onFilterSet={filter => setFilter(filter)} 
        onFilterUnsert={() => setFilter('')}
      />
      <LoadingComponent
        error={error}
        data={putInOrder(books)} 
        WrappedComponent={BooksList} 
      /> 
    </Fragment>
  );
}

export { Books };