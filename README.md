# ts-starter

This is a **node.js, express, typescript** starter with minimal setup to get you up and running!

Ref: 
- https://medium.com/@gabrieldrouin/node-js-2025-guide-how-to-setup-express-js-with-typescript-eslint-and-prettier-b342cd21c30d#e155
- https://transloadit.com/devtips/building-restful-apis-with-node-js-express-and-typescript/
### Technical Features 

- Express.js + TypeScript
- Nodemon
- Linting and formatting (eslint, prettier)
- Testing: unit tests (Jest), integration (supertest)
- Logger (Pino)
- Error handling
- API documentation with swagger


### 📦 Install dependencies

1. Setup express amd typescript

```bash
npm init
```

```bash
npm install express typescript @types/express @types/node nodemon --save-dev
```

Create a new file called tsconfig.json in the root of your project.

2. To add ESLint and Prettier to your project, follow these steps:

Install the necessary ESLint plugins and configurations for TypeScript:

```bash
npm install eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier --save-dev
```

Install the necessary ESLint plugin for Node.js:

```bash
npm install eslint-plugin-node --save-dev
```

Create a new .eslintrc.json file in the root directory of your project.
Create a new .prettierrc file in the root directory of your project.

3. [Logging wth Pino](https://github.com/pinojs/pino)

```bash
npm install pino pino-http pino-pretty
```

4. Centralized error handler

5. [Getting started with Jest](https://jestjs.io/docs/getting-started)

```bash
npm install --save-dev jest ts-jest @types/jest supertest @types/supertest
```

Generate a basic configuration file:

```bash
npm init jest@latest
```

6. API documentation integrating Swagger/OpenAPI

```bash
npm install swagger-ui-express swagger-jsdoc
npm i --save-dev @types/swagger-jsdoc @types/swagger-ui-express
```




### Deployment considerations
When preparing your API for production, keep in mind the following best practices:

Disable automatic schema synchronization by setting synchronize to false in your TypeORM configuration.
Configure secure HTTP headers and rate limiting.
Use environment variables to manage sensitive configurations and credentials.
Thoroughly test your API using unit and integration tests.



A good API document must provide detailed information about each endpoint, including:
HTTP method (GET, POST, PUT, DELETE, etc.).
URL paths and any required/optional parameters.
Request and response formats, including expected headers and body contents.
Error handling, including error codes and messages for different failure scenarios.
Examples of typical requests and responses to illustrate how the API works in practice.