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

//retrieving a single event by its id and all the registered users in it 
async function getEventWithUsers(eventId) {
    const sql = `
    SELECT
        e.id AS event_id,
        e.title,
        e.date_time,
        e.location,
        e.capacity,
        u.id AS user_id,
        u.name AS user_name,
        u.email AS user_email
    FROM
        events e
    LEFT JOIN
        registrations r ON e.id = r.event_id
    LEFT JOIN
        users u ON r.user_id = u.id
    WHERE
        e.id = $1;
    `;

    try {
        const { rows } = await pool.query(sql, [eventId]);

        if (rows.length === 0) {
            return null; // Event not found
        }

        const eventDetails = {
            id: rows[0].event_id,
            title: rows[0].title,
            dateTime: rows[0].date_time,
            location: rows[0].location,
            capacity: rows[0].capacity,
            registrations: []
        };

        for (const row of rows) {
            if (row.user_id) {
                eventDetails.registrations.push({
                    id: row.user_id,
                    name: row.user_name,
                    email: row.user_email
                });
            }
        }

        return eventDetails;
    } catch (error) {
        console.error("Error executing 'getEventWithUsers' query", error);
        throw error;
    }
}

export {
  createEvent,
  getEventWithUsers
};
