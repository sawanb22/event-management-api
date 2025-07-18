import express from 'express';
import eventRoutes from './src/routes/event.routes.js';

const app = express();
const PORT = 3000;

//parse json bodies from incoming requests
app.use(express.json());

//routes
app.use('/api', eventRoutes);

app.get('/', (req, res) => 
    res.send(`Server is running at port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
)