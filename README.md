# EmailOctopusClient

A simple JavaScript class for interacting with the EmailOctopus API.

## Installation

Install the package using:

```bash
meteor add hschmaiske:email-octopus-client
```

## Usage
```js
import { EmailOctopusClient } from "your-username:email-octopus-client";

// Replace 'your-api-key' with your EmailOctopus API key
const apiKey = "your-api-key";
const emailOctopusClient = new EmailOctopusClient(apiKey);

// Replace 'your-list-id' with the ID of your EmailOctopus list
const listId = "your-list-id";

// Replace the example data with the actual data for the new contact
const userData = {
  email: "john.doe@example.com",
  firstName: "John",
  lastName: "Doe",
  username: "john_doe",
  tags: ["tag1", "tag2", "tag3"],
};

try {
  await emailOctopusClient.createContact(listId, userData);
  console.log("Contact created successfully!");
} catch (error) {
  console.error("Error creating contact:", error.message);
}
```

## API

### `EmailOctopusClient(apiKey: string)`

Creates a new instance of the EmailOctopusClient.

- `apiKey`: The API key for EmailOctopus.

### `callApi(endpoint: string, data: Object, method: string = "POST"): Promise<Object>`

Makes an API call to EmailOctopus.

- `endpoint`: The API endpoint to call.
- `data`: The data to be sent in the API call.
- `method`: The HTTP method for the API call (default is "POST").

### `createContact(listId: string, contactData: Object): Promise<void>`

Creates a new contact in an EmailOctopus list.

- `listId`: The ID of the EmailOctopus list.
- `contactData`: Data for the new contact.

