import { get, post } from './config';

function getAllGenres() {
    const url = '/Genres';
    return get(url);
}

function addGenre(book, genreId) {
    const url = `/Books/${book.bookId}/AddGenre`; //TODO
    return post(url, {genreId});
}

function newGenre(genre) {
    const url = `/Genres`; //TODO: clerify url
    return post(url, genre);
}

export { getAllGenres, addGenre, newGenre };