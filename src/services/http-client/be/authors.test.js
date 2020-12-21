import { getAllAuthors, getAuthor, newAuthor, addAuthor } from './authors';
import * as config from './config';

describe('functions for http requests related to the author entity', () => {
    it('requests all authors', () => {
        config.get = jest.fn();
        getAllAuthors();
        expect(config.get.mock.calls[0][0]).toEqual('/Authors');
    });
    it('requests author by id', () => {
        config.get = jest.fn();
        const id = 1;
        getAuthor(id);
        expect(config.get.mock.calls[0][0]).toEqual(`/Authors/${id}`);
    });
    it('submits new author', () => {
        config.post = jest.fn();
        newAuthor({});
        expect(config.post.mock.calls[0][0]).toEqual(`/Authors`);
    });
    it('submits authors book', () => {
        config.post = jest.fn();
        const book = {bookId: 1};
        addAuthor(book);
        expect(config.post.mock.calls[0][0]).toEqual(`/Books/${book.bookId}/AddAuthor`);
    });
});