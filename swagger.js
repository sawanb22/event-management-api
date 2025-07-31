import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Event Management API',
      version: '1.0.0',
      description: 'API documentation for the Event Management system',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to the API docs (you can use JSDoc comments in your route files)
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;