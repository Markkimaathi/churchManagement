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
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllPrayerRequests } from '../../../redux/actions/PrayerRequestsAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import PrayerRequestForm from './PrayerRequestForm';
import UpdatePrayerRequests from './UpdatePrayerRequests'
import './PrayerRequestsForm.css';
import MetaData from '../../../components/MetaData';
import { Link } from 'react-router-dom';

export const AllRequestsTable = () => {
  const { allPrayerRequests, error, loading } = useSelector((state) => state.PrayerRequests);
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null); 

  useEffect(() => {
    dispatch(GetAllPrayerRequests());
  }, [dispatch]);

  const formatDate = (dateString) => {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);
    if (isNaN(date)) {
      return '';
    }
    return date.toISOString().split('T')[0];
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[1].split('.')[0];
  };

  const handleAddRequestClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleUpdateRequest = (requestId) => {
    setSelectedRequestId(requestId); 
  };

  return (
    <div>
      <MetaData title="Prayer Requests" />
      <Button variant="contained" color="primary" onClick={handleAddRequestClick}>
        {isFormOpen ? 'Close Prayer Request Form' : 'Add Prayer Request'}
      </Button>
      {isFormOpen && <PrayerRequestForm onSubmitSuccess={() => setIsFormOpen(false)} />}
      {selectedRequestId && (
        <UpdatePrayerRequests
          prayerRequestID={selectedRequestId}
          prayerRequests={allPrayerRequests}
          onClose={() => setSelectedRequestId(null)} 
        />
      )}
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
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allPrayerRequests.map((row) => (
                <TableRow
                  key={row.prayerRequestID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.prayerRequestID}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{formatDate(row.requestDate)}</TableCell>
                  <TableCell>{row.requestedBy}</TableCell>
                  <TableCell>{formatTime(row.timeCreated)}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleUpdateRequest(row.prayerRequestID)}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Link to="/dashboard">
            <Button variant="contained" color="primary">Dashboard</Button>
          </Link>
        </TableContainer>
      )}
    </div>
  );
};

export default AllRequestsTable;
