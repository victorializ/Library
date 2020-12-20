import React from 'react';
import { shallow } from 'enzyme';

import { BooksTopLevelMenu } from './TopLevelMenu';

describe('TopLevelMenu component', () => {
    it('renders top level menu component correctly', () => {
        expect(shallow(<BooksTopLevelMenu />)).toMatchSnapshot();
    });
});