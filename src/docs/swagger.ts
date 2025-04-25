import config from '../config'
import swaggerJSDoc from 'swagger-jsdoc'

// Swagger definition
const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'Simple REST API with TypeScript and Express',
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
      },
    ],
  },
  apis: ['./src/routes/**/*.ts'], // <-- Annotate your routes!
}

export const swaggerSpec = swaggerJSDoc(options)
