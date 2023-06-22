---
title: "Nodejs login system"
author: "Alex Coldicott"
description: "A full stack login system using JWT and cookies to remember and authenticate users"
category: "Development"
date: "2022-03-13"
bannerImage: "https://res.cloudinary.com/dqkwveihk/image/upload/v1686745637/login_system_g80bc9.png"
repo: "https://github.com/ajcoldi/2023-login-system-backend"
demoLink: "http://login-system.alexc-portfolio.co.uk/"

tags:
    - example
---

## This is an example login system

This demo showcases a user authentication API built with a Next.js frontend, Node.js backend, and PostgreSQL as the database system. The project has been dockerized and deployed using an MVC architecture on an NGINX server.

To improve readability, email confirmation and verification logic has been omitted from this simplified version of the project.

Below, you'll find illustrations explaining the underlying logic and comprehensive documentation for the APIs.

---


# Auth Controller Flow Chart

![Flowchart](/project_images/auth_flowchart.png)



# Auth Controller Documentation

The auth controller handles user registration, login, and authentication for the application.



## Endpoints

### Register User

**Endpoint:** `/register`

**Method:** POST

**Request Body:**
- `first_name` (string): The user's first name.
- `last_name` (string): The user's last name.
- `email` (string): The user's email address.
- `password` (string): The user's password.
- `email_varified` (boolean): Indicates if the user's email is verified (optional, default: false).
- `terms_and_conditions` (boolean): Indicates if the user has accepted the terms and conditions.
- `new_letter` (boolean): Indicates if the user wants to receive a newsletter.

**Response:**
- 200 OK: User registration successful. Returns the newly created user object.
- 401 Unauthorized: A user with the same email already exists or terms and conditions not accepted.
- 500 Internal Server Error: An error occurred on the server.

### Login User

**Endpoint:** `/login`

**Method:** POST

**Request Body:**
- `email` (string): The user's email address.
- `password` (string): The user's password.
- `remember_check` (boolean): Indicates if the user wants to be remembered for future logins.

**Response:**
- 200 OK: User login successful. Returns the JWT token and refresh token.
- 401 Unauthorized: Email or password incorrect.
- 500 Internal Server Error: An error occurred on the server.

### User Authentication

**Endpoint:** `/user/auth`

**Method:** GET

**Response:**
- 200 OK: User authentication successful. Returns the verified status and user object.
- 500 Internal Server Error: An error occurred on the server.

## Functions

### `registerUser`

Handles the registration of a new user.

### `loginUser`

Handles the login process for existing users.

### `userAuthentication`

Verifies the user's authentication status.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `cookie`: Library for parsing and generating HTTP cookies.

## Usage Examples

### Register a User

```javascript
const response = await fetch('/register', {
  method: 'POST',
  body: JSON.stringify({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    terms_and_conditions: true,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
});

const data = await response.json();
console.log(data);

```
# Auth Controller Documentation

The auth controller handles user registration, login, and authentication for the application.

## Endpoints

### Register User

**Endpoint:** `/register`

**Method:** POST

**Request Body:**
- `first_name` (string): The user's first name.
- `last_name` (string): The user's last name.
- `email` (string): The user's email address.
- `password` (string): The user's password.
- `email_varified` (boolean): Indicates if the user's email is verified (optional, default: false).
- `terms_and_conditions` (boolean): Indicates if the user has accepted the terms and conditions.
- `new_letter` (boolean): Indicates if the user wants to receive a newsletter.

**Response:**
- 200 OK: User registration successful. Returns the newly created user object.
- 401 Unauthorized: A user with the same email already exists or terms and conditions not accepted.
- 500 Internal Server Error: An error occurred on the server.

### Login User

**Endpoint:** `/login`

**Method:** POST

**Request Body:**
- `email` (string): The user's email address.
- `password` (string): The user's password.
- `remember_check` (boolean): Indicates if the user wants to be remembered for future logins.

**Response:**
- 200 OK: User login successful. Returns the JWT token and refresh token.
- 401 Unauthorized: Email or password incorrect.
- 500 Internal Server Error: An error occurred on the server.

### User Authentication

**Endpoint:** `/user/auth`

**Method:** GET

**Response:**
- 200 OK: User authentication successful. Returns the verified status and user object.
- 500 Internal Server Error: An error occurred on the server.

## Functions

### `registerUser`

Handles the registration of a new user.

### `loginUser`

Handles the login process for existing users.

### `userAuthentication`

Verifies the user's authentication status.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `cookie`: Library for parsing and generating HTTP cookies.

## Usage Examples

### Register a User

```
const response = await fetch('/register', {
  method: 'POST',
  body: JSON.stringify({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    terms_and_conditions: true,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
});

const data = await response.json();
console.log(data);

```

### Login a User

```
const response = await fetch('/login', {
  method: 'POST',
  body: JSON.stringify({
    email: 'john.doe@example.com',
    password: 'password123',
    remember_check: true,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
});

const data = await response.json();
console.log(data);

```

### Authenticate User

``` 
const response = await fetch('/user/auth');
const data = await response.json();
console.log(data);

```



