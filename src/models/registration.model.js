import pool from '../config/db.js';

async function registerUserForEvent(eventId, userId) {
    const sql = `
        INSERT INTO registrations (event_id, user_id)
        VALUES ($1, $2)
        RETURNING id;
    `;
    try {
        const result = await pool.query(sql, [eventId, userId]);
        return result.rows[0].id;
    } catch (error) {
        console.error("Error executing 'registerUserForEvent' query", error);
        throw error;
    }
}

export { registerUserForEvent };