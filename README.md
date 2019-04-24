# Bootcamp - NodeJS - Desafio 1

Aplicação que aceita a entrada de um campo do usuário por um formulário e o redireciona para a página correta baseado em sua idade.

Utilizando **ExpressJS, Nunjucks, EditorConfig e ESLint**.

## Rotas

- `/`: Rota inicial que renderiza uma página com um formulário com um único campo `age` que representa a idade do usuário;
- `/check`: Rota chamada pelo formulário da página inicial via método POST que checa se a idade do usuário é maior ou igual a 18 e o redireciona para a rota `/major`, caso contrário o redireciona para a rota `/minor`;
- `/major`: Rota que renderiza uma página com o texto: `Você é maior de idade e possui x anos`, onde `x` é o valor informado no input do formulário;
- `/minor`: Rota que renderiza uma página com o texto: `Você é menor de idade e possui x anos`, onde `x` é o valor informado no input do formulário;

## Middlewares

- Há um middleware que é chamado nas rotas `/major` e `/minor` e checa se a informação de idade não está presente nos Query Params.
  Se essa informação não existir deve redirecionar o usuário para a página inicial com o formulário, caso contrário o middleware deve apenas continuar com o fluxo normal.

- Há um middleware que é chamado na rota `/major` que checa se a informação de idade passado no Query Params é maior ou igual a 18.
  Se essa informação for falsa, o usuário é redirecionado para a página `/minor`, caso contrário o middleware continua com o fluxo normal.

- Há um middleware que é chamado na rota `/minor` que checa se a informação de idade passado no Query Params é menor do que 18.
  Se essa informação for falsa, o usuário é redirecionado para a página `/major`, caso contrário o middleware continua com o fluxo normal.
