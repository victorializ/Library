import React from 'react';

import { Segment } from 'semantic-ui-react'

import { constants  } from '../../i18n';

function Footer() {
  return (
    <Segment textAlign='center'>{constants.copyright}</Segment>
  );
}

export { Footer };