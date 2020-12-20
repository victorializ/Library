import React from 'react';
import { Segment } from 'semantic-ui-react'

import { constants } from '../../i18n';

function Footer() {
  return (
    <footer>
      <Segment id="footer" className="app__footer">
        {constants.copyright}
      </Segment>
    </footer>
  );
}

export { Footer };