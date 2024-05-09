import React, { useState, useEffect } from 'react';
import './ProfileManagement.css'; 

const ProfileManagement = () => { 
  const [member, setMember] = useState({
    name: '',
    email: '',
    joinDate: '',
    interests: '',
    phoneNumber: '',
    dateOfBirth: ''
  });
 
  useEffect(() => {
    const storedMember = JSON.parse(localStorage.getItem('member'));
    if (storedMember) {
      setMember(storedMember);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMember(prevMember => ({
      ...prevMember,
      [name]: value
    }));
  };

  useEffect(() => {
    localStorage.setItem('member', JSON.stringify(member));
  }, [member]);

  return (
    <div className="profile-form">
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={member.name} onChange={handleInputChange} />
        <label>Email:</label>
        <input type="email" name="email" value={member.email} onChange={handleInputChange} />
        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth" value={member.dateOfBirth} onChange={handleInputChange} />
        <label>Join Date:</label>
        <input type="date" name="joinDate" value={member.joinDate} onChange={handleInputChange} />
        <label>Interests:</label>
        <input type="text" name="interests" value={member.interests} onChange={handleInputChange} />
        <label>Phone Number:</label>
        <input type="tel" name="phoneNumber" value={member.phoneNumber} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default ProfileManagement; 