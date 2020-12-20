import React from 'react';
import { shallow } from 'enzyme';

import Books from './Books';

describe('Books page component', () => {
    it('renders correctly', () => {
        expect(shallow(<Books />)).toMatchSnapshot();
    }); 
});