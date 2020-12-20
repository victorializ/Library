import React from 'react';
import { shallow } from 'enzyme';
import { colors } from '../../assets/semantic-colors';

import { MenuButton } from './MenuButton';

describe('MenuButton component', () => {
    it('renders books list component correctly', () => {
        expect(shallow(<MenuButton />)).toMatchSnapshot();
    });
    it('renders selected button', () => {
        const wrapper = shallow(<MenuButton name='B' selectedButton='B' />);
        expect(wrapper.find('.menu__button').prop('color')).toEqual(colors.primary);
    });
    it('renders unselected button', () => {
        const wrapper = shallow(<MenuButton name='B' selectedButton='A' />);
        expect(wrapper.find('.menu__button').prop('color')).toEqual(colors.grey);
    });
    it('handles click event', () => {
        const handleClick = jest.fn();
        const name = 'B';
        const wrapper = shallow(<MenuButton name={name} clickHandler={handleClick}/>);
        wrapper.find('.menu__button').simulate('click');
        expect(handleClick.mock.calls[0][0]).toEqual(name);
    });
});