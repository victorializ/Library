import React  from 'react';

import { Book } from './Book';
import { ItemsList } from '../hocs/ItemsList';

const BooksList = ({data}) => <ItemsList data={data} Component={Book} />

export { BooksList };    
