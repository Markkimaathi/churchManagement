import React, { useEffect, useState } from 'react';
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
  DialogActions
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../../../redux/actions/LoginAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import UserInfoTable from './UserInfoTable'; 
import './UserTable.css';
import { ToastContainer } from 'react-toastify';

export const UserTable = () => {
  const { allUsers, error, loading } = useSelector((state) => state.Users);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);

  const handleActionClick = (userId) => {
    const userToUpdate = allUsers.find(user => user.userID === userId);
    setSelectedUser(userToUpdate);
    setUpdateDialogOpen(true);
  };

  const handleCloseUpdateDialog = () => {
    setUpdateDialogOpen(false);
  };

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
            <ToastContainer />
          <TableContainer sx={{ maxHeight: '1500px' }} component={Paper}>
            <Table stickyHeader aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Phone NO</TableCell>
                  <TableCell>Interests</TableCell>
                  <TableCell align='center'>Profile pic</TableCell>
                  <TableCell align='center'>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allUsers.map((row) => (
                  <TableRow
                    key={row.userID}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{row.userID}</TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell>{row.dateOfBirth}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.interests}</TableCell>
                    <TableCell align='center'>
                      <img src={row.imageUrl} height={'30px'} width={'30px'} alt="Profile" loading="lazy" />
                    </TableCell>
                    <TableCell align='center'>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={() => handleActionClick(row.userID)}
                        aria-label={`Update info for ${row.fullName}`}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        
            <DialogContent>
              {selectedUser && (
                <UserInfoTable 
                  users={[selectedUser]} 
                  userId={selectedUser.userID} 
                />
              )}
            </DialogContent>
 
        </>
      )}
    </div>
  );
};

export default UserTable;
