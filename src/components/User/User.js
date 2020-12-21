import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon, Segment } from 'semantic-ui-react';

import { colors } from "../../assets/semantic-colors";

const User = ({firstName, lastName}) => 
    firstName && lastName ?      
        <Segment color={colors.primary} className='user current__user' as={Link} to='/orders'>
            <Icon name="user outline" />
            <div className='user__name'>
                {firstName} {lastName}
            </div>
        </Segment> 
        :
        <div></div>

const CurrentUser = connect(({user}) => user)(User);

export { CurrentUser, User };