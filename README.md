# ToDo Com TypeScript

Uma API Rest simples, com intuito de praticar o desenvolvimento com TypeScript, utilizando SOLID e Repository Pattern

## Como rodar

Criar um .env com as variaveis que contem no .env.example
```env
PORT= //Coloque sua porta aqui
NODE_ENV= // Coloque um dos 3 dev, test, prod. (development, testing, production)

DATABASE_URL= //Caminho do banco de dados em URL
```
Utilizar os seguintes comandos:
```shell
npm i                   //para baixar as dependencias 
npx prisma migrate dev  //para criar a tabela no banco de dados
npm run dev             //para inciar o projeto
```

Acessar através da seguinte URL:
http://localhost:PORT/tasks

### Banco de dados:

Pode ser criado em seu computador normalmente ou utilizando o arquivo do docker no projeto