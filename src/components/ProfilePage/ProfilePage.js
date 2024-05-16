import React, { useState, useEffect } from "react";
import './ProfilePage.css'; 

const ProfilePage = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interests, setInterests] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("profileData"));

    if (storedData) {
      setFullName(storedData.fullName || "");
      setDateOfBirth(storedData.dateOfBirth || "");
      setPhoneNumber(storedData.phoneNumber || "");
      setInterests(storedData.interests || "");
      setImage(storedData.image || "");
    }
  }, []);

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div>
        <label>Full Name:</label>
        <input type="text" value={fullName} readOnly />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="text" value={dateOfBirth} readOnly />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} readOnly />
      </div>
      <div>
        <label>Interests:</label>
        <input type="text" value={interests} readOnly />
      </div>
      <div>
        <label>Image:</label>
        {image && <img src={image} alt="Profile" />}
      </div>
    </div>
  );
};

export default ProfilePage;
