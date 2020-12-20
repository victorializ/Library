import { formatData } from './books';

const data = {
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
};

describe('books data formating', () => {
    it('it should format books data', () => {
        const expectedData = {
            id: 6,
            name: '1984', 
            bookYear: 1949,
            numberAvailable: 10,
            bookGenres: 'science fiction, dystopian',
            bookAuthors: 'Emily Dickinson, George Orwell'
        };
        expect(formatData(data)).toEqual(expectedData);
    });
});