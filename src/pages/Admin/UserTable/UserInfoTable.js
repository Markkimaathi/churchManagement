import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { UpdateUserDetails } from '../../../redux/actions/UpdateUserAction';
import './UserTable.css';

const convertToAPIDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString();
};

const UserInfoTable = ({ users, formatDate, userId }) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [interests, setInterests] = useState('');
  const [userType, setUserType] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const userToUpdate = users.find(user => user.userID === userId);

    if (userId && userToUpdate) {
      setSelectedUser(userToUpdate);
      setOpen(true);
      setFullName(userToUpdate.fullName);
      setDateOfBirth(userToUpdate.dateOfBirth.split('T')[0]);
      setPhoneNumber(userToUpdate.phoneNumber);
      setInterests(userToUpdate.interests);
      setUserType(userToUpdate.userType);
    }
  }, [userId, users]);

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
    setFullName('');
    setDateOfBirth('');
    setPhoneNumber('');
    setInterests('');
    setUserType('');
  };

  const handleSave = async () => {
    try {
      if (!selectedUser) {
        throw new Error('No user selected');
      }

      const id = selectedUser.userID;

      const formData = {
        userID: id,
        fullName: fullName,
        dateOfBirth: convertToAPIDate(dateOfBirth),
        phoneNumber: phoneNumber,
        interests: interests,
        userType: userType
      };

      console.log('formData:', formData);

      const API_ENDPOINT_URL = `http://localhost:81/api/Users/Update/${id}`;

      const response = await fetch(API_ENDPOINT_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error data:', errorData);
        throw new Error('Failed to update user details');
      }

      const responseData = await response.json();
      console.log(responseData);

      // Dispatch the action after successful update
      dispatch(UpdateUserDetails(formData));

      handleClose();
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <>
      {selectedUser && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update User Information</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Date of Birth"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Phone Number"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Interests"
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>User Type</InputLabel>
              <Select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <MenuItem value={0}>Member</MenuItem>
                <MenuItem value={1}>Clergy</MenuItem>
                <MenuItem value={2}>Admin</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default UserInfoTable;
