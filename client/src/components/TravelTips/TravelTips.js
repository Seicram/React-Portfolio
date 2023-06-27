import React from "react";
import "../../index.css";

// Travel Tips page to help users plan their trip and keep track of important documents and information
const TravelTips = () => {
  return (
    <div className="TravelTips-container">
      <div>
        <h1>Packing Checklist</h1>
        <ul>
          <li>Clothes</li>
          <li>Toiletries</li>
          <li>Travel documents</li>
          <li>Electronics</li>
          <li>Medications</li>
          {/* Add more items as needed */}
        </ul>
      </div>
      <div className="section">
        <h1>Travel Tips</h1>
        <p>Here are some helpful travel tips:</p>
        <ul className="travel-tips-list">
          <li>
            Pack light and smart. Only bring essentials and check the weather
            forecast.
          </li>
          <li>
            Research your destination and learn about local customs and
            traditions.
          </li>
          <li>
            Keep copies of important documents like passports and travel
            insurance.
          </li>
          <li>Stay hydrated and bring a refillable water bottle.</li>
          <li>Use public transportation or walk to explore the city.</li>
          <li>Try local cuisines and immerse yourself in the culture.</li>
          <li>Carry a portable charger for your electronic devices.</li>
          <li>Keep a travel journal to document your experiences.</li>
          <li>
            Stay connected with loved ones through social media or online
            messaging apps.
          </li>
          <li>
            Be respectful of the environment and follow sustainable travel
            practices.
          </li>
          <li>Have fun and enjoy your trip!</li>
        </ul>
      </div>

      <div className="section">
        <h1>Documents</h1>
        <p>Here you can keep track of important trip notes and documents:</p>
        <ul className="travel-tips-list">
          <li>Travel itinerary: Plan and organize your daily activities.</li>
          <li>Hotel reservations: Keep track of your accommodation details.</li>
          <li>Flight tickets: Store your flight booking information.</li>
          <li>Passport copies: Keep digital copies of your passport.</li>
          <li>
            Travel insurance documents: Access important insurance information.
          </li>
          <li>Emergency contact numbers: Keep a list of important contacts.</li>
          <li>
            Local maps and guides: Save offline maps and guides for easy access.
          </li>
          <li>
            Health and vaccination records: Store essential health information.
          </li>
          <li>
            Visa documents: Keep track of visa requirements and documents.
          </li>
          <li>
            Important phone numbers and addresses: Store local emergency numbers
            and addresses.
          </li>
          <li>
            Other important documents: Store any other important documents.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TravelTips;
