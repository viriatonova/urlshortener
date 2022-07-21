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

- create a `.env` file on the:
  - `root folder` 
  - `urlshortener/shortener-backend/.env`
- Add set the following env vars to your `.env` file:
  - `DJANGO_SECRET_KEY=Your key here`
  - `LOCAL_DB_BACKUP=Your local db backup here`
  - `MYSQL_ROOT_PASSWORD=your password here`
  - `MYSQL_DATABASE=data base name here`
  - `MYSQL_USER=your user here`
  - `MYSQL_PASSWORD=your password here`
  - `MYSQL_HOST=mysql_shortener`
  - `TZ=Local Time Zone here`

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

### Front-end
    - Acess url -> http://localhost:3131
### Credentials 
  - Register user on the API folder (urlshortener / shortener-backend)
    ```bash
    python manage.py createuser
    ```

### Notes

- Using the private API allow yo see statistcs about how many times the shorteners url was accessed


## Tests


## Database changes

When you make change to database models run: `make migrate`.


