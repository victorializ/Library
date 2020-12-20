import React from 'react';
import { shallow } from 'enzyme';

import { Loader } from './Loader';

describe('Loader component', () => {
    it('renders correctly', () => {
        expect(shallow(<Loader />)).toMatchSnapshot();
    });   
    it('displays loader by default', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.find('div').exists()).toBeTruthy();
    }); 
    it('displays loader when loading', () => {
        const wrapper = shallow(<Loader loading={true} />);
        expect(wrapper.find('div').exists()).toBeTruthy();
    });
    it('not displays loader when not loading', () => {
        const wrapper = shallow(<Loader loading={false} />);
        expect(wrapper.find('div').exists()).toBeFalsy();
    });
});