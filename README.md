# Book Backend

A simple backend application for managing books with CRUD operations.

## Features

- Create, Read, Update, and Delete books
- RESTful API endpoints
- MongoDB database integration
- Express.js framework

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (either local installation or MongoDB Atlas)

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd book-backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following content:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/bookstore
   NODE_ENV=development
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a specific book
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

## Example Book Object

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "978-0-7432-7356-5",
  "publishedYear": 1925,
  "genre": "Fiction",
  "description": "A classic American novel set in the summer of 1922..."
}
```