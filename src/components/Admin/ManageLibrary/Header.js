import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';

import { constants } from '../../../i18n';

function ManageHeader() {
    return (
      <Menu widths={3}>
        <Menu.Item as={Link} to='/admin/manage/books'>
          <Header>
            {constants.books}
          </Header>
        </Menu.Item>
        <Menu.Item as={Link} to='/admin/manage/authors'>
          <Header>
            {constants.bookAuthors}
          </Header>
        </Menu.Item>
        <Menu.Item as={Link} to='/admin/manage/users'>
          <Header>
            {constants.userslist}
          </Header>
        </Menu.Item>
      </Menu>
    )
}

export { ManageHeader };