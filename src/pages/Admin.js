import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import { Order } from '../components/Admin/Order';
import { ManageLibrary } from '../components/Admin/ManageLibrary/ManageLibrary';
import { AdminHeader } from '../components/Admin/Header';
import { constants } from '../i18n';

function Admin() {
    return (
      <Fragment>
        <Segment textAlign="center">
          {constants.admin}
        </Segment>
        <AdminHeader />
        <div className='admin'> 
          <Switch>
            <Route exact path='/admin' component={Order} />
            <Route exact path='/admin/order' component={Order} />
            <Route path='/admin/manage' component={ManageLibrary} />
          </Switch>
        </div>
      </Fragment>
    );
  }

export { Admin };