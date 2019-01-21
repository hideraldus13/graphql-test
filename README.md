# Teste de GraphQL / Node.js

Estrutura simples para testes de GraphQL.

## Fast Track
* Pré requisitos: <b>Git e Node</b>
```bash
$ git clone https://github.com/hideraldus13/graphql_test.git
$ cd graphql_test
$ npm i
$ npm start

//Comandos para Windows. Linux ou Mac não sei como funciona, mas é por aí.
```

## Testando a aplicação

### Retornando todos os usuários

Cole no navegador http://localhost:3000/teste?query={usuarios{id,nome,idade,cidade,experiencia{linguagem,frameworks}}}

Manipule <i>'id,nome,idade,cidade,experiencia{linguagem,frameworks}'</i> para refinar o resultado da query.


### Retornando um usuário específico

Cole no navegador http://localhost:3000/teste?query={usuario(id:1){id,nome,idade,cidade,experiencia{linguagem,frameworks}}}

Nesta query, troque o valor de 'id' para buscar outros 'users'. 

Manipule <i>'id,nome,idade,cidade,experiencia{linguagem,frameworks}'</i> para refinar o resultado da query.


<b> Be Happy! </b>



> Contribua com este aplicativo e ajude o TEAM RUD BULL a crescer!
