# Login-Page
My first 'full-stack' web application :).

Project Description:
Simple web application with three pages: login, sign up, and home.
Utilizes MongoDB to store user data.

Technologies Used:
Backend: Node.js with Express framework.
Frontend: HTML templates rendered using Handlebars (hbs).
Database: MongoDB for data storage, accessed through Mongoose.
Code Structure:

index.js:
Sets up the Express server.
Defines routes for login, sign up, and home pages.
Handles form submissions for sign up and login, interacting with MongoDB for data storage.

mongodb.js:
Establishes a connection to the MongoDB database.
Defines a schema for user data and creates a Mongoose model for user collection.

Functionality:
Users can sign up by providing a username and password, which are stored in the database.
Users can log in using their credentials, with validation against stored data in MongoDB.
Upon successful login or sign up, users are redirected to the home page.

Error Handling:
Basic error handling is implemented for database connections, sign up, and login processes.
Errors are logged to the console and appropriate error messages are sent to the client.

Improvements I want to implement in my next project:
Enhancing security measures such as password hashing for better data protection.
Implement more robust error handling and validation for user inputs.
Improve the user interface and add additional features as needed.



