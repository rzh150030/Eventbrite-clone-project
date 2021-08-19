# IT Fairs For Hires
*Developed by Richard Huang*
[Live Link](https://it-fairs-for-hires.herokuapp.com/)

## Index Links
- [Feature List](https://github.com/rzh150030/Eventbrite-clone-project/wiki/MVP-Feature-List)
- [Database Schema](https://github.com/rzh150030/Eventbrite-clone-project/wiki/Database-Schema)

## Overview
IT Fairs For Hires is a React, Express project inspired by Eventbrite that allows users to create job events at certain locations and time as well as register for the events. 

## Technologies Used
- Express
- PostgreSQL
- React
- Redux
- React Calendar

## Current Features
### User Authorization
User authentication is accomplished through the use of BCrypt for password hashing. To avoid potential information leaks, user passwords are stored as password hashes. When users attempt to log in, the password they provide is rehashed and compared with the encrypted password hash to verify credentials.

### Events
Logged in users are able to create, edit, and delete events. Users can set the name, date, location, and capacity of an event. To ensure data integrity of dates, React calendar was used to handle user input of dates. Newly created events will appear on home page, displaying the username of the host as well as the time it happens. All users can visit the event page and read other details of the event such as location. Only the host user can edit or delete events from the event page. Logged in users can see events that they are hosting on their profile page as well as events that they've registered for.

### Registration
Logged in users can register for other people's events and unregister from them. The registered event will display on the user's profile page. Registration button is rendered based on user state where users that host the event will only see the options to edit or delete event the event. 


## To Do List
- Sort events by categories
- Search for events through search bar

