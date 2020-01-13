import React, { useState }  from 'react';

import { 
  BooksList, 
  BooksTopLevelMenu as TopLevelMenu, 
  LoadingComponent 
} from '../components';
import { book } from '../types';
import { compose, compare } from '../utils/utils';
import { getAllBooks } from '../services/http-client';
import { useRequest } from '../hooks';
import { formatData } from '../services/format-data/books'; 

function Books() {

  const [ input, setInput ] = useState('');
  const [ sort, setSort ] = useState('');
  const [ filter, setFilter ] = useState(book.Name);

  const response = useRequest(getAllBooks);
  
  const sortFunction = arr => 
    !sort ? arr : 
      arr.sort((a, b) => compare(a, b, sort, filter));
  
  const findFunction = arr => 
    !input || !filter ? arr :
      arr.filter(book => formatData(book)[filter].toString().toLowerCase().includes(input.toLowerCase()));

  const putInOrder = items => compose(findFunction, sortFunction)(items);

  return (
    <>
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
      <div className="books__list">
        <LoadingComponent {...response}>
          <BooksList data={putInOrder(response.data)}/>
        </LoadingComponent> 
      </div>
    </>
  );
}

export default Books;