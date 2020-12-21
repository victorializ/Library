const { By, until } = require('selenium-webdriver');

const selectors = { 
    main: By.className('app__header__logo'),
    profile: By.className('app__header__current-user'),
    login: By.className('nav__login'),
    author: By.className('nav__author'),
    book: By.className('nav__books')
};


async function nav(driver) {

    if('Library' !== await driver.getTitle()) {
        throw 'This is not the library!';
    } else {
        await driver.wait(() => until.elementLocated(selectors.book, 1000));
        await driver.sleep(1000);
    }

    const to = async (page) => {
        const link = driver.findElement(selectors[page]);
        await link.click();
        return await driver.getCurrentUrl();
    };

    return {
        to
    };
};

module.exports = nav;