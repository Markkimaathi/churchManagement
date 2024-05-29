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
import { GetAllPrayerRequests } from '../../../redux/actions/PrayerRequestsAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import './PrayerTable.css';

export const PrayerTable = () => {
  const { allPrayerRequests, error, loading } = useSelector((state) => state.PrayerRequests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPrayerRequests());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[1].split('.')[0];
  };

    return (
        <div>
          {loading ? (
            <LoaderComponent />
          ) : (
            <TableContainer sx={{ maxHeight: '1500px' }} component={Paper}>
              <Table stickyHeader aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>PrayerRequestID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>RequestDate</TableCell>
                    <TableCell>RequestedBy</TableCell>
                    <TableCell>TimeCreated</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allPrayerRequests.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{formatDate(row.date)}</TableCell>
                      <TableCell>{row.createdBy}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{formatTime(row.timeCreated)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      );
    };
    
    export default PrayerTable;
