import { promisify } from '../../../utils/utils';

const mock = {
    data: [
        {
            "genreId": 1,
            "name": "genre1"
        },
        {
            "genreId": 2,
            "name": "genre2"
        },
        {
            "genreId": 3,
            "name": "genre3"
        }
    ]
}

export function getAllGenres() {
    return promisify(mock);
}

export function addGenre(book, genreId) {
    return promisify({
        data: {
            ...book, 
            "bookGenres": [
                {
                    "bookId": book.bookId,
                    "genreId": genreId,
                    "genre": {
                        "genreId": genreId,
                        "name": "science fiction"
                    }
                }
            ]
        }
    })
}

export function newGenre(genre) {
    return promisify({
        data: {}
    })
}