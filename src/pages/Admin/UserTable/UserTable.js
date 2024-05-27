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

export const UserTable = () => {
  const { allUsers, error, loading } = useSelector((state) => state.Users);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleActionClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
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
                    <TableCell>{formatDate(row.dateOfBirth)}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.interests}</TableCell>
                    <TableCell align='center'>
                      <img src={row.imageUrl} height={'30px'} width={'30px'} alt="Profile" loading="lazy" />
                    </TableCell>
                    <TableCell align='center'>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={handleActionClick}
                        aria-label={`More info about ${row.fullName}`}
                      >
                        Info
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog open={open} onClose={handleClose} aria-labelledby="all-users-info-dialog">
            <DialogTitle id="all-users-info-dialog">All Users Information</DialogTitle>
            <DialogContent>
              <UserInfoTable users={allUsers} formatDate={formatDate} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default UserTable;
