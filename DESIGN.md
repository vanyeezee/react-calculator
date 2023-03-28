# Design Document 

**Title:** React Calculator Design 

**Date:** March 23, 2023 

**Author:** Tamara Adokeme

## Introduction

This software design document outlines the design and architecture for a React-based calculator that performs basic arithmetic operations, stores values in memory, and includes advanced features such as percentage, square root, exponential, history, and user authentication. The calculator will be accessible through a web browser and built using modern web technologies to provide efficient and effective software solutions.

## System Overview

The React Calculator is a web-based calculator designed to provide users with basic arithmetic calculations and advanced mathematical operations. The system includes user authentication to enable users to sign up, log in, and customize their calculator. The calculator will be built using React and its libraries and deployed on AWS. The calculator will follow the order of operations (BODMAS) and store user data in a database. The calculator will be designed with accessibility in mind to ensure it can be used by all users and responsive to different screen sizes and devices.

## Design Considerations

**Assumptions and Dependencies:** The calculator will depend on a modern web browser with JavaScript support. The calculator will be built using React and its libraries and deployed on AWS. The calculator will follow the order of operations (BODMAS) and store user data in a database.

**General Constraints:** The calculator should be designed with accessibility in mind to ensure it can be used by all users and responsive to different screen sizes and devices. It should also be able to handle errors and edge cases gracefully.

**Goals and Guidelines:** The calculator should be designed with simplicity and ease of use in mind, while still providing advanced features for more complex calculations. It should follow established design patterns and best practices for web development. 

**Development Methods:** The software design method used will be component-based, utilizing React components to create a modular and scalable architecture. The developer will use continuous integration and deployment (CI/CD) to ensure that the code is of high quality and is deployed quickly and efficiently.

**Testability, Monitoring and Alerting:** The calculator will employ automated tests for all critical functionalities. Monitoring and alerting should also be implemented to ensure the system is always functioning correctly.

## Open Questions

- How will user data be encrypted and stored securely?
- How will we handle errors and edge cases gracefully?
- Should we include a graphing feature, and if so, how should it be implemented?

## Architectural Strategies

The calculator will use a component-based architecture, with each feature and functionality implemented as a modular React component. This will allow for scalability and ease of maintenance, as well as simplified debugging and testing. The calculator will use a serverless architecture for scalability and cost-efficiency. It will also use a database to store user data.

## System Architecture and Design

The calculator will consist of several modules, including the user interface, input handling, calculation engine, memory functions, and history function.

### User Interface

The user interface is the primary point of interaction between the user and the calculator. It should be designed to be intuitive, easy to use, and responsive. The UI allows users to input calculations and view the results of their calculations. It should also provide access to other features such as memory functions, advanced functions, and history.

### Input Handling

Input handling is responsible for parsing and validating user input. It should ensure that only valid input is accepted and that the order of operations (PEMDAS) is followed. It should also handle edge cases and errors gracefully, such as dividing by zero or entering an invalid expression.

### Calculation Engine

The calculation engine is responsible for performing the actual arithmetic operations. It should take input from the input handling module and return the result of the calculation. The engine should support basic arithmetic operations such as addition, subtraction, multiplication

### Memory Functions 

It provides additional functionality for advanced users. It should allow users to store and recall values from memory during calculations. The memory module should include functions for storing values in memory (M+), subtracting from memory (M-), recalling values from memory (MR), and clearing memory (MC).

### History Function 

History Function is responsible for displaying the history of calculations. It should allow users to view and recall previous calculations. The history module should include a list of previous calculations, the date and time they were performed, and the result of the calculation.

### Authentication 

Authentication is responsible for user authentication and data security. It should provide sign-up, log-in, and log-out functionality. It should ensure that user data is private and secure by encrypting and storing user data securely. The authentication module should also include password recovery and password reset functionality.

### Database 

Database is responsible for storing user data securely. It should be designed to handle large amounts of data and to scale as the user base grows. The database should be designed to be highly available, durable, and fault-tolerant. It should also be designed to be compliant with relevant data protection regulations such as GDPR or CCPA.

## Conclusion

Overall, the design of the calculator should be modular and scalable. Each module should be designed to be independent of the others, allowing for easy maintenance and updating. The calculator should be designed to handle errors and edge cases gracefully, ensuring a smooth user experience. Finally, the calculator should be designed with security in mind, ensuring that user data is private and secure.
