# ts-starter

This is a **node.js, express, typescript** starter with minimal setup to get you up and running!

Ref: https://medium.com/@gabrieldrouin/node-js-2025-guide-how-to-setup-express-js-with-typescript-eslint-and-prettier-b342cd21c30d#e155

### Features 

- Express
- TypeScript
- Nodemon
- Eslint
- Prettier
- Jest
- Logger with Pino
- Error handling

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


