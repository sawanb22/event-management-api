import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (res, req) => 
    res.send(`Server is running at port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`)
)