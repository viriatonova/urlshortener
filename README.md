# Url Shortener

A web aplication that generate url's shortener. This aplication was maded with Django rest framework and NextJs

## Content

1. [Dependencies](#dependencies)
2. [Setup](#setup)
4. [API](#api)
6. [Tests](#tests)
7. [Database](#database-changes)
8. [Additional information](#additional-information)

## Dependencies

- [Make](https://www.gnu.org/doc/doc.html)
- [Docker](https://docs.docker.com/reference/)
- [Docker-compose](https://docs.docker.com/compose/)

## Setup

- create a `.env` file.
- Add set the following env vars to your `.env` file:
  - `DJANGO_SECRET_KEY=Your key here`
  - `POSTGRES_DB=postgresdb`
  - `POSTGRES_USER=postgres`
  - `POSTGRES_PASSWORD=postgres`
  - `POSTGRES_HOST=db`

## Development Environment

- To spin up development enviroment: &nbsp; `make build`

- To start the development enviroment: &nbsp; `make up` 

## API

### Endpoints
  - Login user ( GET )
    - http://localhost:8181/login
  - Public API ( GET, POST, UPDATE, DELETE )
    - http://localhost:8181/api/public
  - Private API ( GET, POST, UPDATE, DELETE )
    - http://localhost:8181/api/v1

### Credentials 
  - Register user on the API folder (urlshortener / shortener-backend)
    ```bash
    python manage.py createuser
    ```
  - To use the private API you will need to create a user and login on the web aplication

### Notes

- Using the private API allow yo see statistcs about how many times the shorteners url was access


## Tests


## Database changes

When you make change to database models run: `make migrate`.


