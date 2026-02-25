# Task Management Application - Backend

A Spring Boot-based task management application with user authentication.

## Project Structure

```
starter-backend/
├── src/
│   ├── main/
│   │   ├── java/com/taskmanager/
│   │   │   ├── TaskManagementApplication.java  # Main application class
│   │   │   ├── config/
│   │   │   │   └── SecurityConfig.java         # Security configuration
│   │   │   ├── controller/
│   │   │   │   └── UserController.java         # User REST endpoints
│   │   │   ├── dto/
│   │   │   │   ├── SignupRequest.java          # Signup request DTO
│   │   │   │   └── UserResponse.java           # User response DTO
│   │   │   ├── entity/
│   │   │   │   └── User.java                   # User entity
│   │   │   ├── repository/
│   │   │   │   └── UserRepository.java         # User data access
│   │   │   └── service/
│   │   │       └── UserService.java            # User business logic
│   │   └── resources/
│   │       └── application.properties          # Application config
│   └── pom.xml                                 # Maven dependencies
```

## Features

### Implemented
- ✅ User signup with validation
- ✅ Password encryption (BCrypt)
- ✅ Email and username uniqueness checks
- ✅ H2 in-memory database (for development)
- ✅ Spring Security configuration
- ✅ RESTful API endpoints

## API Endpoints

### User Signup
```
POST /api/users/signup
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}

Response (201 Created):
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "createdAt": "2026-02-18T10:30:00"
  }
}
```

### Get User by ID
```
GET /api/users/{id}

Response (200 OK):
{
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "createdAt": "2026-02-18T10:30:00"
}
```

## Prerequisites

- Java 17 or higher
- Maven 3.6+

## Running the Application

1. Navigate to the backend directory:
```bash
cd starter-backend
```

2. Build the project:
```bash
mvn clean install
```

3. Run the application:
```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

## H2 Database Console

Access the H2 console at: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:taskmanagerdb`
- Username: `sa`
- Password: (leave empty)

## Testing the Signup Endpoint

Using curl:
```bash
curl -X POST http://localhost:8080/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

## Next Steps

To extend this application, consider adding:
- Task entity and CRUD operations
- User login/authentication with JWT
- Password reset functionality
- User profile management
- Task assignment and tracking
- Due dates and priorities
- PostgreSQL/MySQL for production
