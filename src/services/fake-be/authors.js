import { promisify } from '../../utils/utils';

const mock = { 
    data: [
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
    ]
};

export function getAllAuthors() { 
    console.log('get all authors');
    return promisify(mock);
}

export function getAuthor(id) {
    console.log('get author', id);
    return promisify(
        {
            data: mock.data.find(
                    ({authorId}) => authorId === id
                )
        }
    );
}

export function newAuthor({firstName, lastName}) {
    console.log('new author', firstName, lastName);
    return promisify(
        {
            data: {
                "authorId":  5,
                "firstName": {firstName},
                "lastName": {lastName},
                "bookAuthors": []
            }
        }
    )
}

export function addAuthor(book, authorId) {
    console.log(book);
    console.log('add author', book.bookId, authorId);
    return promisify({
        data: {
            ...book, 
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
        }
    });
}