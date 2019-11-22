import { get } from './index';

const mock = {
    data : [
    {
        "bookId": 6,
        "name": "1984",
        "bookYear": 1949,
        "numberAvailable": 10,
        "bookGenres": [
            {
                "bookId": 6,
                "genreId": 1,
                "genre": {
                    "genreId": 1,
                    "name": "science fiction"
                }
            },
            {
                "bookId": 6,
                "genreId": 2,
                "genre": {
                    "genreId": 2,
                    "name": "dystopian"
                }
            }
        ],
        "bookAuthors": [
            {
                "bookId": 6,
                "authorId": 2,
                "author": {
                    "authorId": 2,
                    "firstName": "Emily",
                    "lastName": "Dickinson",
                    "bookAuthors": []
                }
            },
            {
                "bookId": 6,
                "authorId": 8,
                "author": {
                    "authorId": 8,
                    "firstName": "George",
                    "lastName": "Orwell",
                    "bookAuthors": []
                }
            }
        ]
    }]
};

export function getAllBooks() {
    /*
    const url = `/Books`;
    return get(url);
    */
   return new Promise((res, rej) => setTimeout(res(mock), 200));
}