import { get, post } from './config';

export function getAllBooks() {
    const url = `/Books`;
    return get(url);
}

export function newBook(Name, BookYear, NumberAvailable) {
    const url = `/Books`
    return post(url, {Name, BookYear, NumberAvailable});
}