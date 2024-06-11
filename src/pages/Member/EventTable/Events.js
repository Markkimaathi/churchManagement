import React, { useState, useEffect } from 'react';
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
import { GetAllEvents } from '../../../redux/actions/EventsAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import './Events.css';
import MetaData from '../../../components/MetaData';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const AllEventsTable = () => {
  const { allEvents, error, loading } = useSelector((state) => state.Events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllEvents());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid Date' : date.toISOString().split('T')[0];
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Invalid Time' : date.toISOString().split('T')[1].split('.')[0];
  };

  return (
    <div>
      <MetaData title="Events" />
      {loading ? (
        <LoaderComponent />
      ) : (
        <TableContainer sx={{ maxHeight: '1500px' }} component={Paper}>
          <Table stickyHeader aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Event ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Event Date</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Created By</TableCell>
                <TableCell>Time Created</TableCell>
                <TableCell>Modified By</TableCell>
                <TableCell>Time Modified</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allEvents.map((row) => (
                <TableRow
                  key={row.eventID} 
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.eventID}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{formatDate(row.eventDate)}</TableCell> 
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.createdBy}</TableCell>
                  <TableCell>{formatTime(row.timeCreated)}</TableCell>
                  <TableCell>{row.modifiedBy}</TableCell>
                  <TableCell>{formatTime(row.timeModified)}</TableCell>
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

export default AllEventsTable;
