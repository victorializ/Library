const allConstants = {
    en: {
        title: 'Library',
        books: 'Books', 
        bookAuthors: 'Authors', 
        bookGenres: 'Genres',
        login: 'Login',
        admin: 'Admin page',
        copyright: '@2019 Author', 
        available: 'Available',
        name: 'Name', 
        bookYear: 'Year',
        filter: 'Filters',
        sort: 'Sort',
        asc: 'ASC',
        desc: 'DESC', 
        nobooks: 'No books available!', 
        ok: 'Ok!'
    },
    ru: {
        title: 'Здорова, шо надо?',
        books: 'Книженции',
        bookAuthors: 'Шляпы',
        bookGenres: 'Жанры',
        login: 'Логин',
        admin: 'Главный штрих',
        copyright: '@2019 Две по три полоски',
        available: 'Штуки',
        name: 'Буквы на обложке', 
        bookYear: 'Год',
        filter: 'Ищем',
        sort: 'Сортировочка подьехала',
        asc: 'Туды',
        desc: 'Сюды',
        nobooks: 'Сорян дорогой!',
        ok: 'Согласен'
    }
};

const currentConstants = allConstants[navigator.language];
const constants = currentConstants ? currentConstants : allConstants.en; // default constants are en

export { constants };