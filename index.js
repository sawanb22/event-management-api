import express from 'express';
import eventRoutes from './src/routes/event.routes.js';
import registrationRoutes from './src/routes/registration.routes.js';
import userRoutes from './src/routes/user.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

const app = express();
const PORT = 3000;

//parse json bodies from incoming requests
app.use(express.json());

//routes
app.use('/api', eventRoutes);
app.use('/api', registrationRoutes);
app.use('/api', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => 
    res.send(`Server is running at port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
)