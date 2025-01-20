import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./MapComponent.css";

const MapComponent = ({ location, onClose }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className="map-overlay">
      <div className="map-container">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <LoadScript googleMapsApiKey="AIzaSyC0X2rh0M-GZMze8LzQJQ4mXw_GVzodQOs">
          <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={12}>
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapComponent; // Ensure the default export