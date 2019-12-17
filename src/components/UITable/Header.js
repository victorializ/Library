import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header as SHeader } from 'semantic-ui-react'

import { CurrentUser } from '../User/User';
import { constants } from '../../i18n';

function Header() {
  return (
    <header>
        <Menu className='app__header'>
            <Menu.Item as={Link} to='/' className='app__header__logo'>
                <SHeader>
                    {constants.title}
                </SHeader>
            </Menu.Item>
            <Menu.Item className='app__header__current-user'>
                <CurrentUser />
            </Menu.Item> 
            <Menu.Item as={Link} to='/login'>
                <SHeader>
                    {constants.login}
                </SHeader>
            </Menu.Item>
            <Menu.Item as={Link} to='/author'>
                <SHeader>
                    {constants.bookAuthors}
                </SHeader>
            </Menu.Item>
            <Menu.Item as={Link} to='/book'>
                <SHeader>
                    {constants.books}
                </SHeader>
            </Menu.Item>
        </Menu>
    </header>
  );
}

export {  Header };