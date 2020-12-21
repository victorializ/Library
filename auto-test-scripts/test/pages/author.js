const { By, until } = require('selenium-webdriver');

const selectors = { 
    author: By.css('.authors__list .authors__list-item .header'),
    selected: By.css('.authors--selected__name')
};

async function author(driver) {
    await driver.wait(() => until.elementLocated(selectors.author, 3000));
    await driver.sleep(3000);

    const getAuthors = async () => {
        return driver.findElements(selectors.author);
    };

    const getAuthor = async () => {
        return driver.findElement(selectors.author);
    };

    const getSelected = async () => {
        return driver.findElement(selectors.selected);
    };

    return {
        getAuthor,
        getAuthors,
        getSelected
    };
};

module.exports = author;