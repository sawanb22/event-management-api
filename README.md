# Event Management API

A Node.js API for managing events.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Create Event
POST /api/events

**Body:**
{
  "title": "Sample Event",
  "dateTime": "2025-08-01T10:00:00",
  "location": "New York",
  "capacity": 100
}

**Response:**
{
  "eventId": 1
}

## Technologies Used

- Node.js
- Express.js

## License

ISC
