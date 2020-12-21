const assert = require('assert');

const setUpTest = require('./setUpTests');
const bookPageObject = require('./pages/books');
const navigationObject = require('./pages/nav');
const authorPageObject = require('./pages/author');
const authPageObject = require('./pages/auth');

const base = 'http://localhost:5000';

const user = {
  name: 'Name',
  lastName: 'LastName',
  email: 'user@mail.com',
  password: 'Admin1@3'
};

describe('Library', () => {
  let driver;
  let bookPage;
  let authorPage;
  let navigate;
  let authPage;
  before(async () => {
    driver = await setUpTest(base);
    navigate = await navigationObject(driver);
  });
  after(async () => {
    await driver.quit();
  });
  
  it('navigates to books page', async () => {
    const page = 'book';
    const curl = await navigate.to(page);
    assert.strictEqual(curl, `${base}/${page}`);
    bookPage = await bookPageObject(driver);
  });
  it('renders books list', async () => {
    const books = await bookPage.getBooks();
    assert.ok(books.length > 0);
  });
  it('sorts books by name in asc diresction', async () => {
    let values = await bookPage.getBooksData('name');
    const sorted = values.sort();

    names = await bookPage.sort('name', 'asc');
    assert.deepStrictEqual(sorted, values);

    await bookPage.selectSortDirection('reset');
    await bookPage.selectFilter('reset');
  });
  it('sorts books by name in desc diresction', async () => {
    let values = await bookPage.getBooksData('name');
    const sorted = values.reverse();

    values = await bookPage.sort('name', 'desc');
    assert.deepStrictEqual(sorted, values);

    await bookPage.selectSortDirection('reset');
    await bookPage.selectFilter('reset');
  });
  it('sorts books by year in asc diresction', async () => {
    let values = await bookPage.getBooksData('year');
    const sorted = values.sort();

    values = await bookPage.sort('year', 'asc');
    assert.deepStrictEqual(sorted, values);
    
    await bookPage.selectSortDirection('reset');
    await bookPage.selectFilter('reset');
  });
  it('sorts books by year in desc diresction', async () => {
    let values = await bookPage.getBooksData('year');
    const sorted = values.reverse();

    values = await bookPage.sort('year', 'desc');
    assert.deepStrictEqual(sorted, values);
    
    await bookPage.selectSortDirection('reset');
    await bookPage.selectFilter('reset');
  });
  it('searches books by name', async () => {
    let values = await bookPage.getBooksData('name');
    const search = values[0];

    await bookPage.search('name', search);
    values = await bookPage.getBooksData('name');
    assert.ok(values.every(value => value.includes(search)));

    await bookPage.search('reset', '');
  });
  it('searches books by genre', async () => {
    let values = await bookPage.getBooksData('genres');
    const search = values[0];

    await bookPage.search('genres', search);
    values = await bookPage.getBooksData('genres');
    assert.ok(values.every(value => value.includes(search)));

    await bookPage.search('reset', '');
  });
  it('searches books by authors', async () => {
    let values = await bookPage.getBooksData('authors');
    const search = values[0];

    await bookPage.search('authors', search);
    values = await bookPage.getBooksData('genres');
    assert.ok(values.every(value => value.includes(search)));

    await bookPage.search('reset', '');
  });
  it('navigates to authors page', async () => {
    const page = 'author';
    const curl = await navigate.to(page);
    assert.strictEqual(curl, `${base}/${page}`);
    authorPage = await authorPageObject(driver);
  });
  it('renders authors list', async () => {
    const authors = await authorPage.getAuthors();
    assert.ok(authors.length > 0);
  });
  it('selects author from list', async () => {
    const author = await authorPage.getAuthor();
    const name = await author.getText();
    await author.click();
    await driver.sleep(3000);
    const selected = await authorPage.getSelected();
    const selectedName = await selected.getText();
    assert.strictEqual(name, selectedName);
  });
  it('navigates to main page', async () => {
    const page ='main';
    const curl = await navigate.to(page);
    assert.strictEqual(curl, `${base}/`);
  });
  it('navigates to login page', async () => {
    const page = 'login';
    const curl = await navigate.to(page);
    assert.strictEqual(curl, `${base}/${page}`);
    authPage = await authPageObject(driver);
  });
  it('registers', async () => {
    await authPage.navigateToRegister();
    const message = await authPage.register(user.name, user.lastName, user.email, user.password, user.password);
    assert.strictEqual(message, 'Registered successfully');
  });
  it('login', async () => {
    await authPage.navigateToLogin();
    const message = await authPage.login(user.email, user.password);
    assert.strictEqual(message, 'You are logged in!');
  });
  it('orders book', async () => {
    await navigate.to('book');
    await driver.sleep(3000);
    const ordered = await bookPage.order();
    await ordered.click();
    await driver.sleep(3000);
    const orders = await authPage.getOrders();
    assert.strictEqual(orders.length, 1);
  });
});