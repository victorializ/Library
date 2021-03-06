const allConstants = {
    en: {
        title: 'Library',
        books: 'Books', 
        bookAuthors: 'Authors', 
        bookGenres: 'Genres',
        bookGenre: 'Genre',
        login: 'Login',
        copyright: '@2019 Author', 
        available: 'Available',
        name: 'Name', 
        bookYear: 'Year',
        filter: 'Filters',
        sort: 'Sort',
        asc: 'ASC',
        desc: 'DESC', 
        nobooks: 'No books available!', 
        ok: 'Ok!', 
        firstName: 'First name', 
        lastName: 'Last name', 
        password: 'Password', 
        email: 'Email', 
        agree: 'I agree to the Terms and Conditions', 
        loggedin: 'You are logged in!', 
        personalAccount: "Go to personal account", 
        logout: 'Logout', 
        register: 'Registration', 
        registered: 'Registered successfully', 
        reenter: 'Reenter password', 
        status: 'Status', 
        returned: 'Returned', 
        return: 'Please return book till', 
        expired: 'Expired!', 
        userslist: 'Users list', 
        orders: 'Your orders',
        order: 'Create order',
        allOrders: 'All orders', 
        manage: 'Manage library', 
        success: 'Success!',
        numberAvalible: 'Number Available', 
        add: 'Add', 
        save: 'Save', 
        finishOrder: 'Finish order'
    },
    ru: {
        title: 'Здорова, шо надо?',
        books: 'Книженции',
        bookAuthors: 'Шляпы',
        bookGenres: 'Жанры',
        bookGenre: 'Жанр',
        login: 'Логин',
        copyright: '@2019 Две по три полоски',
        available: 'Штуки',
        name: 'Буквы на обложке', 
        bookYear: 'Год',
        filter: 'Ищем',
        sort: 'Сортировочка подьехала',
        asc: 'Туды',
        desc: 'Сюды',
        nobooks: 'Сорян дорогой!',
        ok: 'Согласен', 
        firstName: 'Имя', 
        lastName: 'Погонялово', 
        password: '1111', 
        email: 'Мыло', 
        agree: 'Я дурак!', 
        loggedin: 'О, привет!',
        personalAccount: "Погнали", 
        logout: 'Встал и вышел', 
        register: 'я не с этого района', 
        registered: 'Ну здорова', 
        reenter: 'Еще разок', 
        status: 'Статус', 
        returned: 'Возвращена', 
        return: 'Верни!', 
        expired: 'Тікай з села', 
        userslist: 'Пацаны', 
        orders: 'Записываемся на ноготочки',
        order: 'Новый заказ',
        allOrders: 'Заказики', 
        manage: 'Темный лес', 
        success: 'Это успех!', 
        numberAvalible: 'Количество', 
        add: 'Добавить шото', 
        save: 'Все окей!',
        finishOrder: 'Разходимся'
    }
};

const currentConstants = allConstants[navigator.language];
const constants = currentConstants ? currentConstants : allConstants.en; // default constants are en

export { constants };