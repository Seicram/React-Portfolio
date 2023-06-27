import React, { useState } from "react"; //  React, { useState } from 'react' is a hook that allows you to use state in a functional component.
import { Link, useNavigate } from "react-router-dom"; //{ Link, useNavigate } from 'react-router-dom' is a hook that allows you to navigate between pages in a React app.
import "../../index.css";

// Home page component
const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false); // Reset the login status
  };

  const handleSignIn = () => {
    navigate("/login"); // Navigate to the login page
  };

  // homepage component code goes here ...
  return (
    <div className="page-container">
      <h1>Welcome to Destination Rendezvous</h1>
      <p>
        Discover new destinations, plan your trips, and make the most out of
        your travel experiences with our comprehensive travel app. Whether
        you're a seasoned traveler or just getting started, our app has
        everything you need to make your journeys unforgettable.
      </p>
      <div className="features">
        <div className="feature">
          <h2>
            {isLoggedIn ? (
              <Link to="/travel-tips" className="link">
                Travel Tips
              </Link>
            ) : (
              <span className="inactive-link">Travel Tips</span>
            )}
          </h2>
          <p>
            Discover helpful reminders to enhance your trip and ensure you don't
            forget any essential items.
          </p>
        </div>

        <div className="feature">
          <h2>
            {isLoggedIn ? (
              <Link to="/community" className="link">
                Community
              </Link>
            ) : (
              <span className="inactive-link">Community</span>
            )}
          </h2>
          <p>
            Embark on a captivating journey through the message board and
            unravel the captivating tales and adventures shared by fellow
            travelers.
          </p>
        </div>

        <div className="feature">
          <h2>
            {isLoggedIn ? (
              <Link to="/budgeting" className="link">
                Budgeting
              </Link>
            ) : (
              <span className="inactive-link">Budgeting</span>
            )}
          </h2>
          <p>
            Plan and manage your travel budget effectively. Use our budgeting
            tools to set financial goals, track expenses, and get personalized
            recommendations to optimize your spending.
          </p>
        </div>
        <div className="feature">
          <h2>
            {isLoggedIn ? (
              <Link to="/booking" className="link">
                Booking
              </Link>
            ) : (
              <span className="inactive-link">Booking</span>
            )}
          </h2>
          <p>
            Find the best flight and hotel deals for your travel dates. Compare
            prices, check availability, and book directly through our app.
            Receive notifications for price drops and exclusive offers.
          </p>
        </div>

        <div className="feature">
          <h2>
            {isLoggedIn ? (
              <Link to="/directions" className="link">
                Directions
              </Link>
            ) : (
              <span className="inactive-link">Directions</span>
            )}
          </h2>
          <p>
            Get detailed directions to your destination. Find the best routes,
            avoid traffic, and get real-time updates on your travel plans. Sync
            your itineraries across devices for easy access.
          </p>
        </div>

        <div className="feature">
          <h2>
            {isLoggedIn ? (
              <Link to="/weather" className="link">
                Weather
              </Link>
            ) : (
              <span className="inactive-link">Weather</span>
            )}
          </h2>
          <p>
            Check the weather forecast for your destination. Get detailed
            information about the current weather conditions, including
            temperature, humidity, wind speed, and more.
          </p>
        </div>

        <div className="feature">
          <h2>
            {isLoggedIn ? (
              <Link to="/journal" className="link">
                Journal
              </Link>
            ) : (
              <span className="inactive-link">Journal</span>
            )}
          </h2>
          <p>
            Keep a travel journal to document your adventures. Add photos,
            videos, and notes to your journal entries. Share your journal with
            friends and family.
          </p>
        </div>

        <div className="feature">
          <h2>
            {isLoggedIn ? (
              <Link to="/translation" className="link">
                Translation
              </Link>
            ) : (
              <span className="inactive-link">Translation</span>
            )}
          </h2>
          <p>
            Translate words and phrases into different languages. Learn how to
            say common phrases in the local language. Get help communicating
            with locals.
          </p>
        </div>
      </div>
      <br />
      <br />

      <div className="feature">
        {isLoggedIn ? (
          <div>
            <h4 style={{ textAlign: "center" }}>
              Ready to embark on your next adventure?
            </h4>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h4 style={{ textAlign: "center" }}>
              Please log in to access all features.
            </h4>
            <div>
              <button onClick={handleSignIn}>Sign In</button>
              <Link to="/signup">Sign Up</Link> {/* Link to the signup page */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
