import React  from 'react';

import { Book } from './Book';
import { ItemsList } from '../ItemsList';

const List = ({data}) => 
    <ItemsList 
        data={data} 
        Component={Book}
    />

export { List as BooksList };    
