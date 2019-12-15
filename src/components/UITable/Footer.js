import React from 'react';
import { Segment } from 'semantic-ui-react'

import { constants  } from '../../i18n';

function Footer() {
  return (
    <Segment  
      className="app__footer"
    >
      {constants.copyright}
    </Segment>
  );
}

export { Footer };