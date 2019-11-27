import { get } from './index';
import { promisify } from '../../utils/utils';
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
    },
    {
        "bookId": 1,
        "name": "B1",
        "bookYear": 2000,
        "numberAvailable": 1,
        "bookGenres": [
            {
                "bookId": 1,
                "genreId": 2,
                "genre": {
                    "genreId": 2,
                    "name": "g1"
                }
            }
        ],
        "bookAuthors": [
            {
                "bookId": 1,
                "authorId": 3,
                "author": {
                    "authorId": 3,
                    "firstName": "A1",
                    "lastName": "A1",
                    "bookAuthors": []
                }
            }
        ]
    }
    ]
};

export function getAllBooks() {
    /*
    const url = `/Books`;
    return get(url);
    */
   return promisify(mock);
}