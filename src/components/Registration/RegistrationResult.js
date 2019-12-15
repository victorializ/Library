import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Header,
} from 'semantic-ui-react';

import { constants } from "../../i18n";
import { colors } from "../../assets/semantic-colors";

const RegistrationResult = () => 
  <Fragment>
    <Header textAlign="center">
      {constants.registered}
    </Header>
    <Button 
      as={Link} to='/login' 
      color={colors.primary}>
      {constants.login}
    </Button>
  </Fragment>

export { RegistrationResult };