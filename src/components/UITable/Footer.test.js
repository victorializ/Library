import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './Footer';

describe('Footer component', () => {
    it('renders correctly', () => {
        expect(shallow(<Footer />)).toMatchSnapshot();
    });   
});