import React, { Fragment } from 'react';

import { Card, Header } from 'semantic-ui-react'

import { constants  } from '../../i18n';
import { colors } from '../../assets/semantic-colors'
import { CurrentUserIcon, useRequest, WithRequest } from '../../components';
import moment from 'moment';

import { formatData } from '../../services/format-data/order';
import { getAll } from '../../services/http-client/orders';

import './style.scss';

function Orders({id: userId}) {
    
  const [ orders, error ]  = useRequest(getAll, userId, userId);
  return (
      <Fragment>
        <CurrentUserIcon />   
        <div className='orders__list'>
            <WithRequest 
                error={error}
                data={orders} 
                WrappedComponent={OrdersList} 
            /> 
        </div>
      </Fragment>
  )
}

function OrdersList({data}) {
    return (
        <Fragment>
            <Header>{constants.orders}</Header>
            <Card.Group>
                {
                data.map(element => 
                    <Order key={element.bookingId} {...formatData(element)} />) 
                }
            </Card.Group>
        </Fragment>
    )
}

function Order({
    name, 
    bookYear,
    date, 
    isFinished
}) {
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
    )
}

export { Orders };