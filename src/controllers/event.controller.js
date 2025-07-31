import { createEventService, getEventDetailsService, getUpcomingEventsService, getEventStatsService } from '../services/event.service.js';

async function createEventController(req, res) {
    try {
        //getting the event data from the request body into json
        const eventData = req.body;

        //calling the service function 
        const newEventId = await createEventService(eventData);

        //success response
        res.status(201).json({
            message: "Event created successfully",
            eventId: newEventId
        });
    } catch (error) {
        // error in service layer caught here
        console.error("controller error: failed to create event.", error);
        //checking if th eerror is specifically thrown from model 
        if (error.message.includes('Capacity must be')) {
            return res.status(400).json({ message: error.message }); //404 bad request
        }

        //all other errors we use generic 500 internal server error
        res.status(500).json({ message: "An internal server error occured."});
    }
}

async function getEventDetailsController(req, res) {
    const { eventId } = req.params;

    try {
        const eventDetails = await getEventDetailsService(eventId);
        res.status(200).json(eventDetails);
    } catch (error) {
        console.error("Error in 'getEventDetailsController'", error);
        res.status(500).json({ error: error.message });
    }
}

export async function getUpcomingEventsController(req, res) {
    try {
        const events = await getUpcomingEventsService();
        res.status(200).json(events);
    } catch (error) {
        console.error("Error in 'getUpcomingEventsController'", error);
        res.status(500).json({ error: error.message });
    }
}

export async function getEventStatsController(req, res) {
    const { eventId } = req.params;
    try {
        const stats = await getEventStatsService(eventId);
        res.status(200).json(stats);
    } catch (error) {
        console.error("Error in 'getEventStatsController'", error);
        if (error.message === 'Event not found') {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
}

export { createEventController, getEventDetailsController };