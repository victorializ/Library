const allConstants = {
    en: {
        title: 'Library',
        books: 'Books', 
        authors: 'Authors', 
        genres: 'Genres',
        login: 'Login',
        admin: 'Admin page',
        copyright: '@2019 Author', 
        available: 'Available',
        name: 'Name', 
        year: 'Year',
        filter: 'Filters',
        sort: 'Sort',
        asc: 'ASC',
        desc: 'DESC'
    },
    ru: {
        title: 'Здорова, шо надо?',
        books: 'Книженции',
        authors: 'Шляпы',
        genres: 'Жанры',
        login: 'Логин',
        admin: 'Главный штрих',
        copyright: '@2019 Две по три полоски',
        available: 'Штуки',
        name: 'Буквы на обложке', 
        year: 'Год',
        filter: 'Ищем',
        sort: 'Сортировочка подьехала',
        asc: 'Туды',
        desc: 'Сюды',

    }
};

const currentConstants = allConstants[navigator.language];
const constants = currentConstants ? currentConstants : allConstants.en; // default constants are en

export { constants };