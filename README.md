# UserTrackr

Welcome to UserTrackr, an intuitive user data tracking application developed using a blend of Java, JavaScript, Spring Boot, PostgreSQL, and more. This project is designed to provide a seamless and intuitive experience, integrating various components of RESTful app implementation.

## Components

This repository encompasses two vital parts:
- **"user-tracker-frontend"**: The frontend, built using React framework.
- **"user-tracker-backend"**: The backend, crafted with Java, SpringBoot and ProgresSQL.

## User Interaction

A user interacts with the application by initiating the **ADD USER** action, creating a new user record. Upon completing the form and pressing **ADD**, the data is sent to the backend for processing. Simultaneously, the user is redirected to the main page where the new user entry is showcased.

Users can view each user's details, including their name, email, and password. They can interact using the following buttons:

- **View Button**: Displays a modal presenting detailed user information and a graphical representation of their persona.
- **Edit Button**: Redirects the user to a new page, allowing them to update the selected user's information.
- **Remove Button**: Deletes the selected user from the table, erasing all associated information.

## Data Flow

The user's inputted data moves through the API service and into the database, where it is stored in the **"users"** datatable. When requested, this data is transmitted back to the WebApp through the server, ultimately being displayed on the application's homepage. All data is transmitted and received in JSON format.
