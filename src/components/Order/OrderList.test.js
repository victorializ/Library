import React from 'react';
import { shallow } from 'enzyme';

import { OrdersList } from './OrderList';

describe('OrdersList component', () => {
    it('renders correctly', () => {
        expect(shallow(<OrdersList />)).toMatchSnapshot();
    }); 
});