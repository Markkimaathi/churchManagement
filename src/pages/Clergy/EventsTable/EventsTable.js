import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllEvents } from '../../../redux/actions/EventsAction';
import { AddEvents } from '../../../redux/actions/AddEventsAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import EventsInfoTable from './EventsInfoTable';
import AddEventsTable from './AddEventsTable';
import './EventsTable.css';

export const AllEventsTable = () => {
  const { allEvents, error, loading } = useSelector((state) => state.Events);
  const dispatch = useDispatch();
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [showAddEvent, setShowAddEvent] = useState(false);

  useEffect(() => {
    dispatch(GetAllEvents());
  }, [dispatch]);

  const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isValidDate(date)) {
      return date.toISOString().split('T')[0];
    } else {
      return 'Invalid Date';
    }
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    if (isValidDate(date)) {
      return date.toISOString().split('T')[1].split('.')[0];
    } else {
      return 'Invalid Time';
    }
  };

  const handleUpdate = (id) => {
    setSelectedEventId(id);
  };

  const handleCloseDialog = () => {
    setSelectedEventId(null);
  };

  const handleAddEvent = () => {
    setShowAddEvent(true);
  };

  const handleAddNewEvent = (newEventData) => {
    dispatch(AddEvents(newEventData));
    setShowAddEvent(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleAddEvent}>
        Add Event
      </Button>
      {showAddEvent && <AddEventsTable onSubmit={handleAddNewEvent} />}
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
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allEvents.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{formatDate(row.date)}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.createdBy}</TableCell>
                  <TableCell>{formatTime(row.timeCreated)}</TableCell>
                  <TableCell>{row.modifiedBy}</TableCell>
                  <TableCell>{formatTime(row.timeModified)}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(row.id)}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {selectedEventId && (
        <EventsInfoTable
          eventId={selectedEventId}
          events={allEvents}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default AllEventsTable;
