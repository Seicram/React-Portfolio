import React, { useState } from 'react';
import '../../index.css';

// booking component
const Booking = () => {
  const [origin, setOrigin] = useState('');//origin state variable and setter
  const [destination, setDestination] = useState('');//destination state variable and setter
  const [departureDate, setDepartureDate] = useState('');//departureDate state variable and setter
  const [returnDate, setReturnDate] = useState('');//returnDate state variable and setter
  const [passengers, setPassengers] = useState(1);//passengers state variable and setter
  const [flights, setFlights] = useState([]);//flights state variable and setter
  const [hotels, setHotels] = useState([]);//hotels state variable and setter
  const [selectedFlight, setSelectedFlight] = useState(null);//selectedFlight state variable and setter
  const [selectedHotel, setSelectedHotel] = useState(null);//selectedHotel state variable and setter
  const [bookingConfirmed, setBookingConfirmed] = useState(false);//bookingConfirmed state variable and setter

  // Handle input change for origin
  const handleSearch = () => {
    // Generate dummy flight data
    const dummyFlights = generateDummyFlights(origin, destination, departureDate);//dummyFlights state variable and setter
    setFlights(dummyFlights);//setFlights state variable and setter

    // Generate dummy hotel data
    const dummyHotels = generateDummyHotels(destination, departureDate, returnDate, passengers);//dummyHotels state variable and setter
    setHotels(dummyHotels);//setHotels state variable and setter
  };

  // Handle input change for origin
  const generateDummyFlights = (origin, destination, departureDate) => {
    // Simulate generating flight data
    const dummyFlights = [];//dummyFlights state variable and setter
    const airlines = ['Southwest Airlines', 'Delta Airlines', 'United Airlines', 'American Airlines', 'JetBlue Airways'];//airlines state variable and setter
//for loop
    for (let i = 0; i < airlines.length; i++) {
      const flight = {
        id: i + 1,//id state variable and setter
        name: airlines[i],//airlines state variable and setter
        origin,//origin state variable and setter
        destination,//destination state variable and setter
        availability: Math.random() < 0.5 ? 'Available' : 'Sold Out',//availability state variable and setter
        price: Math.floor(Math.random() * 500) + 100,//price state variable and setter
        departureTime: generateDummyTime(),//departureTime state variable and setter
        arrivalTime: generateDummyTime(), //arrivalTime state variable and setter
        connectingFlights: generateDummyConnectingFlights(),//connectingFlights state variable and setter
      };
      dummyFlights.push(flight);//  push() method adds new items to the end of an array, and returns the new length.
    }
    return dummyFlights;//return dummyFlights state variable and setter
  };
//generateDummyHotels function
  const generateDummyTime = () => {
    const hours = Math.floor(Math.random() * 24);//floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
    const minutes = Math.floor(Math.random() * 60);//floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;//padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
  };

  // Generate dummy connecting flights
  const generateDummyConnectingFlights = () => {
    // cities airport codes
    const cities = {
      LAX: 'Los Angeles',
      SFO: 'San Francisco',
      JFK: 'New York',
      ORD: 'Chicago',
      DFW: 'Dallas',
      DEN: 'Denver',
      SEA: 'Seattle',
      MIA: 'Miami',
      ATL: 'Atlanta',
      IAH: 'Houston',
      PHX: 'Phoenix',
      BOS: 'Boston',
      MCO: 'Orlando',
      MSP: 'Minneapolis',
      DTW: 'Detroit',
      PHL: 'Philadelphia',
      LAS: 'Las Vegas',
      CLT: 'Charlotte',
      FLL: 'Fort Lauderdale',
      BWI: 'Baltimore',
      MDW: 'Chicago',
      DCA: 'Washington',
      SAN: 'San Diego',
      IAD: 'Washington',
      HNL: 'Honolulu',
      TPA: 'Tampa',
      DAL: 'Dallas',
      BNA: 'Nashville',
      AUS: 'Austin',
      STL: 'St. Louis',
      OAK: 'Oakland',
      MCI: 'Kansas City',
      SMF: 'Sacramento',
      MSY: 'New Orleans',
      SAT: 'San Antonio',
      RDU: 'Raleigh',
      HOU: 'Houston',
      CLE: 'Cleveland',
      SJC: 'San Jose',
      SNA: 'Santa Ana',
      SLC: 'Salt Lake City',
      PIT: 'Pittsburgh',
      SJU: 'San Juan',
      MKE: 'Milwaukee',
      IND: 'Indianapolis',
      PDX: 'Portland',
      CUN: 'Cancun',
      CVG: 'Cincinnati',
      OGG: 'Kahului',
      BUR: 'Burbank',
      SDF: 'Louisville',
      ABQ: 'Albuquerque',
      BDL: 'Hartford',
      BUF: 'Buffalo',
      BHM: 'Birmingham',
      RSW: 'Fort Myers',
      MDT: 'Harrisburg',
      RIC: 'Richmond',
      TUS: 'Tucson',
      OKC: 'Oklahoma City',
      DAY: 'Dayton',
      MHT: 'Manchester',
      TUL: 'Tulsa',
      OMA: 'Omaha',
      PBI: 'West Palm Beach',
      ROC: 'Rochester',
      ORF: 'Norfolk',
      GEG: 'Spokane',
      DSM: 'Des Moines',
      MEM: 'Memphis',
      RNO: 'Reno',
      BOI: 'Boise',
      LIT: 'Little Rock',
      CHS: 'Charleston',
      SYR: 'Syracuse',
      GRR: 'Grand Rapids',
      PNS: 'Pensacola',
      MLI: 'Moline',
      CID: 'Cedar Rapids',
      BTV: 'Burlington',
      PWM: 'Portland',
      JAX: 'Jacksonville',
      MBS: 'Saginaw',
      GSO: 'Greensboro',
      ALB: 'Albany',
      BZN: 'Bozeman',
      TYS: 'Knoxville',
      AVL: 'Asheville',
      CAE: 'Columbia',
      GSP: 'Greenville',
      FNT: 'Flint',
      ELP: 'El Paso',
      LBB: 'Lubbock',
      ICT: 'Wichita',
      CHA: 'Chattanooga',
      FSD: 'Sioux Falls',
      FAR: 'Fargo',
      RAP: 'Rapid City',
      SGF: 'Springfield',
      BTR: 'Baton Rouge',
      JAN: 'Jackson',
      MOB: 'Mobile',
      TLH: 'Tallahassee',
      CRP: 'Corpus Christi',
      EUG: 'Eugene',
      GPT: 'Gulfport',
      LFT: 'Lafayette',
      AGS: 'Augusta',
      BIS: 'Bismarck',
      GNV: 'Gainesville',
      OAJ: 'Jacksonville',
      SAV: 'Savannah',
      SPS: 'Wichita Falls',
      VPS: 'Valparaiso',
    };
//generateDummyConnectingFlights function
    const numConnections = Math.floor(Math.random() * 3) + 1;//floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
    const connections = [];//connections array
    for (let i = 0; i < numConnections; i++) {
      const airportCodes = Object.keys(cities);//cities array keys 
      const randomAirportCode = airportCodes[Math.floor(Math.random() * airportCodes.length)];//airportCodes array
      connections.push(randomAirportCode);//pushing randomAirportCode to connections array
    }
    return connections;//returning connections array
  };
//generateDummyFlights function
  const generateDummyHotels = (destination, departureDate, returnDate, passengers) => {
    // Simulate generating hotel data
    const dummyHotels = [];//dummyHotels array
    const hotelNames = ['Marriott', 'Hilton', 'Hyatt', 'Sheraton', 'Holiday Inn'];//hotelNames array
//for loop
    for (let i = 0; i < hotelNames.length; i++) {
      const hotel = {
        id: i + 1,//id of hotel
        name: hotelNames[i],//name of hotel
        location: destination,//location of hotel
        availability: Math.random() < 0.5 ? 'Available' : 'Sold Out',//availability of hotel
        rooms: generateDummyRooms(),//rooms of hotel
      };
      dummyHotels.push(hotel);//pushing hotel to dummyHotels array
    }
    return dummyHotels;// returning dummyHotels array
  };
//generateDummyRooms function
  const generateDummyRooms = () => {
    const roomTypes = ['Standard', 'Deluxe', 'Suite'];//roomTypes array
    const bedTypes = ['Queen', 'King', 'Double'];//bedTypes array
    const numBeds = [1, 2, 2];//numBeds array
//  for loop
    const rooms = [];//rooms array
    for (let i = 0; i < roomTypes.length; i++) {
      const room = {
        id: i + 1,//id of room
        type: roomTypes[i],//type of room
        beds: numBeds[i],//beds of room
        bedType: bedTypes[i],//bedType of room
      };
      rooms.push(room);//pushing room to rooms array
    }
    return rooms;// returning rooms array
  };
//generateDummyHotels function
  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);//hours of time
    const minutes = Math.floor(Math.random() * 60);//minutes of time
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;//returning time
  };
//flightTime function
  const handleFlightSelection = (flight) => {
    setSelectedFlight(flight);//setting selectedFlight to flight
  };
//handleFlightSelection function
  const handleHotelSelection = (hotel) => {
    setSelectedHotel(hotel);//setting selectedHotel to hotel
  };

 //cities for flights
  const cities = {
    LAX: 'Los Angeles',
    SFO: 'San Francisco',
    JFK: 'New York',
    ORD: 'Chicago',
    DFW: 'Dallas',
    DEN: 'Denver',
    SEA: 'Seattle',
    MIA: 'Miami',
    ATL: 'Atlanta',
    IAH: 'Houston',
    PHX: 'Phoenix',
    BOS: 'Boston',
    MCO: 'Orlando',
    MSP: 'Minneapolis',
    DTW: 'Detroit',
    PHL: 'Philadelphia',
    LAS: 'Las Vegas',
    CLT: 'Charlotte',
    FLL: 'Fort Lauderdale',
    BWI: 'Baltimore',
    MDW: 'Chicago',
    DCA: 'Washington',
    SAN: 'San Diego',
    IAD: 'Washington',
    HNL: 'Honolulu',
    TPA: 'Tampa',
    DAL: 'Dallas',
    BNA: 'Nashville',
    AUS: 'Austin',
    STL: 'St. Louis',
    OAK: 'Oakland',
    MCI: 'Kansas City',
    SMF: 'Sacramento',
    MSY: 'New Orleans',
    SAT: 'San Antonio',
    RDU: 'Raleigh',
    HOU: 'Houston',
    CLE: 'Cleveland',
    SJC: 'San Jose',
    SNA: 'Santa Ana',
    SLC: 'Salt Lake City',
    PIT: 'Pittsburgh',
    SJU: 'San Juan',
    MKE: 'Milwaukee',
    IND: 'Indianapolis',
    PDX: 'Portland',
    CUN: 'Cancun',
    CVG: 'Cincinnati',
    OGG: 'Kahului',
    BUR: 'Burbank',
    SDF: 'Louisville',
    ABQ: 'Albuquerque',
    BDL: 'Hartford',
    BUF: 'Buffalo',
    BHM: 'Birmingham',
    RSW: 'Fort Myers',
    MDT: 'Harrisburg',
    RIC: 'Richmond',
    TUS: 'Tucson',
    OKC: 'Oklahoma City',
    DAY: 'Dayton',
    MHT: 'Manchester',
    TUL: 'Tulsa',
    OMA: 'Omaha',
    PBI: 'West Palm Beach',
    ROC: 'Rochester',
    ORF: 'Norfolk',
    GEG: 'Spokane',
    DSM: 'Des Moines',
    MEM: 'Memphis',
    RNO: 'Reno',
    BOI: 'Boise',
    LIT: 'Little Rock',
    CHS: 'Charleston',
    SYR: 'Syracuse',
    GRR: 'Grand Rapids',
    PNS: 'Pensacola',
    MLI: 'Moline',
    CID: 'Cedar Rapids',
    BTV: 'Burlington',
    PWM: 'Portland',
    JAX: 'Jacksonville',
    MBS: 'Saginaw',
    GSO: 'Greensboro',
    ALB: 'Albany',
    BZN: 'Bozeman',
    TYS: 'Knoxville',
    AVL: 'Asheville',
    CAE: 'Columbia',
    GSP: 'Greenville',
    FNT: 'Flint',
    ELP: 'El Paso',
    LBB: 'Lubbock',
    ICT: 'Wichita',
    CHA: 'Chattanooga',
    FSD: 'Sioux Falls',
    FAR: 'Fargo',
    RAP: 'Rapid City',
    SGF: 'Springfield',
    BTR: 'Baton Rouge',
    JAN: 'Jackson',
    MOB: 'Mobile',
    TLH: 'Tallahassee',
    CRP: 'Corpus Christi',
    EUG: 'Eugene',
    GPT: 'Gulfport',
    LFT: 'Lafayette',
    AGS: 'Augusta',
    BIS: 'Bismarck',
    GNV: 'Gainesville',
    OAJ: 'Jacksonville',
    SAV: 'Savannah',
    SPS: 'Wichita Falls',
    VPS: 'Valparaiso',
  };
//bookingConfirmed function
  const handleBookNow = () => {
    if (selectedFlight && selectedHotel) {
      console.log('Selected Flight:', selectedFlight);//console.log selectedFlight
      console.log('Selected Hotel:', selectedHotel);//console.log selectedHotel
      setBookingConfirmed(true);//setting bookingConfirmed to true
    } else {
      console.log('Please select a flight and a hotel');//console.log
    }
  };
//handleBookNow function
  const handleCancelBooking = () => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this booking?');//confirmCancel
    if (confirmCancel) {
      setSelectedFlight(null);//setting selectedFlight to null
      setSelectedHotel(null);// setting selectedHotel to null
      setBookingConfirmed(false);//setting bookingConfirmed to false
    }
  };

  //flight and hotel search
  return (
    <div>
      <h1>Flight and Hotel Search</h1>

      <div>
        <label htmlFor="origin">Origin:</label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="passengers">Passengers:</label>
        <input
          type="number"
          id="passengers"
          value={passengers}
          onChange={(e) => setPassengers(parseInt(e.target.value))}
        />
      </div>

      <div>
        <button onClick={handleSearch}>Search</button>
      </div>

      {flights.length > 0 && (
        <div>
          <h2>Flight Details</h2>
          {flights.map((flight) => (
            <div key={flight.id}>
              <h3>{flight.name}</h3>
              <p>Origin: {flight.origin}</p>
              <p>Availability: {flight.availability}</p>
              <p>Price: ${flight.price}</p>
              <p>Departure Time: {flight.departureTime}</p>
              <p>Arrival Time: {flight.arrivalTime}</p>
              {flight.connectingFlights.length > 0 && (
                <div>
                  <p>Connecting Flights:</p>
                  <ul>
                    {flight.connectingFlights.map((city, index) => (
                      <li key={index}>{cities[city]}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedFlight && selectedFlight.id === flight.id ? (
                <button disabled={bookingConfirmed}>Book Now</button>
              ) : (
                <button onClick={() => handleFlightSelection(flight)} disabled={bookingConfirmed}>
                  Select Flight
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {hotels.length > 0 && (
        <div>
          <h2>Hotel Details</h2>
          {hotels.map((hotel) => (
            <div key={hotel.id}>
              <h3>{hotel.name}</h3>
              <p>Location: {hotel.location}</p>
              <p>Availability: {hotel.availability}</p>
              <h4>Rooms:</h4>
              {hotel.rooms.map((room) => (
                <div key={room.id}>
                  <p>Type: {room.type}</p>
                  <p>Number of Beds: {room.beds}</p>
                  <p>Bed Type: {room.bedType}</p>
                </div>
              ))}
              {selectedHotel && selectedHotel.id === hotel.id ? (
                <button disabled={bookingConfirmed}>Book Now</button>
              ) : (
                <button onClick={() => handleHotelSelection(hotel)} disabled={bookingConfirmed}>
                  Select Hotel
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {selectedFlight && selectedHotel && (
        <div>
          <h2>Selected Options</h2>
          <div>
            <h3>Flight:</h3>
            <p>{selectedFlight.name}</p>
            <p>Origin: {selectedFlight.origin}</p>
            <p>Departure Time: {selectedFlight.departureTime}</p>
            <p>Arrival Time: {selectedFlight.arrivalTime}</p>
            {selectedFlight.connectingFlights.length > 0 && (
              <div>
                <p>Connecting Flights:</p>
                <ul>
                  {selectedFlight.connectingFlights.map((city, index) => (
                    <li key={index}>{cities[city]}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <h3>Hotel:</h3>
            <p>{selectedHotel.name}</p>
            <p>Location: {selectedHotel.location}</p>
            <h4>Rooms:</h4>
            {selectedHotel.rooms.map((room) => (
              <div key={room.id}>
                <p>Type: {room.type}</p>
                <p>Number of Beds: {room.beds}</p>
                <p>Bed Type: {room.bedType}</p>
              </div>
            ))}
          </div>
          {!bookingConfirmed && (
            <div>
              <button onClick={handleBookNow}>Book Now</button>
              <button onClick={handleCancelBooking}>Cancel</button>
            </div>
          )}
          {bookingConfirmed && (
            <div>
              <p>Booking Confirmed!</p>
              <p>Enjoy your trip!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Booking;
