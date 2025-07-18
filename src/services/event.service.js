import { createEvent } from "../models/event.model.js";

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

export { createEventService };