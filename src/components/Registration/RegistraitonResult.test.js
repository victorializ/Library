import React from 'react';
import { shallow } from 'enzyme';

import { RegistrationResult } from './RegistrationResult';

describe('RegistrationResult component', () => {
    it('renders correctly', () => {
        expect(shallow(<RegistrationResult />)).toMatchSnapshot();
    }); 
});