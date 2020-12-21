export function getStr(arr, formatFunc) {
    return arr.reduce((accumulator, current) => 
        `${accumulator} ${formatFunc(current)}`, ''
    ).slice(0, -1).trim();
}

export function authors(obj) {
    const { author: { firstName, lastName } } = obj;
    return `${firstName} ${lastName},`;
}

export function genres(obj) {
    const { genre: { name } } = obj;
    return `${name},`;
}

export function formatData(
    { 
        bookId,
        name, 
        bookYear, 
        numberAvailable, 
        bookGenres, 
        bookAuthors 
    }) {
    return {
        id: bookId,
        name, 
        bookYear,
        numberAvailable,
        bookGenres: getStr(bookGenres, genres), 
        bookAuthors: getStr(bookAuthors, authors)
    }
}