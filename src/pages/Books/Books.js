import React,  { useState, useEffect }  from 'react';

import { Search, Button } from 'semantic-ui-react'

import { constants } from '../../i18n';
import { book, sorting } from '../../types';
import { colors } from '../../assets/semantic-colors';
import { formatData } from '../../services/format-data/books';
import { getAllBooks } from '../../services/http-client/books';

import './style.scss';
import { BooksList } from '../../components';

const MenuButton = ({name, selectedButton, clickHandler}) => {
  const getButtonColor = (buttonName, selected) =>  {
    return buttonName === selected ? colors.primary : colors.grey;
  }
  return (
    <Button 
      onClick={() => clickHandler(name)}
      color={getButtonColor(name, selectedButton)}>
        {constants[name]}
    </Button>
  )
}

const TopLevelMenu = ({filter, onFilterSet, input, onInput, sort, onSortSet}) =>
  <div className="books__filters">
    <div className="books__search">
      <Button.Group>
        <Button color={colors.secondary}>{constants.filter}</Button>
        <MenuButton name={book.name} selectedButton={filter} clickHandler={onFilterSet} />
        <Button.Or />
        <MenuButton name={book.bookYear} selectedButton={filter} clickHandler={onFilterSet} />
        <Button.Or />
        <MenuButton name={book.bookAuthors} selectedButton={filter} clickHandler={onFilterSet} />
        <Button.Or />
        <MenuButton name={book.bookGenres} selectedButton={filter} clickHandler={onFilterSet} />
      </Button.Group>
      <Search
        className="books__list"
        value = {input}
        onSearchChange ={(e, {value}) => onInput(value)}
      ></Search>
    </div>
    <Button.Group>
      <Button color={colors.secondary}>{constants.sort}</Button>
      <MenuButton name={sorting.asc} selectedButton={sort} clickHandler={onSortSet} />
      <Button.Or />
      <MenuButton name={sorting.desc} selectedButton={sort} clickHandler={onSortSet} />
    </Button.Group>
</div>


function Books() {
  const [ input, setInput ] = useState('');
  const [ sort, setSort ] = useState('');
  const [ filter, setFilter ] = useState(book.Name);
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    getAllBooks().then(res => setBooks(res.data.map(element => formatData(element))));
  }, []);


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
      <TopLevelMenu 
        sort={sort}
        input={input}
        filter={filter}
        onSortSet={sort => setSort(sort)} 
        onInput={input => setInput(input)}
        onFilterSet={filter => setFilter(filter)} 
      />
      <BooksList elements={putInOrder(books)}></BooksList>
    </div>
  );
}

export { Books };