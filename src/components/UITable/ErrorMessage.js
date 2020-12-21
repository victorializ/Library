import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import { colors } from '../../assets/semantic-colors';

const ErrorMessage = ({text}) => 
    <div className='center-horizontal'>
        <Segment 
            color={colors.red} 
            className='center-horizontal'
           >
            <Header className='error__text'>
                {text}
            </Header>
        </Segment>
    </div>

export { ErrorMessage };