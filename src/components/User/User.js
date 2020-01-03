import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon, Segment } from 'semantic-ui-react';

import { constants } from '../../i18n';
import { colors } from "../../assets/semantic-colors";

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
                <div className='user__name'>
                    {firstName} {lastName}
                </div>
            </Segment> 
        :
        <div></div>

const CurrentUser = connect(({user}) => user)(User);

export { CurrentUser, User };