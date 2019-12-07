import React from 'react';

import { Icon, Segment } from 'semantic-ui-react';

import './style.scss';

const User = ({firstName, lastName}) => 
    firstName && lastName ? 
        <Segment color='olive' className='user-icon'>
            <Icon name="user outline" />
            <div>{`${firstName} ${lastName}`}</div>
        </Segment> :
        <div></div>

export { User };