import React, { useState } from "react";

const AddDetailsForm = ({ onAddProfile }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    location: { address: "", coordinates: { lat: 0, lng: 0 } },
    work: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfileWithId = { ...newProfile, id: Date.now() }; // Create unique ID for new profile
    onAddProfile(newProfileWithId); // Pass the new profile to the parent component
    setNewProfile({
      name: "",
      photo: "",
      location: { address: "", coordinates: { lat: 0, lng: 0 } },
      work: "",
    }); // Reset the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={newProfile.name}
        onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={newProfile.photo}
        onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={newProfile.location.address}
        onChange={(e) =>
          setNewProfile({
            ...newProfile,
            location: { ...newProfile.location, address: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="Work"
        value={newProfile.work}
        onChange={(e) =>
          setNewProfile({ ...newProfile, work: e.target.value })
        }
      />
      <button type="submit">Add Profile</button>
    </form>
  );
};

export default AddDetailsForm;
