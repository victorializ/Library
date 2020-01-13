import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Order } from '../components/Admin/Order';
import { ManageLibrary } from '../components/Admin/ManageLibrary/ManageLibrary';
import { AdminHeader } from '../components/Admin/Header';

function Admin() {
    return (
      <>
        <AdminHeader />
        <div className='admin'> 
          <Switch>
            <Route exact path='/admin' component={Order} />
            <Route exact path='/admin/order' component={Order} />
            <Route path='/admin/manage' component={ManageLibrary} />
          </Switch>
        </div>
      </>
    );
  }

export default Admin;