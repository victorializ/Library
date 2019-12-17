import { get, post } from './config';

export function getAllBooks() {
    const url = `/Books`;
    return get(url);
}

export function newBook(book) {
    const url = `/Books`
    return post(url, book);
}