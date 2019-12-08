import React from 'react';

import { Icon, Segment } from 'semantic-ui-react';
import { constants } from '../../i18n';
import { colors } from "../../assets/semantic-colors";
import { Link } from 'react-router-dom';

import './style.scss';

const User = ({firstName, lastName, isAdmin}) => 
    firstName && lastName ? 
        isAdmin ? 
            <Segment color={colors.red} className='user' as={Link} to='/admin'>
                <Icon name="user outline" />
                <div className='user__name'>{constants.admin}</div>
            </Segment> 
            :
            <Segment color={colors.primary} className='user' as={Link} to='/orders'>
                <Icon name="user outline" />
                <div className='user__name'>{`${firstName} ${lastName}`}</div>
            </Segment> 
        :
        <div></div>

export { User };