import { get, post } from './config';

export function getAllGenres() {
    const url = '/Genres'; //TODO: clerify url
    return get(url);
}

export function addGenre(book, genreId) {
    const url = `/Books/${book.bookId}/AddGenre`; //TODO
    return post(url, {genreId});
}