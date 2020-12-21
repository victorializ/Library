import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';

import { constants } from '../../i18n';
import { formatData } from '../../services/format-data/books';
import { order as httpOrder } from '../../services/http-client';
import { useRequest } from '../../hooks';
import { LoadingComponent } from '../LoadingComponent';
import { ErrorMessage } from '../UITable/ErrorMessage';
import { colors } from '../../assets/semantic-colors';

function Book ({item, userId}) {
    const {
        id,
        name, 
        bookYear, 
        numberAvailable,
        bookAuthors, 
        bookGenres
    } = formatData(item);
    
    const [ isOrdered, setIsOrdered ] = useState(false);
    const response = useRequest(httpOrder, [userId, id], isOrdered);


    return (
        <Card className='book'>
            <Card.Content>
                <Card.Header>
                    {name}
                </Card.Header>
                <Card.Meta>
                    {bookYear}
                </Card.Meta>
                <Card.Description>
                    {constants.available}: {numberAvailable}
                </Card.Description>
                { !!bookAuthors.length && 
                    <Card.Description className='book__authors'>
                        {constants.bookAuthors}: {bookAuthors}
                    </Card.Description>
                }
                { !!bookGenres.length && 
                    <Card.Description className='book__genres'>
                        {constants.bookGenres}: {bookGenres}
                    </Card.Description>
                }
            </Card.Content>
            {userId && !isOrdered && 
                <Card.Content extra>
                    <Button basic onClick={() => setIsOrdered(true)}>
                        Order
                    </Button>
                </Card.Content>
            }
            <LoadingComponent {...response} />
            {response.data && 
                <Button 
                    as={Link} to='/orders' 
                    color={colors.primary}>
                    {`Ordered! ${constants.personalAccount}`}
                </Button>
            }
        </Card>
    );
}

const OrderBook = connect(({user}) => user)(Book);

export { Book as BookComponent, OrderBook as Book };