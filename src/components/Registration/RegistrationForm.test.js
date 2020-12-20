import React from 'react';
import { shallow } from 'enzyme';

import { RegistrationForm } from './RegistrationForm';

describe('RegistrationForm component', () => {
    it('renders correctly', () => {
        expect(shallow(<RegistrationForm />)).toMatchSnapshot();
    }); 
});