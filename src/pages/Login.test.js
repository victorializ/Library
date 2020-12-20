import React from 'react';
import { shallow } from 'enzyme';

import { LoginForm } from './Login';

describe('Login page component', () => {
    it('renders correctly', () => {
        expect(shallow(<LoginForm />)).toMatchSnapshot();
    }); 
});