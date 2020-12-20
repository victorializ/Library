const assert = require('assert');

const setUpTest = require('./setUpTests');
//const todoPage = require('./todoPage');

describe('todoPage', () => {
  let driver;
  let page;
  before(async () => {
    const url = 'http://todomvc.com/examples/angularjs/#/';
    driver = await setUpTest(url);
    //page = await todoPage(driver);
  });
  after(async () => {
    await driver.quit();
  });
});