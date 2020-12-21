import React from 'react';
import { shallow } from 'enzyme';

import { BookComponent as Book } from './Book';

describe('Book component', () => {
    it('renders book component correctly', () => {
        const item = {bookAuthors:[], bookGenres:[]}
        expect(shallow(<Book item={item} />)).toMatchSnapshot();
    }); 
    it('renders book authors if available', () => {
        const item = {bookAuthors:[{author: {firstName: 'N', lastName: 'L'}}], bookGenres:[]}
        const wrapper = shallow(<Book item={item} />);
        expect(wrapper.find('.book__authors').exists()).toBeTruthy();
    }); 
    it('not renders book authors if unavailable', () => {
        const item = {bookAuthors:[], bookGenres:[]}
        const wrapper = shallow(<Book item={item} />);
        expect(wrapper.find('.book__authors').exists()).toBeFalsy();
    });
    it('renders book genres if available', () => {
        const item = {bookAuthors:[], bookGenres:[{genre: {name: 'G'}}]}
        const wrapper = shallow(<Book item={item} />);
        expect(wrapper.find('.book__genres').exists()).toBeTruthy();
    }); 
    it('not renders book genres if unavailable', () => {
        const item = {bookAuthors:[], bookGenres:[]}
        const wrapper = shallow(<Book item={item} />);
        expect(wrapper.find('.book__genres').exists()).toBeFalsy();
    });
});