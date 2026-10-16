# Backend API

## Register a user

Creates a user account, hashes the password, and returns an authentication
token with the created user.

### Request

- **Method:** `POST`
- **Path:** `/users/register`
- **Content-Type:** `application/json`

Example request body:

```json
{
  "firstname": "Ada",
  "lastname": "Lovelace",
  "email": "ada@example.com",
  "password": "securepass123"
}
```

### Required data

| Field | Required | Requirements |
| --- | --- | --- |
| `firstname` | Yes | At least 3 characters |
| `email` | Yes | Must be a valid email address |
| `password` | Yes | At least 6 characters |
| `lastname` | No | If provided, at least 3 characters |

### Responses

| Status | Meaning | Response |
| --- | --- | --- |
| `201 Created` | User registered successfully | `{ "token": "...", "user": { ... } }` |
| `400 Bad Request` | Request validation failed | `{ "errors": [ ... ] }` |

### Implementation note

The current route validates `fullname.fastname`, but the registration handler
reads `firstname`. Also, the app currently enables URL-encoded form parsing
but not JSON parsing. Align the route validation with the handler and enable
JSON body parsing before relying on the JSON request example above.