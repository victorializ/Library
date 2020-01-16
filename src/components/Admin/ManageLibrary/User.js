import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import { User as UserTemplate } from '../../User/User';
import { roles } from '../../../types';
import { constants } from '../../../i18n';

const User = ({ item, changeRole }) => 
    <Card>
        <Card.Content>
            <UserTemplate key={item.userId} {...item} />
        </Card.Content>
        <Card.Content extra>
            <Button fluid onClick={() => changeRole(item.userId)}>
                {item.role === roles.user ? 
                    constants.makeManager : constants.makeCustomer}
            </Button>
        </Card.Content>
    </Card>

export { User };