const { By, until } = require('selenium-webdriver');

const selectors = { 
    app: By.className('app__wrapper'),
    menu: By.className('books__menu'),
    searchbar: By.css('.ui.search input'),
    filters: {
        name: By.css('.book__name'),
        year: By.css('.book__bookYear'),
        authors: By.css('.book__bookAuthors'),
        genres: By.css('.book__bookGenres'),
        reset: By.css('.books__search .books__reset-filter')
    },
    sortDirections: {
        asc: By.css('.books__filter .book__asc'),
        desc: By.css('.books__filter .book__desc'),
        reset: By.css('.books__filter .books__reset-filter')
    },
    book: {
        item: By.css('.books__list .ui.card.book'),
        name: By.css('.books__list .ui.card.book .header'),
        year: By.css('.books__list .ui.card.book .meta'),
        authors: By.css('.books__list .ui.card.book .book__authors'),
        genres: By.css('.books__list .ui.card.book .book__genres'),
        order: By.css('.books__list .extra.content .ui.basic.button'),
        ordered: By.css('.books__list .ui.card.book .ui.olive.button')
    }
};

async function booksPage(driver) {
    
    await driver.wait(() => until.elementLocated(selectors.book.item, 3000));
    await driver.sleep(3000);

    const getBooks = async () => {
        return driver.findElements(selectors.book.item);
    };

    const getBooksData = async key => {
        const values = await driver.findElements(selectors.book[key]);
        return Promise.all(values.map(async value => await value.getText()));
    };

    const selectFilter = async name => {
        const filter = await driver.findElement(selectors.filters[name]);
        return filter.click();
    };

    const selectSortDirection = async name => {
        const direction = await driver.findElement(selectors.sortDirections[name]);
        return direction.click();
    };

    const search = async (key, value) => {
        await selectFilter(key);
        const input = await driver.findElement(selectors.searchbar);
        return input.sendKeys(value);
    };

    const sort = async (filter, direction) => {
        await selectFilter(filter);
        await selectSortDirection(direction);
        return getBooksData(filter);
    };

    const order = async () => {
        const orderButton = await driver.findElement(selectors.book.order);
        await orderButton.click();
        await driver.sleep(3000);
        return driver.findElement(selectors.book.ordered);
    };

    return {
        getBooks,
        getBooksData,
        selectFilter,
        selectSortDirection,
        search,
        sort,
        order
    };
}

module.exports = booksPage;