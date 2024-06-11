import React, { useEffect } from 'react';
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
import { GetAllClergies } from '../../../redux/actions/ClergyAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import { ToastContainer } from 'react-toastify';
import MetaData from '../../../components/MetaData';
import './Clergies.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const ClergyTable = () => {
  const { allClergies, error, loading } = useSelector((state) => state.Clergies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllClergies());
  }, [dispatch]);

  return (
    <div>
      <MetaData title="Clergies" />
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          <ToastContainer />
          <TableContainer sx={{ maxHeight: '1500px' }} component={Paper}>
            <Table stickyHeader aria-label='clergy table'>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Interests</TableCell>
                  <TableCell align='center'>Profile pic</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allClergies.map((row) => (
                  <TableRow
                    key={row.userID}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{row.userID}</TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell>{new Date(row.dateOfBirth).toLocaleDateString()}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.interests}</TableCell>
                    <TableCell align='center'>
                      <img src={row.imageUrl} height={'30px'} width={'30px'} alt="Profile" loading="lazy" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Link to="/dashboard">
            <Button variant="contained" color="primary">Dashboard</Button>
          </Link>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default ClergyTable;
