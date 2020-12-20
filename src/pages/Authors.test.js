import React from 'react';
import { shallow } from 'enzyme';

import Authors from './Authors';

describe('Authors page component', () => {
    it('renders correctly', () => {
        expect(shallow(<Authors />)).toMatchSnapshot();
    }); 
});