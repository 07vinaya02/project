import React, { useState } from "react";
import MapComponent from "./MapComponent";
import "./ProfileDetailsPage.css";
import { useNavigate } from "react-router-dom";


const ProfileDetailsPage = ({ people }) => {
  const [mapVisible, setMapVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({ lat: 0, lng: 0 });

  
  const handleLocationClick = (location) => {
    if (location && location.lat && location.lng) {
      setSelectedLocation(location);
      setMapVisible(true);
    }
  };
  const navigate =useNavigate();
    const goToHomePage =()=>{
    navigate('/');
  }
  return (
    <div className="profile-container">
      {people.map((person) => (
        <div key={person.id}>
             <img src={person.photo} alt={person.name} className="profile-image" />
        <div key={person.id} className="profile-card">
        
          {/* <img src={person.photo} alt={person.name} className="profile-image" /> */}
          <h2 className="profile-name">{person.name}</h2>
          <p className="profile-location">
            <strong>Location:</strong> {person.location.address}
          </p>
          <p className="profile-work">
            <strong>Work:</strong> {person.work}
          </p>
          <button
            className="profile-btn"
            onClick={() => handleLocationClick(person.location.coordinates)}
          >
            Location
          </button>
        </div>
        </div>
        
      ))}

      {mapVisible && (
        <MapComponent location={selectedLocation} onClose={() => setMapVisible(false)} />
      )}
     <div>
            <button className="addbtn" onClick={goToHomePage}>HomePage</button>
        </div>
    </div>
    
  );
};

export default ProfileDetailsPage;