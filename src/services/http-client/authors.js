import { get, post } from './config';

export function getAllAuthors() {
    const url = `/Authors`;
    return get(url);
}

export function getAuthor(id) {   
    const url = `/Authors/${id}`;
    return get(url);
}

export function newAuthor(firstName, lastName) {
    const url = `/Authors`;
    return post(url, {firstName, lastName});
}

export function addAuthor(id, authorId) {
    const url = `/Books/${id}/AddAuthor`;
    return post(url, {authorId});
}