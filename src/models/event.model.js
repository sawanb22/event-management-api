import pool from '../config/db.js';


async function createEvent({ title, dateTime, location, capacity}) {
    if (!capacity || capacity <= 0 || capacity > 1000) {
        throw new Error('Capacity can be upto 1000.');
    }

    const sql = `
    INSERT INTO events (title, date_time, location, capacity)
    VALUES ($1, $2, $3, $4)
    RETURNING id;
    `;

    const values = [title, dateTime, location, capacity];

    try {
        const result = await pool.query(sql, values);
        return result.rows[0].id;
    } catch (error) {
        console.log("Error executing 'createEvent' query", error);
        throw error;
    }
}

export { createEvent };
