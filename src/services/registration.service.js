import { registerUserForEvent, cancelRegistration } from '../models/registration.model.js';

async function registerUserService(eventId, userId) {
    if (!eventId || !userId) {
        throw new Error('Event ID and User ID are required');
    }
    try {
        const registration = await registerUserForEvent(eventId, userId);
        return registration;
    } catch (error) {
        console.error("Error in 'registerUserService'", error);
        throw error;
    }
}

async function cancelRegistrationService(eventId, userId) {
    if (!eventId || !userId) {
        throw new Error('Event ID and User ID are required');
    }
    try {
        const result = await cancelRegistration(eventId, userId);
        if (!result) {
            throw new Error('User was not registered for this event');
        }
        return result;
    } catch (error) {
        console.error("Error in 'cancelRegistrationService'", error);
        throw error;
    }
}

export { registerUserService, cancelRegistrationService };