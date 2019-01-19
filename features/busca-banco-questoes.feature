#language: pt

Funcionalidade: Busca de Banco de Questões

Cenário: Busca por termo inexistente
  Dado que eu navego para a página de busca do banco de questões
  E digito 'Science: Computers' no campo de busca
  Quando eu clicar no botão de buscar
  Então deve aparecer uma mensagem de erro com o texto 'No questions found.'

Cenário: Busca por categoria com paginação
  Dado que eu navego para a página de busca do banco de questões
  E digito 'Science: Computers' no campo de busca
  E seleciono o valor 'Category' no campo do tipo de busca
  Quando eu clicar no botão de buscar
  Então deve aparecer a listagem de questões com 25 itens
  E deve aparecer o controle de paginação

Cenário: Busca por categoria sem paginação
  Dado que eu navego para a página de busca do banco de questões
  E digito 'Harvard' no campo de busca
  Quando eu clicar no botão de buscar
  Então deve aparecer a listagem de questões com menos de 26 itens
  E não deve aparecer o controle de paginação
