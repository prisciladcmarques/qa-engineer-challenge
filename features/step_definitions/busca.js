var { defineSupportCode } = require('cucumber');
var webdriver = require('selenium-webdriver');
var assert = require('assert');

defineSupportCode(({ Given, When, Then }) => {
  //1) Scenario: Busca por termo inexistente 

  Given('que eu navego para a página de busca do banco de questões', { timeout: 60 * 1000 }, function () {
    return this.driver.get('https://opentdb.com/browse.php');
  });

  Given('digito {string} no campo de busca', { timeout: 60 * 1000 }, function (subjectSearchScience) {
    return this.driver.findElement(webdriver.By.id("query")).sendKeys(subjectSearchScience);
  }); 

  When('eu clicar no botão de buscar', { timeout: 60 * 1000 }, function () {
    return this.driver.findElement(webdriver.By.xpath("/html/body/div[1]/form/div/button")).click();
  });

  Then('deve aparecer uma mensagem de erro com o texto {string}', function (message) {
    var xpathErrorMessage = '/html/body/div[2]/div[@class="alert alert-danger"]';
    return this.driver.findElement(webdriver.By.xpath(xpathErrorMessage))
    .then(function(element) {
      assert.strictEqual(element.deepEqual.message, message);
    });      
  });
  
  //2) Scenario: Busca por categoria com paginação

  Given('seleciono o valor {string} no campo do tipo de busca', { timeout: 60 * 1000 }, function (string) {
    var categoryXpath = '//*[@id="type"]/option[@value="Category"]';
    var clickcategory = this.driver.findElement(webdriver.By.xpath(categoryXpath)).click();
    return clickcategory;
  });

  Then('deve aparecer a listagem de questões com {int} itens', { timeout: 60 * 1000 }, function (numElements) {
    var xpathTable = '/html/body/div[2]/table/tbody/tr';
    return this.driver.findElements(webdriver.By.xpath(xpathTable))
      .then(function (elems) {
        assert.deepEqual(elems.length, numElements);
      });
  });

  Then('deve aparecer o controle de paginação', { timeout: 60 * 1000 }, function () {
    var xpathPages = '/html/body/div[2]/center';
    return this.driver.findElements(webdriver.By.xpath(xpathPages))
      .then(function (elem) {
        assert.ok(elem);
      });
  });

  //3) Scenario: Busca por categoria sem paginação

  Given('digito o texto {string} no campo de busca', { timeout: 60 * 1000 }, function (subjectSearchHavard) {
    return this.driver.findElement(webdriver.By.id("query")).sendKeys(subjectSearchHavard);

  });

  Then('deve aparecer a listagem de questões com menos de {int} itens', { timeout: 60 * 1000 }, function (numItens) {
    var xpathTable = '/html/body/div[2]/table/tbody';
    return this.driver.findElements(webdriver.By.xpath(xpathTable))
      .then(function (elems) {
        if(elems < numItens){
          var quantItens = true;
          console.log(quantItens);
          assert.ok(quantItens);
        }
      });
  });

  Then('não deve aparecer o controle de paginação', { timeout: 60 * 1000 }, function () {
    var xpathPageWithoutPagination = '//*[@id="page-top"]';
    return this.driver.findElements(webdriver.By.xpath(xpathPageWithoutPagination))
      .then(function (elem) {
        assert.ok(elem);
      });
  });
});