var { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, When, Then }) => {

  Given('que eu navego para a página de busca do banco de questões', { timeout: 60 * 1000 }, function() {
    return this.driver.get('https://opentdb.com/browse.php');
  });
});