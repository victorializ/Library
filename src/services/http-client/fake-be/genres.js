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
    console.log(getAllGenres.name);
    return promisify(mock);
}

export function addGenre(book, genreId) {
    console.log(addGenre.name, book.bookId, genreId);
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
    console.log(newGenre.name, JSON.stringify(genre));
    return promisify({
        data: {}
    })
}