import React from 'react';
import { shallow } from 'enzyme';

import { LoginForm } from './LoginForm';

describe('Login form component', () => {
    it('renders correctly', () => {
        expect(shallow(<LoginForm />)).toMatchSnapshot();
    }); 
    it('renders loader when loading', () => {
        const wrapper = shallow(<LoginForm loading={true} />);
        expect(wrapper.find('.login__loader').exists()).toBeTruthy();
    });
    it('renders error when error', () => {
        const error = {message: 'This is error!'};
        const wrapper = shallow(<LoginForm error={error} />);
        expect(wrapper.find('.login__error').exists()).toBeTruthy();
    });
    it('renders link to profile when user is logged in', () => {
        const wrapper = shallow(<LoginForm isLoggedIn={true} />);
        expect(wrapper.find('.logged-in').exists()).toBeTruthy();
    });
    it('not renders link to profile when user is not logged in', () => {
        const wrapper = shallow(<LoginForm isLoggedIn={false} />);
        expect(wrapper.find('.logged-in').exists()).toBeFalsy();
    });
    it('updates user email on change', () => {
        const wrapper = shallow(<LoginForm />);
        const selector = '.login__input-email';
        const event = {target: {value: 'text'}};
        wrapper.find(selector).simulate('change', event);
        expect(wrapper.find(selector).prop('value')).toEqual(event.target.value);
    });
    it('updates user password on change', () => {
        const wrapper = shallow(<LoginForm />);
        const selector = '.login__input-password';
        const event = {target: {value: 'text'}};
        wrapper.find(selector).simulate('change', event);
        expect(wrapper.find(selector).prop('value')).toEqual(event.target.value);
    });
    it('calles login function', () => {
        const login = jest.fn();
        const wrapper = shallow(<LoginForm login={login} />);
        const selector = '.login__button';
        wrapper.find(selector).simulate('click');
        expect(login.mock.calls.length).toBe(1);
    });
});