[![Build Status](https://travis-ci.org/mauricioklein/weathermap.svg?branch=master)](https://travis-ci.org/mauricioklein/weathermap)
[![Coverage Status](https://coveralls.io/repos/github/mauricioklein/weathermap/badge.svg?branch=travis)](https://coveralls.io/github/mauricioklein/weathermap?branch=travis)

# Weathermap

A React application that displays the weather information for a specific location

## Dependencies

- Node 8
- Yarn 1.1.0 (you can find the installation instructions [here](https://yarnpkg.com/en/docs/install))

## Setup

```bash
# Install project dependencies
$ yarn

# Install the server app
$ yarn global add serve
```

## Tests

The specs are written with [Jest](https://facebook.github.io/jest/), in conjunction with [superagent-mock](https://github.com/M6Web/superagent-mock) to mock the external weather API.

To run the tests:

```bash
$ yarn test
```

It will report all the executed tests and, in the end, the code coverage report.

## Run

```bash
# Run the application with hot-reload enabled...
$ yarn start

# ... or build and serve the standalone application
$ yarn build
$ yarn serve [-p {Port} (default: 5000)]
```

## Docker

This project provides a `Dockerfile`, which is an easy, reliable and portable way of running the application.

Instructions on how to install Docker can be found [here](https://docs.docker.com/engine/installation/).

First of all, build the Docker image for the weather application:

```bash
# Build the Docker image
$ docker build -t weathermap .
```

With the image built, you can easily run the specs from inside the container:

```bash
# Run the tests
$ docker run -t weathermap test
```

And finally, serve the application:

```bash
# Run the application
# (attach the container port 5000 to localhost:5000)
$ docker run -p 5000:5000 -d weathermap serve
```

The application is now live on http://localhost:5000

## Todo

There's room for many improvements on this project.
Below, it's listed the most important ones:

- Pass the open-weather API key by environment variable (today, it's hardcoded)
- Replace the city/country form by some solution with built-in suggestions, like [Google Places library](https://developers.google.com/maps/documentation/javascript/places)
- Allow results in imperial system (today, all the results are in metric system)
