import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material';

const UserInfoTable = ({ users, formatDate }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='user info table'>
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
          {users.map((user) => (
            <TableRow key={user.userID}>
              <TableCell>{user.userID}</TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{formatDate(user.dateOfBirth)}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>{user.interests}</TableCell>
              <TableCell align='center'>
                <img src={user.imageUrl} height={'30px'} width={'30px'} alt="Profile" loading="lazy" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserInfoTable;
