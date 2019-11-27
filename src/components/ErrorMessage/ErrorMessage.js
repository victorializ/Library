import React, { useState }  from 'react';

import { Segment, Header, Button } from 'semantic-ui-react';

import { constants } from '../../i18n';
import { colors } from '../../assets/semantic-colors';

import './style.scss';

const ErrorMessage = ({text}) => {
    const [ visible, setVisibility ] = useState(true);
    return (
        visible && <Segment color={colors.red} className='error-message'>
            <Header>{text}</Header>
            <Segment.Inline>
                <Button basic color={colors.primary} onClick={() => setVisibility(false)}>
                    {constants.ok}
                </Button>
            </Segment.Inline>
        </Segment>
    )
}
export { ErrorMessage };