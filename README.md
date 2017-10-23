# Flight Finder

## Overview
This is a simple API that allows users to fetch a list of airports and a list of flights based on departure and arrival airports.

## Sites
* Deployed API:   
* Front-end
  * Github:
  * Deployed App:

## API Endpoints
* GET `/api/airports`
* GET `/api/flights/:from/:to`
  * e.g., `/api/flights/PHX/LAX`
* Sample JSON response:
```Javascript
[
  {
    From: "SEA",
    To: "LAX",
    FlightNumber: "1005",
    Departs: "7:00 PM",
    Arrives: "9:00 PM",
    MainCabinPrice: "170",
    FirstClassPrice: "190"
    },
]
```

## Dependencies
* cors
* express
* csvtojson
* mocha
* chai
* superagent
* eslint

## Future Opportunities
* For scalability, airport and flight details can be moved to a database.
  * Currently, the provided assets (CSV files) are read via Node and transformed to JSON files via a NPM package (csvtojson).
* Create additional endpoints
  * e.g., User sign-up/sign-in and GET, PUT, POST, DELETE routes for maintaining data for those with appropriate user credentials.
