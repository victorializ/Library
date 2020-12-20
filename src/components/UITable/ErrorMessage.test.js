import React from 'react';
import { shallow } from 'enzyme';

import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage component', () => {
    it('renders correctly', () => {
        expect(shallow(<ErrorMessage />)).toMatchSnapshot();
    });   
    it('displays error message', () => {
        const text = 'text';
        const wrapper = shallow(<ErrorMessage text={text}/>);
        expect(wrapper.find('.error__text').render().text()).toEqual(text);
    });
});