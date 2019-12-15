import React from 'react';

import { Segment } from 'semantic-ui-react';

const SelectedName = (
    {
        data: {
            firstName = '', 
            lastName = ''
        }
    }
) =>
  (firstName && lastName) && 
    <Segment className='authors__name'>{`${firstName} ${lastName}`}</Segment>

export { SelectedName as SelectedAuthorName };