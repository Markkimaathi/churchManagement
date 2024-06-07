import React, { useState, useEffect } from "react";
import './ProfilePage.css'; 

const ProfilePage = () => {
  const [FullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interests, setInterests] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userID = localStorage.getItem('userID');
        const response = await fetch(`http://localhost:81/api/Users/GetAll`);
      
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const currentUser = await response.json();
        console.log('Fetched user:', currentUser); 

        setFullName(currentUser.FullName || "");
        setDateOfBirth(currentUser.dateOfBirth || "");
        setPhoneNumber(currentUser.phoneNumber || "");
        setInterests(currentUser.interests || "");
        setImage(currentUser.image || "");
        
        localStorage.setItem("profileData", JSON.stringify(currentUser));
      } catch (error) {
        console.error('Error fetching the user profile:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div>
        <label>Full Name:</label>
        <input type="text" value={FullName} readOnly />
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