
# Event Management API

An API for managing events, users, and registrations, built with Node.js, Express.js, and PostgreSQL. Features include event creation, user registration, event statistics, and comprehensive API documentation via Swagger.

## Features
- Create and manage events
- Register and unregister users for events
- View event details, upcoming events, and event statistics
- Create users
- API documentation with Swagger (OpenAPI 3.0)

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Swagger (swagger-ui-express, swagger-jsdoc)

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm
- PostgreSQL database


### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd event-management-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your environment variables:
   - Copy `.env.example` to `.env` and fill in your PostgreSQL credentials and other settings.


### Database Schema & Migration

Before running the API, you must set up the required PostgreSQL tables. You can do this manually using the SQL below, or automate it with a migration tool (e.g., [node-pg-migrate](https://github.com/salsita/node-pg-migrate), [sequelize-cli](https://sequelize.org/master/manual/migrations.html)).

To apply the schema manually, connect to your database and run:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date_time TIMESTAMP NOT NULL,
  location VARCHAR(255) NOT NULL,
  capacity INTEGER NOT NULL
);

CREATE TABLE registrations (
  event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (event_id, user_id)
);
```

For production projects, consider using a migration tool to manage schema changes over time.

### Running the API
Start the server:
```bash
npm start
```
The API will be available at `http://localhost:3000/api` by default.

### API Documentation
Swagger UI is available at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## API Endpoints

### Events

#### Create Event
`POST /api/events`
**Body:**
```json
{
  "title": "Sample Event",
  "dateTime": "2025-08-01T10:00:00",
  "location": "New York",
  "capacity": 100
}
```
**Response:**
```json
{
  "eventId": 1
}
```

#### List Upcoming Events
`GET /api/events/upcoming`
**Response:**
```json
[
  {
    "eventId": 1,
    "title": "Sample Event",
    "dateTime": "2025-08-01T10:00:00",
    "location": "New York",
    "capacity": 100
  }
]
```

#### Get Event Details (with Registered Users)
`GET /api/events/{eventId}`
**Response:**
```json
{
  "eventId": 1,
  "title": "Sample Event",
  "dateTime": "2025-08-01T10:00:00",
  "location": "New York",
  "capacity": 100,
  "registrations": [
    { "userId": 1, "name": "Alice", "email": "alice@example.com" }
  ]
}
```

#### Get Event Statistics
`GET /api/events/{eventId}/stats`
**Response:**
```json
{
  "eventId": 1,
  "totalRegistrations": 50,
  "capacity": 100
}
```

### Users

#### Create User
`POST /api/users`
**Body:**
```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```
**Response:**
```json
{
  "userId": 1
}
```

### Registrations

#### Register User for Event
`POST /api/events/{eventId}/register`
**Body:**
```json
{
  "userId": 1
}
```
**Response:**
```json
{
  "eventId": 1,
  "userId": 1,
  "message": "User registered for event successfully."
}
```

#### Cancel Registration
`DELETE /api/events/{eventId}/registrations/{userId}`
**Response:**
```json
{
  "eventId": 1,
  "userId": 1,
  "message": "Registration cancelled successfully."
}
```

## Error Handling
All endpoints return appropriate HTTP status codes and error messages for invalid input, not found, or business rule violations.

### Example Error Responses

**400 Bad Request:**
```json
{
  "message": "Capacity can be upto 1000."
}
```

**404 Not Found:**
```json
{
  "error": "Event not found"
}
```

**500 Internal Server Error:**
```json
{
  "error": "An internal server error occurred."
}
```

## License

ISC

## Author

sawan
