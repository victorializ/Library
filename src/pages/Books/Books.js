import React,  { useState, useEffect }  from 'react';

import { Search, Button } from 'semantic-ui-react'

import { constants } from '../../i18n';
import { book, colors, sorting } from '../../types';
import { formatData } from '../../services/format-data/books';
import { getAllBooks } from '../../services/http-client/books';

import './style.scss';
import { BooksList } from '../../components';

function Books() {
  const [ input, setInput ] = useState('');
  const [ sort, setSort ] = useState('');
  const [ filter, setFilter ] = useState(book.Name);
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    getAllBooks().then(res => setBooks(res.map(data => formatData(data))));
  }, []);

  const getButtonColor = (buttonName, selected) =>  {
    return buttonName === selected ? colors.primary : colors.grey;
  }

  const putInOrder = (items) => {
    const fileredItems = input === '' ? 
      items : items.filter(book => book[filter].toString().includes(input));
    const sortedItems = sort === '' ? 
    fileredItems : fileredItems.sort((a, b) => 
      sort === sorting.asc ?
        a[filter] < b[filter] ? -1 : 1 : 
        a[filter] > b[filter] ? -1 : 1);
    return sortedItems;
  }

  return (
    <div className="books__wrapper">
      <div className="books__filters">
        <div className="books__search">
          <Button.Group>
            <Button color={colors.secondary}>{constants.filter}</Button>
            <Button 
              onClick={() => setFilter(book.Name)}
              color={getButtonColor(book.Name, filter)}>
                {constants.name}
            </Button>
            <Button.Or />
            <Button 
              onClick={() => setFilter(book.BookYear)} 
              color={getButtonColor(book.BookYear, filter)}>
                {constants.year}
            </Button>
            <Button.Or />
            <Button 
              onClick={() => setFilter(book.BookAuthors)} 
              color={getButtonColor(book.BookAuthors, filter)}>
                {constants.authors}
            </Button>
            <Button.Or />
            <Button 
              onClick={() => setFilter(book.BookGenres)} 
              color={getButtonColor(book.BookGenres, filter)}>
                {constants.genres}
            </Button>
          </Button.Group>
          <Search
            className="books__list"
            value = {input}
            onSearchChange ={(e, {value}) => setInput(value)}
          ></Search>
        </div>
        <Button.Group>
          <Button color={colors.secondary}>{constants.sort}</Button>
          <Button 
            onClick={() => setSort(sorting.asc)} 
            color={getButtonColor(sorting.asc, sort)}>
              {constants.asc}
          </Button>
          <Button.Or />
          <Button 
            onClick={() => setSort(sorting.desc)} 
            color={getButtonColor(sorting.desc, sort)}>
              {constants.desc}
          </Button>
        </Button.Group>
      </div>
      <BooksList elements={putInOrder(books)}></BooksList>
    </div>
  );
}

export { Books };