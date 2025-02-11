# Express.js Assignment

# Express.js Assignment

## Overview
This Express.js application demonstrates the creation of RESTful API endpoints, custom middleware, and organized routing using controllers. The project features endpoints for managing users and products, along with a custom logger middleware that records each request's method, URL, and timestamp. Global error handling is implemented to ensure robust error management throughout the application.

## Setup & Installation

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd express-assignment


2. **Install Dependencies**  
   Use npm to install the necessary dependencies:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a .env file in the project root and add:
   ```env
   PORT=3000
   ```

4. **Run the Application**  
   Start the server by running:
   ```bash
   node index.js
   ```
   The server should start on http://localhost:3000.

## API Endpoints

### Users
- **GET /users**  
  Retrieve a list of users.  
  Example:
  ```bash
  curl -X GET http://localhost:3000/users
  ```

- **POST /users**  
  Create a new user.  
  Example:
  ```bash
  curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "Alice"}'
  ```

- **PUT /users/:id**  
  Update an existing user.  
  Example:
  ```bash
  curl -X PUT http://localhost:3000/users/0 -H "Content-Type: application/json" -d '{"name": "Alice Updated"}'
  ```

- **DELETE /users/:id**  
  Delete a user.  
  Example:
  ```bash
  curl -X DELETE http://localhost:3000/users/0
  ```

### Products
- **GET /products**  
  Retrieve a list of products.  
  Example:
  ```bash
  curl -X GET http://localhost:3000/products
  ```

- **POST /products**  
  Create a new product.  
  Example:
  ```bash
  curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{"name": "Widget", "price": 9.99}'
  ```

- **PUT /products/:id**  
  Update an existing product.  
  Example:
  ```bash
  curl -X PUT http://localhost:3000/products/0 -H "Content-Type: application/json" -d '{"name": "Widget Pro", "price": 19.99}'
  ```

- **DELETE /products/:id**  
  Delete a product.  
  Example:
  ```bash
  curl -X DELETE http://localhost:3000/products/0
  ```

## Additional Notes
- **Middleware**: A custom logger middleware is implemented that logs the HTTP method, URL, and timestamp for each request.
- **Error Handling**: The application includes a global error-handling middleware to manage any unexpected errors.
- **Project Structure**: The project is organized into folders for routes, controllers, and middleware to keep the code modular and maintainable.

## License
This project is provided for educational purposes.
