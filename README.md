# WEB_NODE_16668_WIUT
 This course work id done to fulfill web technology requirements. 

 # ABOUT THE APP
 Recipe Sharing Platform is a web application that allows users to create, share, update, and delete recipes. Users can create new recipes with details such as title, description, ingredients, and instructions. They can also browse existing recipes by category or popularity, update their own recipes to correct or improve them, and delete recipes they no longer wish to share.

# APPLICATION DEPENDENCIES
Express.js: For creating the web server and handling routes.
EJS: For rendering dynamic content in HTML templates.
Body-parser: For parsing incoming request bodies in middleware.
fs-extra: For file system operations such as reading and writing JSON data.
nodemon (devDependency): For automatically restarting the server during development.
Express-validator: Validating user input

# HOW TO RUN THE APP LOCALLY
In order to run the app locally, first of all, all the depencies should be installed. This insludes npm packages, such as express, ejs, express-validator, body-parser and nodemon. Also, inside the application, we used fs -- file system, path -- finding or joining the paths together. To install the packages, in terminal of the visual studio, write npm install package_name. for exmaple, to install nodemon, use npm install nodemon. In order to automate the process of running the application, inside of package.json, we made some changes: 
    
    "start": "node app",
    "dev": "nodemon app"

This automates running the application. Here we used nodemon. After installing depencies,  in terminal to run the app, write " npm run dev " without double quotes. 

# PROJECT STRUCTURE
The project files are structured as follows:

public: Contains static assets such as CSS stylesheets and client-side JavaScript files.
views: Contains EJS templates for rendering HTML pages.
data: Stores JSON files for storing recipe data (dataDB.json).
routes: Contains Express router modules for defining application routes.
controllers: Contains controller functions to handle business logic for each route.
validator: Contains middleware for input validation using Express-validator.
app.js: Main entry point for the application where the Express server is created and configured.

# LINKS FOR GITHUB
https://github.com/00016668/WEB_NODE_16668_WIUT.git
# LINK FOR RENDER DEPLOYMENT
https://web-node-16668-wiut.onrender.com

