import React from 'react';
import { shallow } from 'enzyme';

import { Orders } from './Orders';

describe('Orders page component', () => {
    it('renders correctly', () => {
        expect(shallow(<Orders />)).toMatchSnapshot();
    }); 
});