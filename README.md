# Simple-CRUD-API

## Description

This project is a simple CRUD (Create, Read, Update, Delete) API implementation using express and mongoDB. It provides basic functionality for managing resources through HTTP requests.

## Features

- Create new resources
- Retrieve existing resources
- Update existing resources
- Delete resources

## Technologies Used

-  Javascript (ES6)
-  Node.js
-  Express.js
-  MongoDB
-  Mongoose


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sulfikaralijun/Simple-CRUD-API.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd Simple-CRUD-API
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Enviroiment Variables:
   
   Create a .env file in the root directory and add the following variables:
   ```bash
   PORT=3000
   MONGODB_URI=<your-mongodb-uri>
   ```
   you can get your mongodb uri from [here](https://www.mongodb.com/docs/atlas/getting-started/)
2. Start the server:
   ```bash
   npm start
   ```
3. For development:
   ```bash
   npm run dev
   ```
4. The API will be available at `http://localhost:3000` (or the port you've configured)

## API Endpoints

- `POST /api/products`: Create a new product
- `GET /api/products`: Retrieve all product
- `GET /api/products/:id`: Retrieve a specific product
- `PUT /api/products/:id`: Update a specific product
- `DELETE /api/products/:id`: Delete a specific product

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Ask Me
If you have any questions or suggestions, feel free to reach out to me at sulfikaralijun@gmail.com or in [issuess](https://github.com/sulfikaralijun/Simple-CRUD-API/issues).

## License

This project is licensed under the [MIT License](LICENSE).
