import React from 'react';
import { shallow } from 'enzyme';

import { BooksList } from './List';

describe('BooksList component', () => {
    it('renders books list component correctly', () => {
        expect(shallow(<BooksList />)).toMatchSnapshot();
    });
});