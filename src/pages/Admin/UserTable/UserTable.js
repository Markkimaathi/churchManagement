import React, { useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../../../redux/actions/LoginAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import './UserTable.css';


export const UserTable = () => {
  const { allUsers, error, loading } = useSelector((state) => state.Users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : (
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
                    <img src={row.imageUrl} height={'30px'} width={'30px'} alt="Profile" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default UserTable;
