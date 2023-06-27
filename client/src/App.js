import React, { useEffect, useState } from "react"; //react hooks are used to manage state in functional components
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; //react router is used to manage routing
import HomePage from "./components/HomePage/HomePage";
import Logout from "./components/Logout/Logout";
import CommunityPage from "./components/Community/Community";
import Budget from "./components/Budget/Budget";
import Booking from "./components/Booking/Booking";
import Translation from "./components/Translation/Translation";
import Directions from "./components/Directions/Directions";
import Journal from "./components/Journal/Journal";
import TravelTips from "./components/TravelTips/TravelTips";
import Weather from "./components/Weather/Weather";

//App is the main component that is rendered in index.js
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //useState is a react hook that allows you to use state in a functional component
  const [journalEntries, setJournalEntries] = useState([]); // sets the journal entries to an empty array
  const [community, setCommunity] = useState([]); // sets the community to an empty array

  // useEffect is a react hook that allows you to perform side effects in a functional component
  useEffect(() => {
    // Perform authentication check and update isLoggedIn state
    // You can use localStorage, cookies, or API calls for authentication
    // Example: Check if user is logged in and update isLoggedIn state accordingly
    const checkAuthStatus = () => {
      const isAuthenticated = localStorage.getItem("isLoggedIn") === "true"; // checks if the user is logged in
      setIsLoggedIn(isAuthenticated); // sets the isLoggedIn state to the isAuthenticated value
    };

    checkAuthStatus(); // calls the checkAuthStatus function
  }, []);

  // Add the entry to the journal entries array
  const addToJournalEntries = (entry) => {
    setJournalEntries((prevEntries) => [...prevEntries, entry]); // sets the journal entries to the previous entries and adds the new entry
    addToCommunity(entry); // Add the entry to Community as well
  };

  // Add the entry to the community array
  const addToCommunity = (entry) => {
    setCommunity((prevEntries) => [...prevEntries, entry]); // sets the community to the previous entries and adds the new entry
  };

  // App component code goes here ...
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/journal">Journal</Link>
              </li>
            )}
            {isLoggedIn ? (
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
        {/*Routes are used to manage routing in react*/}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/logout"
            element={<Logout setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/community"
            element={<CommunityPage community={community} />}
          />
          <Route
            path="/journal"
            element={
              <Journal
                addToJournalEntries={addToJournalEntries}
                addToCommunity={addToCommunity}
              />
            }
          />
          <Route path="/budget" element={<Budget isLoggedIn={isLoggedIn} />} />
          <Route
            path="/booking"
            element={<Booking isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/translation"
            element={<Translation isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/directions"
            element={<Directions isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/tips"
            element={<TravelTips isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/weather"
            element={<Weather isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
