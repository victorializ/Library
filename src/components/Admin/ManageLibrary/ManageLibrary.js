import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ManageHeader } from './Header';
import { ManageAuthors } from './ManageAuthors';
import { ManageBooks } from './ManageBooks';
import { ManageUsers } from './ManageUsers';
import { ManageGenres } from './ManageGenres';

function ManageLibrary() {
    return (
      <div className='manage'>
        <ManageHeader />  
          <div className='center'>
            <div className="center-horizontal">
              <Switch>
                <Route exact path='/admin/manage/authors' component={ManageAuthors} />
                <Route path='/admin/manage/users' component={ManageUsers} />
                <Route path='/admin/manage/books' component={ManageBooks} />
                <Route path='/admin/manage/genres' component={ManageGenres} />
              </Switch>
            </div>      
          </div>
      </div>
    );
}

export { ManageLibrary };
