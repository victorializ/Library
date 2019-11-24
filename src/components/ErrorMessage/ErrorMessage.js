import React, { useState }  from 'react';

import { Segment, Header, Button } from 'semantic-ui-react';

import { constants } from '../../i18n';
import { colors } from '../../assets/semantic-colors';

const ErrorMessage = (props) => {
    const [ visible, setVisibility ] = useState(true);
    return (
        visible && <Segment color={colors.red} className='error-message'>
            <Header>{props.message} </Header>
            <Segment.Inline>
                <Button onClick={setVisibility(false)}>
                    {constants.ok}
                </Button>
            </Segment.Inline>
        </Segment>
    )
}
export { ErrorMessage };