import React from 'react';

import { Card, Button } from 'semantic-ui-react';
import { User as UserTemplate } from '../../User/User';

const User = ({item}) =>
    <Card>
        <Card.Content>
            <UserTemplate key={item.id} {...item} />
        </Card.Content>
        <Card.Content extra>
            <Button.Group>
                <Button>
                    {item.role === "Customer" ? "Make admin" : "Make customer"}
                </Button>
            </Button.Group>
        </Card.Content>
    </Card>

export { User };