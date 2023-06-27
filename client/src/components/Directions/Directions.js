import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Link is used to navigate between routes in the app
import { MapContainer, TileLayer, useMap } from "react-leaflet"; // map container, tile layer, and use map are used to create the map
import "leaflet/dist/leaflet.css"; // leaflet/dist/leaflet.css is used to style the map
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"; // leaflet-routing-machine/dist/leaflet-routing-machine.css is used to style the routing machine
import L from "leaflet"; // L from 'leaflet' is used to create the map
import "leaflet-routing-machine"; // 'leaflet-routing-machine' is used to create the routing machine
import "../../index.css";

// directions component for the directions page of the app
const Directions = () => {
  const mapContainerRef = useRef(null); // map container reference
  const [map, setMap] = useState(null); // sets the map
  const [startAddress, setStartAddress] = useState(""); // sets the start address
  const [endAddress, setEndAddress] = useState(""); // sets the end address
  const [showSearchHistory, setShowSearchHistory] = useState(false); // shows the search history

  // Array to store recent searches
  const [searchHistory, setSearchHistory] = useState([]); // sets the search history

  // Load map on component mount and initialize map instance and set it to state
  useEffect(() => {
    let mapInstance = null; // sets the map instance to null

    // Function to initialize map
    const initializeMap = () => {
      if (mapInstance) {
        mapInstance.remove(); // removes the map instance
      }

      // Creates the map instance
      mapInstance = L.map(mapContainerRef.current).setView([40, -95.5], 5); // sets the view to the coordinates and zoom level of the map

      // Adds the tile layer to the map instance
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "Map data © OpenStreetMap contributors", // attribution for the map data
        maxZoom: 18, // sets the max zoom level
      }).addTo(mapInstance); // adds the map instance to the map

      L.control.zoom({ position: "topright" }).addTo(mapInstance); // adds the zoom control to the map instance

      setMap(mapInstance); // sets the map instance to the map
    };

    initializeMap(); // initializes the map

    // Remove map on component unmount as clean up
    return () => {
      if (mapInstance) {
        mapInstance.remove(); // removes the map instance
      }
    };
  }, []); // empty array

  // Function to handle start address input change
  const convertKilometersToMiles = (kilometers) => {
    const milesConversionFactor = 0.62137119; // conversion factor for miles
    return kilometers * milesConversionFactor; // returns the kilometers times the conversion factor
  };

  // Function to handle end address input change
  const handleRouteSearch = async () => {
    try {
      const startCoordinates = await geocodeAddress(startAddress); // gets the start coordinates
      const endCoordinates = await geocodeAddress(endAddress); // gets the end coordinates

      // If start and end coordinates exist and map instance exists, calculate route
      if (startCoordinates && endCoordinates && map) {
        const waypoints = [
          L.latLng(startCoordinates.lat, startCoordinates.lon), // sets the start coordinates
          L.latLng(endCoordinates.lat, endCoordinates.lon), // sets the end coordinates
        ];

        // sets the waypoints
        L.Routing.control({
          waypoints,
          routeWhileDragging: true, // allows the route to be dragged
          draggableWaypoints: true, // allows the waypoints to be dragged
          router: new L.Routing.OSRMv1({
            serviceUrl: "https://router.project-osrm.org/route/v1", // sets the service url
          }),
          lineOptions: {
            styles: [
              { color: "blue", opacity: 0.6, weight: 6 }, // sets the line options
            ],
          },
        }).addTo(map); // adds the route to the map

        // Store the search in the search history
        setSearchHistory((prevSearchHistory) => [
          ...prevSearchHistory,
          { startAddress, endAddress }, // sets the start and end address
        ]);
      }
    } catch (error) {
      console.error("Error:", error); // logs the error
    }
  };

  const calculateRouteDistance = (waypoints) => {
    // Implement route distance calculation logic
  };

  // Function to geocode address using OpenStreetMap Nominatim API
  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}` // fetches the address
      );
      const data = await response.json(); // gets the response data

      // If response data is not empty, return coordinates
      if (data.length > 0) {
        return {
          lat: parseFloat(data[0].lat), // analyzes the latitude of the address
          lon: parseFloat(data[0].lon), // analyzes the longitude of the address
        };
      } else {
        console.log("No results found for address:", address); // logs the error
        return null;
      }
    } catch (error) {
      console.error("Error geocoding address:", error); // logs the error
      return null;
    }
  };

  // Function to handle search history click
  const handleSearchClick = (search) => {
    setStartAddress(search.startAddress);
    setEndAddress(search.endAddress);
    handleRouteSearch();
    setShowSearchHistory(false);
  };

  // Function to handle clear search history
  const handleClearSearchHistory = () => {
    setSearchHistory([]);
    setStartAddress("");
    setEndAddress("");
    setShowSearchHistory(false);
  };

  // Function to handle delete search
  const handleDeleteSearch = (index) => {
    setSearchHistory((prevSearchHistory) =>
      prevSearchHistory.filter((_, i) => i !== index)
    );
  };

  // Function to handle start address input change
  return (
    <div>
      <h1>Map & Directions</h1>
      <div className="search-container">
        <input
          type="text"
          id="startAddress"
          value={startAddress}
          onChange={(e) => setStartAddress(e.target.value)}
          placeholder="Start Address"
          style={{ marginLeft: "250px" }}
        />
        <input
          type="text"
          id="endAddress"
          value={endAddress}
          onChange={(e) => setEndAddress(e.target.value)}
          placeholder="End Address"
        />
        <button
          className="search-button"
          onClick={handleRouteSearch}
          style={{ marginRight: "30px" }}
        >
          Search Route
        </button>
        <button
          className="search-button"
          onClick={() => setShowSearchHistory(true)}
        >
          Search History
        </button>
      </div>
      {showSearchHistory && (
        <div className="search-history-overlay">
          <div className="search-history-popup">
            <h2>Search History</h2>
            {searchHistory.length > 0 ? (
              <ul>
                {searchHistory.map((search, index) => (
                  <li key={index}>
                    <button onClick={() => handleSearchClick(search)}>
                      {search.startAddress} - {search.endAddress}
                    </button>
                    <button onClick={() => handleDeleteSearch(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recent searches.</p>
            )}
            <button
              onClick={handleClearSearchHistory}
              style={{ marginRight: "10px" }}
            >
              Clear Search History
            </button>
            <button onClick={() => setShowSearchHistory(false)}>Close</button>
          </div>
        </div>
      )}
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
};

export default Directions;
