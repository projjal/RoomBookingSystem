# JW4_TheForce

This repository contains the codebase for Meeting Room Booking System as a part of Adobe's NCG bootcamp project. 


# Pre-requisites

- Install Mysql 5 or 8
- Change the password inside the getDataSource() function of AppConfig.java file to your MySql password.
- Change the dependency settings in the pom.xml file according to your version of MySql
- Install node version 8.11.3
- Import `bookingsystem` as a maven project in your eclipse IDE
- Install Apache Maven 3.5.4

# How to Run

## Running the JAVA backend

- Inside the `bookingsystem` directory on the command line run the following commands:
1) mvn install
2) mvn jetty:run

This will start the backend server on localhost:8080

## Running React Front end

- Inside the `project_test` directory run the following commands:
1) npm install
2) npm start

This will start the front end server on localhost:8081
