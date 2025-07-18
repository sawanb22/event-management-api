import pg from 'pg';
const { Pool } = pg;

import dotenv from 'dotenv';

//LOad environmment variables from env file
dotenv.config();

//create a new pool instance
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

//conection test
(async () => {
    try {
        const client = await pool.connect();
        console.log('Database connected succesfully!');
        client.release();
    } catch {
        console.log('Error connecting to database:', err.stack);
        process.exit(1);
    }
})();



export default pool;