import React from 'react';
import { shallow } from 'enzyme';

import { ItemsList } from './ItemsList';

describe('ItemsList component', () => {
    it('renders correctly', () => {
        const data = [{id: 1, item: {number: 1}}];
        const Component = item => <p>{item.number}</p>;
        expect(shallow(<ItemsList data={data} Component={Component} />)).toMatchSnapshot();
    });   
});