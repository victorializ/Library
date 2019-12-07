function getStr(arr, formatFunc) {
    return arr.reduce((accumulator, current) => 
        `${accumulator} ${formatFunc(current)}`, ''
    );
}

function authors(obj) {
    const { author: { firstName, lastName } } = obj;
    return `${firstName} ${lastName},`;
}

function genres(obj) {
    const { genre: { name } } = obj;
    return `${name},`;
}

export function formatData(
    { 
        name, 
        bookYear, 
        numberAvailable, 
        bookGenres, 
        bookAuthors 
    }) {
    return {
        name, 
        bookYear,
        numberAvailable,
        bookGenres: getStr(bookGenres, genres), 
        bookAuthors: getStr(bookAuthors, authors)
    }
}