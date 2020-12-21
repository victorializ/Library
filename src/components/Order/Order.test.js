import React from 'react';
import { shallow } from 'enzyme';

import { Order } from './Order';

describe('Order component', () => {
    it('renders correctly', () => {
        expect(shallow(<Order item={{book: {}}}/>)).toMatchSnapshot();
    }); 
});