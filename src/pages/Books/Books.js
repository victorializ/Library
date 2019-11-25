import React,  { useState, useEffect, Fragment }  from 'react';

import { Search, Button } from 'semantic-ui-react'

import { constants } from '../../i18n';
import { book, sorting } from '../../types';
import { colors } from '../../assets/semantic-colors';
import { compose, compare } from '../../utils/utils';
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
  <div className="books__menu">
    <div className="books__search">
      <Button.Group>
        <Button color={colors.secondary}>
          {constants.filter}
        </Button>
        <MenuButton 
          name={book.name} 
          selectedButton={filter} 
          clickHandler={onFilterSet} />
        <Button.Or />
        <MenuButton 
          name={book.bookYear} 
          selectedButton={filter} 
          clickHandler={onFilterSet} />
        <Button.Or />
        <MenuButton 
          name={book.bookAuthors} 
          selectedButton={filter} 
          clickHandler={onFilterSet} />
        <Button.Or />
        <MenuButton 
          name={book.bookGenres} 
          selectedButton={filter} 
          clickHandler={onFilterSet} />
      </Button.Group>
      <Search
        value = {input}
        onSearchChange ={(e, {value}) => onInput(value)}
      ></Search>
    </div>
    <div className="books__filter">
      <Button.Group>
        <Button color={colors.secondary}>
          {constants.sort}
        </Button>
        <MenuButton 
          name={sorting.asc} 
          selectedButton={sort} 
          clickHandler={onSortSet} />
        <Button.Or />
        <MenuButton 
          name={sorting.desc} 
          selectedButton={sort} 
          clickHandler={onSortSet} />
      </Button.Group>
    </div>
</div>


function Books() {
  const [ input, setInput ] = useState('');
  const [ sort, setSort ] = useState('');
  const [ filter, setFilter ] = useState(book.Name);
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    getAllBooks().then(({data}) => setBooks(data.map(element => formatData(element))));
  }, []);
  
  const sortFunction = arr => 
    sort === '' ? 
      arr : arr.sort((a, b) => compare(a, b, sort, filter));
  
  const findFunction = arr => 
    input === '' ?
     arr : arr.filter(book => book[filter].toString().includes(input));

  const putInOrder = items => compose(findFunction, sortFunction)(items);

  return (
    <Fragment>
      <TopLevelMenu 
        sort={sort}
        input={input}
        filter={filter}
        onSortSet={sort => setSort(sort)} 
        onInput={input => setInput(input)}
        onFilterSet={filter => setFilter(filter)} 
      />
      <BooksList elements={putInOrder(books)}></BooksList>
    </Fragment>
  );
}

export { Books };