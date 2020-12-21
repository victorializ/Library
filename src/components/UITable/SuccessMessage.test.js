import React from 'react';
import { shallow } from 'enzyme';

import { DefaultSuccessMessage } from './SuccessMessage';

describe('SuccessMessage component', () => {
    it('renders correctly', () => {
        expect(shallow(<DefaultSuccessMessage />)).toMatchSnapshot();
    });   
});