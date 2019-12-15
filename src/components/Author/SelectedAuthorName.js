import React from 'react';

import { Segment } from 'semantic-ui-react';

const SelectedAuthorName = (
    {
        data: {
            firstName = '', 
            lastName = ''
        }
    }
) =>
  (firstName && lastName) && 
    <Segment className='authors__name'>{`${firstName} ${lastName}`}</Segment>

export { SelectedAuthorName };