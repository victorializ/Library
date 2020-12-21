import React from 'react';
import { shallow } from 'enzyme';

import { Registration } from './Registation';

describe('Registration page component', () => {
    it('renders correctly', () => {
        expect(shallow(<Registration />)).toMatchSnapshot();
    }); 
});