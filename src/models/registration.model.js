import pool from '../config/db.js';

async function registerUserForEvent(eventId, userId) {
    const sql = `
        INSERT INTO registrations (event_id, user_id)
        VALUES ($1, $2)
        RETURNING event_id, user_id;
    `;
    try {
        const result = await pool.query(sql, [eventId, userId]);
        return result.rows[0];
    } catch (error) {
        console.error("Error executing 'registerUserForEvent' query", error);
        throw error;
    }
}

async function cancelRegistration(eventId, userId) {
    const sql = `
        DELETE FROM registrations
        WHERE event_id = $1 AND user_id = $2
        RETURNING event_id, user_id;
    `;
    try {
        const result = await pool.query(sql, [eventId, userId]);
        return result.rows[0];
    } catch (error) {
        console.error("Error executing 'cancelRegistration' query", error);
        throw error;
    }
}

export { registerUserForEvent, cancelRegistration };