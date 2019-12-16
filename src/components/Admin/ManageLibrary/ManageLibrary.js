import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ManageHeader } from './Header';
import { ManageAuthors } from './ManageAuthors';
import { ManageBooks } from './ManageBooks';
import { ManageUsers } from './ManageUsers';

function ManageLibrary() {
    return (
      <div className='manage'>
        <ManageHeader />  
          <Switch>
            <Route exact path='/admin/manage/authors' component={ManageAuthors} />
            <Route path='/admin/manage/users' component={ManageUsers} />
            <Route path='/admin/manage/books' component={ManageBooks} />
          </Switch>      
      </div>
    );
}

export { ManageLibrary };
