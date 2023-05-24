# city-bike-app
Helsinki city bike app.   
This is the Solita Dev Academy pre-assignment    

## How to run
- clone the repo   
`git clone https://github.com/Spirilo/city-bike-app.git`
- install dependencies   
`cd city-bike-app/client`   
`npm i`
- open other cmd for server   
`cd city-bike-app/server`   
- build and run backend from dockerimage
- before build add .env file with data I give to server dir!!    
`docker build . -t bikeapp`    
`docker run -dp 3001:3001 bikeapp`
- run the frontend in client dir    
`npm start`

## Features

### Data import

- [x] Import data from the CSV files to a database or in-memory storage
- [x] Validate data before importing
- [x] Don't import journeys that lasted for less than ten seconds
- [x] Don't import journeys that covered distances shorter than 10 meters

### Journey list view

- [x] List journeys
- [x] For each journey show departure and return stations, covered distance in kilometers and duration in minutes
- [x] Pagination
- [ ] Ordering per column
- [ ] Searching
- [ ] Filtering

### Station list view

- [x] List all the stations
- [x] Pagination
- [ ] Searching

### Single station view
- [x] Station name
- [x] Station address
- [x] Total number of journeys starting from the station
- [x] Total number of journeys ending at the station
- [ ] Station location on the map
- [ ] The average distance of a journey starting from the station
- [ ] The average distance of a journey ending at the station
- [ ] Top 5 most popular return stations for journeys starting from the station
- [ ] Top 5 most popular departure stations for journeys ending at the station
- [ ] Ability to filter all the calculations per month