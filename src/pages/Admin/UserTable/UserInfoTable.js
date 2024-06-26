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
import { DeleteUser } from '../../../redux/actions/DeleteUserAction';
import './UserTable.css';
import { toast } from 'react-toastify';

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
  const [password, setPassword] = useState('');
  const [imageUrI, setImageUrI] = useState('');
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
      setPassword(userToUpdate.password);
      setImageUrI(userToUpdate.imageUrl);
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
      const myForm = {
        userID: 0,   
        fullName,
        dateOfBirth: convertToAPIDate(dateOfBirth),
        phoneNumber,
        interests,
        userType,
        password,
        imageUrl: imageUrI
      };

      try {
        const response = await dispatch(UpdateUserDetails({ myForm, id }));
        toast.success('User updated successfully:');
      } catch (error) {
        toast.error('Error updating user details:');
      }

      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  const handleDelete = async () => {
    try {
      if (!selectedUser) {
        throw new Error('No user selected');
      }

      const id = selectedUser.userID;
      const myForm = {}; 

      try {
        const response = await dispatch(DeleteUser({ myForm, id }));
        toast.success('User deleted successfully:');
      } catch (error) {
        toast.error('Error deleting user:');
      }

      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      {selectedUser && (
        <Dialog open={open} onClose={handleClose}>
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
            <Button onClick={handleDelete} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default UserInfoTable;
