import { createEvent, getEventWithUsers, getUpcomingEvents, getEventStats } from "../models/event.model.js";

async function createEventService(eventData) {
    try {
        const newEventId = await createEvent(eventData);
        return newEventId;
    } catch (error) {
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

async function getUpcomingEventsService() {
    try {
        const events = await getUpcomingEvents();
        return events;
    } catch (error) {
        console.error("Error in 'getUpcomingEventsService'", error);
        throw error;
    }
}

async function getEventStatsService(eventId) {
    try {
        const stats = await getEventStats(eventId);
        if (!stats) {
            throw new Error('Event not found');
        }
        return stats;
    } catch (error) {
        console.error("Error in 'getEventStatsService'", error);
        throw error;
    }
}

export {
    createEventService,
    getEventDetailsService,
    getUpcomingEventsService,
    getEventStatsService
};