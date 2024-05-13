import React, { useState, useEffect } from 'react';
import './AdminProfileManagement.css'; 

const AdminProfileManagement = () => { 
  const [member, setMember] = useState({
    name: '',
    email: '',
    joinDate: '',
    interests: '',
    phoneNumber: '',
    dateOfBirth: ''
  });

  const [editMode, setEditMode] = useState(false); 

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

  const enterEditMode = () => {
    setEditMode(true);
  };

  const saveChanges = () => {
    setEditMode(false);
    
  };

  return (
    <div className="profile-form">
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={member.name} onChange={handleInputChange} disabled={!editMode} />
        <label>Phone Number:</label>
        <input type="tel" name="phoneNumber" value={member.phoneNumber} onChange={handleInputChange} disabled={!editMode} />
      </form>
      <button onClick={enterEditMode}>Edit</button>
      <button onClick={saveChanges}>Save</button>
    </div>
  );
};

export default AdminProfileManagement;
