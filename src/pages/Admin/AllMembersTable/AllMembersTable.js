import React, { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllMembers } from '../../../redux/actions/MembersAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import { ToastContainer } from 'react-toastify';
import MetaData from '../../../components/MetaData';
import './Members.css';

export const MembersTable = () => {
  const { allMembers, error, loading } = useSelector((state) => state.Members);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllMembers());
  }, [dispatch]);

  return (
    <div>
      <MetaData title="Members" />
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
                </TableRow>
              </TableHead>
              <TableBody>
                {allMembers.map((row) => (
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default MembersTable;
