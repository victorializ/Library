import React from 'react';

import { ManageHeader } from './Header'
//ManageAuthors, ManageUsers, ManageBooks

function Manage() {
    return (
      <div className="manage">
        <ManageHeader />
            {
                /*
                <Switch>
                 <Route exact path='/admin/manage/authors' component={ManageAuthors} />
                <Route path='/admin/manage/users' component={ManageUsers} />
                <Route path='/admin/manage/books' component={ManageBooks} />
                 </Switch>
                */
            }
      </div>
    );
}

export { Manage };
