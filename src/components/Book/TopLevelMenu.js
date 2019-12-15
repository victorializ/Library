import React  from 'react';
import { Search, Button } from 'semantic-ui-react'

import { MenuButton } from './MenuButton';
import { constants } from '../../i18n';
import { book, sorting } from '../../types';
import { colors } from '../../assets/semantic-colors';

const TopLevelMenu = ({
  filter, 
  onFilterSet, 
  input, 
  onInput, 
  sort, 
  onSortSet, 
  onSortUnsert, 
  onFilterUnsert
}) =>
  <div className="books__menu">
    <div className="books__search">
      <Button.Group>
        <Button 
          onClick={onFilterUnsert}
          color={colors.secondary}>
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
        showNoResults={false}
        onSearchChange ={(e, {value}) => onInput(value)}
      ></Search>
    </div>
    <div className="books__filter">
      <Button.Group>
        <Button 
          onClick={onSortUnsert}
          color={colors.secondary}>
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

export { TopLevelMenu as BooksTopLevelMenu };