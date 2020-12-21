import { getAllGenres, addGenre, newGenre } from './genres';
import * as config from './config';

describe('functions for http requests related to the genre entity', () => {
    it('requests all genres', () => {
        config.get = jest.fn();
        getAllGenres();
        expect(config.get.mock.calls[0][0]).toEqual('/Genres');
    });
    it('adds genre', () => {
        config.post = jest.fn();
        const id = 1;
        const book = {bookId: 1};
        addGenre(book, id);
        expect(config.post.mock.calls[0][0]).toEqual(`/Books/${id}/AddGenre`);
    });
    it('submits new genre', () => {
        config.post = jest.fn();
        newGenre({});
        expect(config.post.mock.calls[0][0]).toEqual(`/Genres`);
    });
});