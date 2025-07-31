import { registerUserForEvent } from '../models/registration.model.js';

async function registerUserService(eventId, userId) {
    if (!eventId || !userId) {
        throw new Error('Event ID and User ID are required');
    }
    try {
        const registrationId = await registerUserForEvent(eventId, userId);
        return registrationId;
    } catch (error) {
        console.error("Error in 'registerUserService'", error);
        throw error;
    }
}

export { registerUserService };