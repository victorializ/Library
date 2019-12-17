import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import { Order as OrderTemplate } from '../../Order/Order';
import { constants } from '../../../i18n';

const Order = ({ item, finishOrder }) => 
    <Card>
        <Card.Content>
            <OrderTemplate key={item.bookingId} item={item} />
        </Card.Content>
        <Card.Content extra>
            <div>
                {`${constants.customer}: ${item.user.email}`}
            </div>
            <Button fluid onClick={() => finishOrder(item.bookingId)}>
                {constants.finishOrder}
            </Button>
        </Card.Content>
    </Card>

export { Order };