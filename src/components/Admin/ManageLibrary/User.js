import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import { User as UserTemplate } from '../../User/User';
import { roles } from '../../../types';
import { constants } from '../../../i18n';

const User = ({item, changeRole, ...rest}) => {
    console.log(item, changeRole, rest);
    return (
    <Card>
        <Card.Content>
            <UserTemplate key={item.id} {...item} />
        </Card.Content>
        <Card.Content extra>
            <Button fluid onClick={() => changeRole(item.id)}>
                {item.role === roles.customer ? 
                    constants.makeManager : constants.makeCustomer}
            </Button>
        </Card.Content>
    </Card>
    );
}
export { User };