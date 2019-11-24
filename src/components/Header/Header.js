import React from 'react';

import { Segment, Header as SHeader } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { constants  } from '../../i18n';

function Header() {
  return (
    <Segment clearing>
        <SHeader as={Link} to='/' floated='left'>
            {constants.title}
        </SHeader>
        <SHeader as={Link} to='/admin' floated='right'>
            {constants.admin}
        </SHeader>
        <SHeader as={Link} to='/login' floated='right'>
            {constants.login}
        </SHeader>
        <SHeader as={Link} to='/author' floated='right'>
            {constants.bookAuthors}
        </SHeader>
        <SHeader as={Link} to='/book' floated='right'>
            {constants.books}
        </SHeader>
    </Segment>
  );
}

export { Header };