import React from 'react';
import { shallow } from 'enzyme';

import { Main } from './Main';

describe('Main page component', () => {
    it('renders correctly', () => {
        expect(shallow(<Main />)).toMatchSnapshot();
    }); 
});