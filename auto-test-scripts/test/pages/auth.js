const { By, until } = require('selenium-webdriver');

const selectors = { 
    registration: {
        link: By.className('registration__link'),
        firstName: By.className('registration__firstName'),
        lastName: By.className('registration__lastName'),
        email: By.className('registration__email'),
        password: By.className('registration__password'),
        reenter: By.className('registration__reenter'),
        agree: By.className('registration__agree'),
        submit: By.className('registration__button'),
        registered: By.className('registered'),
        login: By.className('registered__login')
    },
    login: {
        form: By.className('login__form'),
        email: By.className('login__input-email'),
        password: By.className('login__input-password'),
        submit: By.className('login__button'),
        loggedIn: By.css('.logged-in .ui.center.aligned.header'),
        logout: By.css('.logged-in .logout'),
        account: By.css('.logged-in .orders')
    },
    account: {
        order: By.css('.order__book .content .header')
    }
};

async function auth(driver) {
    await driver.wait(() => until.elementLocated(selectors.login.form, 1000));
    await driver.sleep(1000);

    const navigateToRegister = async () => {
        const link = await driver.findElement(selectors.registration.link);
        return await link.click();
    };

    const register = async (firstName, lastName, email,
        password, reenter) => {
        const firstNameInput = await driver.findElement(selectors.registration.firstName);
        const lastNameInput = await driver.findElement(selectors.registration.lastName);
        const emailInput = await driver.findElement(selectors.registration.email);
        const passwordInput = await driver.findElement(selectors.registration.password);
        const reenterInput = await driver.findElement(selectors.registration.reenter);
        const agreeInput = await driver.findElement(selectors.registration.agree);
        const submitButton = await driver.findElement(selectors.registration.submit);

        await firstNameInput.sendKeys(firstName);
        await lastNameInput.sendKeys(lastName);
        await emailInput.sendKeys(email);
        await passwordInput.sendKeys(password);
        await reenterInput.sendKeys(reenter);
        await agreeInput.click();
        await submitButton.click();

        await driver.sleep(3000);
        const registered = await driver.findElement(selectors.registration.registered);
        return registered.getText(); //Registered successfully
    };

    const navigateToLogin = async () => {
        const login = await driver.findElement(selectors.registration.login);
        return login.click();
    };

    const login = async (email, password) => {
        const emailInput = await driver.findElement(selectors.login.email);
        const passwordInput = await driver.findElement(selectors.login.password);
        const submitButton = await driver.findElement(selectors.login.submit);

        await emailInput.sendKeys(email);
        await passwordInput.sendKeys(password);
        await submitButton.click();

        await driver.sleep(3000);
        const loggedIn = await driver.findElement(selectors.login.loggedIn);
        return loggedIn.getText(); //You are logged in!
    };

    const navigateToAccount = async () => {
        const link = await driver.findElement(selectors.login.account);
        return link.click();
    };

    const logout = async () => {
        const link = await driver.findElement(selectors.login.logout);
        return link.click();
    };

    const getOrders = async () => {
        const orders = await driver.findElements(selectors.account.order);
        return Promise.all(orders.map(async val => await val.getText()));
    };

    return {
        navigateToRegister,
        navigateToAccount,
        navigateToLogin,
        register,
        login,
        logout,
        getOrders
    };
}

module.exports = auth;