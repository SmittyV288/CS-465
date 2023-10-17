# CS-465

- Architecture
    - Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
        
        - In my full stack project, I used HTML, JavaScript, and Express to create a multi-page web application for customers. I was able to create static pages, define API routes, and handle server-side logic with Express. For the administration page, I used Angular to create a Single Page Application which let me create an interactive interface that rendered pages dynamically without full page reloads. 

    - Why did the backend use a NoSQL MongoDB database?

        - The backend used a NoSQL MongoDB database because of the project requirements and that MongoDB offers some flexibility. MongoDB doesn't have fixed schemas which allowed me to create my own to handle trips and users in the database.

- Functionality
    
    - How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
       
        - JSON is a text-based format for representing data while JavaScript is a programming language. JSON helped tie together the frontend and the backend using HTTP requests to the backend server.
          
    - Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.
        
        - Throughout the course, I refactored the code each week to introduce new functionality. The last part of the project was refactoring the code to allow for security measures to be put into place for the administration section of the website. The benefits of a reusable user interface are that I can reuse code in different parts of the application and that I can save time by doing so. 

- Testing
    - Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
        - HTTP methods are GET, POST, PUT, and DELETE requests to the server. GET is used to retrieve data, POST is used to create data, PUT is used to update data, and DELETE is used to remove data. These methods are important when interacting with the server and database.
        - Endpoints are specific URLs that match different functionalities of the web application. An example is the administration section had an endpoint '/api/list-trips' for listing all the trips in the database.
        - Security is the most important aspect of an application. It consists of authentication, authorization, and data protection. Security makes it so that only authorized users can access certain endpoints or perform certain actions. An example being of the administration section, a user has to login before they can see all trips and before they can add, edit, or delete trips.

- Reflection
    - How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
        - This course has provided me with a good understanding of how each part of the MEAN stack works with each other. This course also provided me with real world experience of troubleshooting out-of-date frameworks. 

