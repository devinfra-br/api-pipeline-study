# Item Management API

[![Pipeline API Item CI/CD](https://github.com/devinfra-br/api-pipeline-study/actions/workflows/ci-cd.yaml/badge.svg)](https://github.com/devinfra-br/api-pipeline-study/actions/workflows/ci-cd.yaml)

This is a simple RESTful API built with Node.js and Express to manage items with CRUD operations (Create, Read, Update, Delete). The API uses `morgan` for structured logging of incoming requests.

## Features
- **GET** `/items` - Retrieve all items.
- **POST** `/items` - Add a new item.
- **GET** `/items/:id` - Retrieve an item by ID.
- **PUT** `/items/:id` - Update an item by ID.
- **DELETE** `/items/:id` - Delete an item by ID.

## Prerequisites
- Node.js (version 12 or higher)
- npm (Node package manager)

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate into the project directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the API
1. Start the server:
   ```bash
   npm start
   ```
2. The API will be running at `http://localhost:3000`.

### API Endpoints

#### Get All Items
- **URL**: `/items`
- **Method**: `GET`
- **Response**: Array of all items in JSON format.

#### Add New Item
- **URL**: `/items`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Item Name"
  }
  ```
- **Response**: The newly created item in JSON format.

#### Get Item by ID
- **URL**: `/items/:id`
- **Method**: `GET`
- **Response**: The item with the specified ID in JSON format, or `404` if not found.

#### Update Item by ID
- **URL**: `/items/:id`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "name": "Updated Item Name"
  }
  ```
- **Response**: The updated item in JSON format, or `404` if not found.

#### Delete Item by ID
- **URL**: `/items/:id`
- **Method**: `DELETE`
- **Response**: The deleted item in JSON format, or `404` if not found.

### Logging
This API uses `morgan` to log all incoming requests in a structured JSON format. Each log entry is sent to the console with a trimmed message.

## License
This project is open-source and free to use under the MIT license.


