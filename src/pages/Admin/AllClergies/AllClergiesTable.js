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
import { GetAllClergies } from '../../../redux/actions/ClergyActions';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import { ToastContainer } from 'react-toastify';
import MetaData from '../../../components/MetaData';
import './Clergies.css';

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
                  <TableCell>Clergy ID</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone NO</TableCell>
                  <TableCell>Church</TableCell>
                  <TableCell align='center'>Profile pic</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allClergies.map((row) => (
                  <TableRow
                    key={row.clergyID}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{row.clergyID}</TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.church}</TableCell>
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

export default ClergyTable;
