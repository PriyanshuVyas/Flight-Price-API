#       FLIGHT PRICE API


### Priyanshu Vyas
### (vyas.priyanshu23@gmail.com)

It will return Flight Details when provided with:
 * Source City Name
 * Destination City Name
 * Date (format: YYYY-MM-DD)

## API Endpoints:
* POST ***/flight/prices/*** -

   _Request Format:_
   
      {
         "source":"CITY_NAME_HERE",
         "destination":"CITY_NAME_HERE",
         "departureDate":"DATE_HERE"
      }

## Postman Collection

Here is the postman collection: https://www.postman.com/priyanshu01/workspace/flightapi/collection/20534179-8b73d366-714a-490d-ac39-1b692f3b4bf1?action=share&creator=20534179


### Follow the steps to use this on your machine:

## Cloning the Repo

To get started with this project, follow these steps:

Clone the repository to your local machine:
```
  git clone https://github.com/PriyanshuVyas/Flight-Price-API.git
 ```

## Install the dependencies:
```
npm install express axios dotenv
```

## Start the server:

The default port is 3000.
The server will start running on http://localhost:3000.

## Configuration

The following environment variables can be used to configure the API:

    PORT: The port on which server runs.
    CLIENT_ID: API Key.
    CLIENT_SECRET: API Secret Key.

You can set these environment variables using a .env file in the root directory of the project. For example:

    PORT = 3000.
    CLIENT_ID = 'Your_API_Key'
    CLIENT_SECRET = 'Your_API_Secret_Key'

API key obtained from https://developers.amadeus.com/. 
