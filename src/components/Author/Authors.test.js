import React from 'react';
import { shallow } from 'enzyme';

import { Author } from './Author';
import { AuthorsList } from './List';
import { SelectedAuthor } from './SelectedAutor';
import { SelectedAuthorsBooks } from './SelectedBooks';
import { SelectedAuthorName } from './SelectedName'; 

describe('Authors', () => {
    it('renders author component correctly', () => {
        expect(shallow(<Author />)).toMatchSnapshot();
    }); 
    it('triggers function on author click', () => {
        const id = 1;
        const handleClick = jest.fn();
        const wrapper = shallow(<Author authorId={id} onAuthorSelect={handleClick} />);
        wrapper.find('.authors__list-item').simulate('click');
        expect(handleClick.mock.calls[0][0]).toBe(id);
    });  
    it('renders authors list component correctly', () => {
        expect(shallow(<AuthorsList data={[]}/>)).toMatchSnapshot();
    });
    it('renders list of two authors', () => {
        const data = [{}, {}];
        const wrapper = shallow(<AuthorsList data={data}/>);
        expect(wrapper.find('.authors__list-item').length).toBe(data.length);
    });
    it('renders selected author component correctly', () => {
        expect(shallow(<SelectedAuthor />)).toMatchSnapshot();
    });
    it('renders selected books component correctly', () => {
        expect(shallow(<SelectedAuthorsBooks data={{bookAuthors: []}} />)).toMatchSnapshot();
    });
    it('renders list of two books', () => {
        const data = {bookAuthors: [{}, {}]}
        const wrapper = shallow(<SelectedAuthorsBooks data={data}/>);
        expect(wrapper.find('.books__list').exists()).toBeTruthy();
    });
    it('renders selected name component correctly', () => {
        expect(shallow(<SelectedAuthorName data={{}} />)).toMatchSnapshot();
    });
    it('renders selected authors name when available', () => {
        const data = {firstName: 'FN', lastName: 'LN'};
        const wrapper = shallow(<SelectedAuthorName data={data} />);
        expect(wrapper.find('.authors__name').exists()).toBeTruthy();
    });
    it('not renders selected authors name when not available', () => {
        const data = {};
        const wrapper = shallow(<SelectedAuthorName data={data} />);
        expect(wrapper.find('.authors__name').exists()).toBeFalsy();
    });
});