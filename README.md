# AilPup - Reviews Module

> A reviews module for a vacation rental company. This is a full stack module that is part of a larger project which emulates the look, feel, and capabilities of the top property rental company in the world.

## Screenshots
<img src="https://fecscreenshots.s3-us-west-1.amazonaws.com/Screenshot+from+2021-05-07+15-31-19.png" height="300">
<img src="https://fecscreenshots.s3-us-west-1.amazonaws.com/Screenshot+from+2021-05-07+15-34-07.png" height="300">
<img src="https://fecscreenshots.s3-us-west-1.amazonaws.com/Screenshot+from+2021-05-07+15-35-07.png" height="300">

## Related Projects

  - https://github.com/spicy-boiz/photo-carousel-service
  - https://github.com/spicy-boiz/reservations-service
  - https://github.com/spicy-boiz/places-to-stay-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Technologies](#technologies)
1. [Development](#development)
1. [Run](#run)

## Usage

> This module can be used locally to simulate the reviews microservice of the the top vacation rental company in the world. There are 100 mock listings to observe review data for. The local routes are formatted as `localhost:3003/LISTING_NUMBER` where `LISTING_NUMBER` is any number from 1 to 100.
> Once a listing's reviews are shown, functionality for this module include:
> * an aggregate total rating for the property based on 6 seperate criteria.
> * a rating for each criteria calculated as the average rating between all reviewers.
> * the 6 most recent reviews of the rental property showcasing the user's (reviewers) names, avatars, and date the review was made.
> * a button to show all reviews left for a property which opens a modal that has a search bar functionality that allows anyone to type in a keyword and have that keyword highlighted in all reviews that contain it.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.10+
- MongoDB 4.4.2+

## Technologies
- Javascript
- React
- Express
- CSS
- Styled Components
- AWS EC2
- MongoDB

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
### Generating Database and Mock Data

From within the root directory:

```sh
npm run seed
```
### Run

From within the root directory:

```sh
npm run react-dev
npm run start
```
