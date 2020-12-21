import { login, register } from './user';
import * as config from './config';

describe('functions for http requests related to the user entity', () => {
    it('login', () => {
        config.post = jest.fn();
        login('email', 'password');
        expect(config.post.mock.calls[0][0]).toEqual(`/Account/Login`);
    });
    it('registers', () => {
        config.post = jest.fn();
        register({});
        expect(config.post.mock.calls[0][0]).toEqual('/Account/Register');
    });
});