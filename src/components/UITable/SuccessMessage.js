import React from 'react';
import { Button, Dropdown, Segment } from 'semantic-ui-react';

import { colors } from '../../assets/semantic-colors';
import { constants } from '../../i18n';

const DefaultSuccessMessage = () => 
    <Segment color={colors.primary}>
        {constants.success}
    </Segment>;

export { DefaultSuccessMessage };