import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';

import { constants } from '../../i18n';

const AdminHeader = () => 
    <Menu widths={2}>
        <Menu.Item as={Link} to='/admin/order'>
            <Header>
                {constants.order}
            </Header>
        </Menu.Item>
        <Menu.Item as={Link} to='/admin/manage'>
            <Header>
                {constants.manage}
            </Header>
        </Menu.Item>
    </Menu>  

export { AdminHeader };