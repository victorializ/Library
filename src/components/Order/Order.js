import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

import { constants  } from '../../i18n';
import { colors } from '../../assets/semantic-colors';
import { formatData } from '../../services/format-data/order';

function Order({item}) {
    const {
        name, 
        bookYear,
        date, 
        isFinished
    } = formatData(item);

    const statuses = {
        finished: {
            message: constants.returned, 
            color: colors.grey
        }, 
        active: {
            message: `${constants.return} ${moment(date).calendar()}`, 
            color: colors.primary
        }, 
        expired: {
            message: constants.expired, 
            color: colors.red
        }
    };
    
    const isReturnDateAfterToday = () => {
        const now = moment();
        const returnDate = moment(date);
        return returnDate.diff(now) > 0;
    }
    const status = () => 
        isFinished ? 
            statuses.finished 
                :
            isReturnDateAfterToday() ?
                statuses.active
                    :
                statuses.expired;
   
    return (
        <Card className='book' color={status().color}>
            <Card.Content>
                <Card.Header>
                    {name}
                </Card.Header>
                <Card.Meta>
                    {bookYear}
                </Card.Meta>
                <Card.Description>
                    {`${constants.status}: ${status().message}`}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export { Order };