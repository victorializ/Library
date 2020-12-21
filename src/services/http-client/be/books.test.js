import { getAllBooks, newBook } from './books';
import * as config from './config';

describe('functions for http requests related to the book entity', () => {
    it('requests all authors', () => {
        config.get = jest.fn();
        getAllBooks();
        expect(config.get.mock.calls[0][0]).toEqual('/Books');
    });
    it('submits new book', () => {
        config.post = jest.fn();
        newBook({});
        expect(config.post.mock.calls[0][0]).toEqual(`/Books`);
    });
});