
# Desafio QA

  

## Descrição

  

Os professores de um grupo educacional estão avaliando o uso de um banco de questões para auxiliar a criação das atividades para os alunos.

Eles encontraram o site [Open Trivia Database](https://opentdb.com/browse.php) que possui milhares de questões das mais variadas áreas de conhecimento.

## Objetivo

Automatizar os cenários de teste da página de busca do banco de questões acima.

## Instruções

A automação dos cenários deve ser feita utilizando Cucumber + Selenium.
Para tal, disponibilizamos os projetos bases para execução dos mesmos.
O desafio pode ser feito usando Ruby ou Javascript e por isso temos duas pastas nesse repositório em cada linguagem. Utilize a linguagem de sua preferência dentre essas duas.

Dentro de cada pasta (JS ou Ruby) possuem as instruções específicas da linguagem (pré requisitos, dependencias e etc).

## Cenários

O projeto possui 3 cenários de teste da funcionalidade de busca. O primeiro step está funcionando como demonstração.
```
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
```
## Entrega

A entrega pode ser feita por link do github ou arquivo .zip



## Informação útil
Para a execução dos testes é necessário ter o driver do navegador que será utilizado, como firefox ou chrome. Para este desafio foi utilizado o firefox e o tutorial seguido para a instalação foi esse:

1 - visite a página (https://github.com/mozilla/geckodriver/releases) e faça o download da versão mais recente do geckodriver para o seu sistema operacional - no meu caso foi para o linux "geckodriver-vX.XX.X-linux64.tar.gz"
2 - descompacte o arrquivo (tar -xvzf geckodriver-vX.XX.X-linux64.tar.gz)
3 - altera as permissões do executável (chmod +x geckodriver)
4 - mova o executável para o caminho /usr/local/bin (sudo mv geckodriver /usr/local/bin/)