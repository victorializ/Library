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
    }
];
   return new Promise((res, rej) => setTimeout(res(resalt), 200));
}