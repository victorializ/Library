import { get } from './index';

import { book } from '../../types';

function getAuthorsStr(arr) {
    let str = '';
    if(arr) {
        arr.forEach(element => {
            const { author: { firstName, lastName } } = element;
            str += firstName + ' ' + lastName + ', ';
        })
    }
    return str;
}
function getGenresStr(arr) {
    let str = '';
    if(arr) {
        arr.forEach(element => {
            const { genre: { name } } = element;
            str += name + ', ';
        });
    }
    return str;
}

export function formatData(data) {
    console.log(data);
    return {
     [book.Name]: data[book.Name], 
     [book.BookYear]: data[book.BookYear],
     [book.NumberAvailable]: data[book.NumberAvailable],
     [book.BookGenres]: getGenresStr(data[book.BookGenres]), 
     [book.BookAuthors]: getAuthorsStr(data[book.BookAuthors])
    }
}

export function getAllBooks() {
    /*
    const url = `/Books`;
    return get(url);
    */

   const resalt = [
    {
        "bookId": 1,
        "name": "Name1",
        "bookYear": 1949,
        "numberAvailable": 10,
        "bookGenres": [
            {
                "bookId": 1,
                "genreId": 1,
                "genre": {
                    "genreId": 1,
                    "name": "science fiction"
                }
            },
            {
                "bookId": 1,
                "genreId": 2,
                "genre": {
                    "genreId": 2,
                    "name": "dystopian"
                }
            }
        ],
        "bookAuthors": [
            {
                "bookId": 1,
                "authorId": 2,
                "author": {
                    "authorId": 2,
                    "firstName": "Emily",
                    "lastName": "Dickinson"
                }
            },
            {
                "bookId": 1,
                "authorId": 8,
                "author": {
                    "authorId": 8,
                    "firstName": "George",
                    "lastName": "Orwell"
                }
            }
        ]
    },  {
        "bookId": 2,
        "name": "Name2",
        "bookYear": 2000,
        "numberAvailable": 1,
        "bookGenres": [
            {
                "bookId": 2,
                "genreId": 1,
                "genre": {
                    "genreId": 1,
                    "name": "g1"
                }
            }
        ],
        "bookAuthors": [
            {
                "bookId": 2,
                "authorId": 2,
                "author": {
                    "authorId": 2,
                    "firstName": "A1",
                    "lastName": "A1"
                }
            }
        ]
    },  {
        "bookId": 3,
        "name": "Book3",
        "bookYear": 1992,
        "numberAvailable": 2,
        "bookGenres": [
            {
                "bookId": 3,
                "genreId": 1,
                "genre": {
                    "genreId": 1,
                    "name": "sf"
                }
            },
            {
                "bookId": 3,
                "genreId": 2,
                "genre": {
                    "genreId": 2,
                    "name": "d"
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
                    "lastName": "Dickinson"
                }
            },
            {
                "bookId": 6,
                "authorId": 8,
                "author": {
                    "authorId": 8,
                    "firstName": "A1",
                    "lastName": "A1"
                }
            }
        ]
    }     
   ].map(res => formatData(res));
   return new Promise((res, rej) => setTimeout(res(resalt), 200));
}