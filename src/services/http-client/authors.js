import { get } from './index';

import { author, authorsDetails } from '../../types';
import { formatData } from './books';

export function getAllAuthors() {
    /*
    const url = `/Authors`;
    return get(url);
    */
   return [
    {
        "authorId": 1,
        "firstName": "Jane",
        "lastName": "Austen",
        "bookAuthors": []
    },
    {
        "authorId": 2,
        "firstName": "Emily",
        "lastName": "Dickinson",
        "bookAuthors": [
            {
                "bookId": 6,
                "book": {
                    "bookId": 6,
                    "name": "1984",
                    "bookYear": 1949,
                    "numberAvailable": 10,
                    "bookGenres": [],
                    "bookAuthors": [
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
                "authorId": 2
            }
        ]
    },
    {
        "authorId": 4,
        "firstName": "Haruki",
        "lastName": "Murakami",
        "bookAuthors": []
    },
    {
        "authorId": 6,
        "firstName": "Thomas",
        "lastName": "Hardy",
        "bookAuthors": []
    },
    {
        "authorId": 7,
        "firstName": "Oscar",
        "lastName": "Wilde",
        "bookAuthors": []
    },
    {
        "authorId": 8,
        "firstName": "George",
        "lastName": "Orwell",
        "bookAuthors": [
            {
                "bookId": 6,
                "book": {
                    "bookId": 6,
                    "name": "1984",
                    "bookYear": 1949,
                    "numberAvailable": 10,
                    "bookGenres": [],
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
                        }
                    ]
                },
                "authorId": 8
            }
        ]
    },
    {
        "authorId": 9,
        "firstName": "Emily",
        "lastName": "Dickinson",
        "bookAuthors": []
    }
].map(value => {
    const { authorId, firstName, lastName, bookAuthors } = value;
    console.log(value.bookAuthors, 'book');
    return {
        authorId, 
        firstName,
        lastName,
        ...formatData(bookAuthors)
    }
})
 
}
