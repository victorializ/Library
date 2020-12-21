import React from 'react';
import { shallow } from 'enzyme';

import { LoadingComponent } from './LoadingComponent';

describe('Loading component', () => {
    it('renders correctly when loading', () => {
        const error = {message: ''};
        expect(shallow(<LoadingComponent error={error} />)).toMatchSnapshot();
    });  
    it('renders correctly when error', () => {
        const error = {message: 'This is error'};
        expect(shallow(<LoadingComponent error={error} />)).toMatchSnapshot();
    });  
    it('renders correctly when data is loaded', () => {
        const error = {message: ''};
        expect(shallow(<LoadingComponent error={error} data='data'><p></p></LoadingComponent>)).toMatchSnapshot();
    });
}); 