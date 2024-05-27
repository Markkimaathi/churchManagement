import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions
} from '@mui/material';

const UserInfoTable = ({ users, formatDate }) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    interests: '',
    userType: ''
  });

  const handleUpdate = (userId) => {
    const userToUpdate = users.find(user => user.userID === userId);
    setSelectedUser(userToUpdate);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
    setUpdatedInfo({
      fullName: '',
      dateOfBirth: '',
      phoneNumber: '',
      interests: '',
      userType: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:81/api/Users/Update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: selectedUser.userID,
          ...updatedInfo
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update user information');
      }

      console.log("User information updated successfully");
    } catch (error) {
      console.error('Error updating user information:', error.message);
    }

    handleClose();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='user info table'>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Phone NO</TableCell>
              <TableCell>Interests</TableCell>
              <TableCell>User Type</TableCell>
              <TableCell align='center'>Profile pic</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.userID}>
                <TableCell>{user.userID}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{formatDate(user.dateOfBirth)}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.interests}</TableCell>
                <TableCell>{user.userType}</TableCell>
                <TableCell align='center'>
                  <img src={user.imageUrl} height={'30px'} width={'30px'} alt="Profile" loading="lazy" />
                </TableCell>
                <TableCell align='center'>
                  <Button variant="outlined" color="primary" onClick={() => handleUpdate(user.userID)}>Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update User Information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            type="text"
            name="fullName"
            value={updatedInfo.fullName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Date of Birth"
            type="text"
            name="dateOfBirth"
            value={updatedInfo.dateOfBirth}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="text"
            name="phoneNumber"
            value={updatedInfo.phoneNumber}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Interests"
            type="text"
            name="interests"
            value={updatedInfo.interests}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="User Type"
            type="text"
            name="userType"
            value={updatedInfo.userType}
            onChange={handleChange}
            fullWidth
          />
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
    </>
  );
};

export default UserInfoTable;
