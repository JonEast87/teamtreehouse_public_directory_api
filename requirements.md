# Requirements

Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can build utilities, games, infographics, and more. You can also integrate, display, and analyze social media and large data sets without having to create and curate them yourself.

Awesome Startup is a distributed company with employees working all over the world. They need a smart way to for employees to share contact information with each other. In this project, you’ll use the Random User Generator API [CreateFile](https://randomuser.me/) to grab information for 12 random “employees,” and use that data to build a prototype for an Awesome Startup employee directory. You’ll request a JSON object from the API and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.

Documentation for the random user API can be found here: [RandomUserDoc](https://randomuser.me/documentation)

- [X] (R1) Get and display 12 random users from The Random User Generator API
- [X] (R2) Using photos and information that the API provides, you’ll display 12 users, along with some basic information:
  - [X] (R3) Image
  - [X] (R4) First and Last Name
  - [X] (R5) Email
  - [X] (R6) City

- [X] (R7) Create a modal window that will pop up when any part of the user’s row is clicked. The following details should display in the modal window:
  - [X] (R8) Image
  - [X] (R9) Name
  - [X] (R10) Username
  - [X] (R11) Email
  - [X] (R12) Cell Number
  - [X] (R13) Detailed Address, including street name and number, city, country and post code.
  - [X] (R14) Birthdate

- [] (R15) Structure and style the user directory so that it roughly matches the provide mockup:
  - [x] (R16) Display the users in a grid or table.
  - [x] (R17) Add a hover state to the rows of the user table.
  - [X] (R18) Make sure there’s a way to close the modal window.
  - [X] (R19) Add a way to filter the directory by name or username. To do this, you’ll need to request a random user nationality that will only return data in the English alphabet. Note: you don't have to rely on the API to return search results. You'll need to write functionality that filters results once they already on the page.
  - [X] (R20) Add a way to move back and forth between employee detail windows when the modal window is open.

## How You Will Be Graded

- [x] (R21) 12 random users are pulled from the the API.
- [x] (R22) New random employee information displays each time the page refreshes.
- [x] (R23) The directory includes the following: Employee Image, First and Last Name, Email, City.
- [X] (R24) Employees can be filtered by name or username.
- [X] (R25) Modal window displays the following details: Employee image, Name, Email, Cell Number, Detailed Address, including street name and number, city, country and post code, Birthdate.
- [X] (R26) There is a way to close the modal window
- [X] (R27) Functionality has been added to switch back and forth between employees when the detail modal window is open.
- [X] (R28) Directory has been styled so that all the major elements are in place and roughly matches the mockups.
