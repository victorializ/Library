import React from 'react';
import { shallow, mount } from 'enzyme';

import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary component', () => {
    it('renders correctly', () => {
        expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
    });
});