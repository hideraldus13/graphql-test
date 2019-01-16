# Teste de GraphQL / Node.js

Estrutura simples para testes de GraphQL.

## Fast Track
```bash
$ git clone https://github.com/hideraldus13/graphql_test.git
$ cd graphql_test
$ npm i
$ node index.js

//Comandos para Windows. Linux ou peso de papel não sei como funciona, mas é por aí.
```

## Testando a aplicação

### Retornando todos os usuários

Cole no navegador http://localhost:3000/user?query={users{id,name,age,knowledge{language,frameworks}}}

Manipule 'id,name,age,knowledge{language,frameworks}' para refinar o resultado da query.


### Retornando um usuário específico

Cole no navegador http://localhost:3000/user?query={user(id:1){id,name,age,knowledge{language,frameworks}}}

Nesta query, troque o valor de 'id' para buscar outros 'users'. 

Manipule 'id,name,age,knowledge{language,frameworks}' para refinar o resultado da query.


<b> Be Happy! </b>



> Contribua com este aplicativo e ajude o TEAM RUD BULL a crescer!
