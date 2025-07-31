import pool from '../config/db.js';

async function createUser({ name, email }) {
    const sql = `
        INSERT INTO users (name, email)
        VALUES ($1, $2)
        RETURNING id;
    `;
    try {
        const result = await pool.query(sql, [name, email]);
        return result.rows[0].id;
    } catch (error) {
        console.error("Error executing 'createUser' query", error);
        throw error;
    }
}

export { createUser };