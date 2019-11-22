function getStr(arr, formatFunc) {
    let str = '';
    if(arr) {
        arr.forEach(element => {
            str += formatFunc(element);
        })
    }
    return str;
}

function authors(obj) {
    const { author: { firstName, lastName } } = obj;
    return firstName + ' ' + lastName + ', ';
}

function genres(obj) {
    const { genre: { name } } = obj;
    return name + ', ';
}

export function formatData(data) {
    const { 
        bookName, 
        bookYear, 
        numberAvailable, 
        bookGenres, 
        bookAuthors 
    } = data;
    return {
     bookName, 
     bookYear,
     numberAvailable,
     bookGenres: getStr(bookGenres, genres), 
     bookAuthors: getStr(bookAuthors, authors)
    }
}