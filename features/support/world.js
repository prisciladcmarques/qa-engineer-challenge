// This file sets up the environment for tests in cucumber js.
var firefox = require('selenium-webdriver/firefox');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var {defineSupportCode} = require('cucumber');
var driver = new webdriver.Builder().forBrowser('firefox').build();
function CustomWorld() {
  this.driver = driver;
}

defineSupportCode(function({setWorldConstructor, AfterAll}) {
  setWorldConstructor(CustomWorld);
  AfterAll(() => driver.quit());
})