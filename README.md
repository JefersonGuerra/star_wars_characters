#### Crie o arquivo (.env) com as  variáveis de ambiente, podendo seguir os exemplos do arquivo (.env.example)
 - O projeto executará o end-point no arquivo (.env), porém caso não tenha setado a variável de ambiente, o padrão será: https://swapi.dev/api/people

 - Para executar o projeto com Docker o arquivo (.env) é obrigatório

##### Exemplos:
```bash
API_BASE_URL="https://swapi.dev/api/people"
```

 #### Crie o arquivo (cypress.env.json) com as  variáveis de ambiente para teste e2e, podendo seguir os exemplos do arquivo (cypress.env-example.json)

##### Exemplos:
```bash
{
    "host": "http://localhost:3000",
    "api_server": "https://swapi.dev/api/people"
}
```
## Executando o projeto em modo padrão

Primeiro instale as dependências na raiz do projeto:

```bash
npm install
# ou
yarn install
```

#### Executar projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

#### Executar projeto em modo de produção:

```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

## Executando o projeto com Docker:

 - Para executar o projeto com Docker o arquivo (.env) é obrigatório

#### Executar projeto em modo de desenvolvimento:

```bash
docker-compose up next-app-dev -d
```

#### Executar projeto em modo de produção:

```bash
docker-compose up next-app -d
```
#### Executar o container de desenvolvimento e produção ao mesmo tempo:

```bash
docker-compose up -d
```
## Executar teste (e2e) com Cypress:

##### Crie o arquivo (cypress.env.json) com as  variáveis de ambiente para teste e2e, podendo seguir os exemplos do arquivo (cypress.env-example.json)

#### Executando teste:
```bash
npm run test
# ou
yarn test
```

- Executando o comando irá abrir uma janela com duas opções E2E Testing e Component Testing, click em E2E Testing

<img src="/public/readme/1.jpg">

- Selecione o navegador para realização do teste e click em: Start E2E Testing in ("Navegador escolhido")

<img src="/public/readme/2.jpg">

- Na aba do menu lateral click em Specs e selecione o teste home.cy.js

<img src="/public/readme/3.jpg">