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
  DialogActions,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../../../redux/actions/LoginAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
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
                      <img src={row.imageUrl} height={'30px'} width={'30px'} alt="Profile" />
                    </TableCell>
                    <TableCell align='center'>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={handleActionClick}
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
              {allUsers.map((user) => (
                <div key={user.userID} style={{ marginBottom: '20px' }}>
                  <Typography variant="h6">User ID: {user.userID}</Typography>
                  <Typography>Full Name: {user.fullName}</Typography>
                  <Typography>Date of Birth: {formatDate(user.dateOfBirth)}</Typography>
                  <Typography>Phone Number: {user.phoneNumber}</Typography>
                  <Typography>Interests: {user.interests}</Typography>
                  <Typography>
                    Profile Picture: <img src={user.imageUrl} height={'100px'} width={'100px'} alt="Profile" />
                  </Typography>
                  <hr />
                </div>
              ))}
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
