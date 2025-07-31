import { createEvent, getEventWithUsers } from "../models/event.model.js";

async function createEventService(eventData) {
    try {
        const newEventId = await createEvent(eventData); //caling model function fro database interaction
        return newEventId;
    } catch (error) {
        // if model throw error , we re-throw it so that controller caught it 
        console.error("Service Error: could not create event.", error);
        throw error;
    }
}

async function getEventDetailsService(eventId) {
    if (!eventId) {
        throw new Error('Event ID is required');
    }

    try {
        const eventDetails = await getEventWithUsers(eventId);

        if (!eventDetails) {
            throw new Error('Event not found');
        }

        return eventDetails;
    } catch (error) {
        console.error("Error in 'getEventDetailsService'", error);
        throw error;
    }
}

export { createEventService, getEventDetailsService };