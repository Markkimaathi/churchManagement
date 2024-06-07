import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { UpdateEventsDetails } from '../../../redux/actions/UpdateEventsAction'; 
import { DeleteEvents } from '../../../redux/actions/DeleteEventsAction.js';
import { toast } from 'react-toastify';

const EventInfoTable = ({ eventId, events, onClose }) => {
  const [open, setOpen] = useState(true); 
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [title, setTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [timeCreated, setTimeCreated] = useState('');
  const [timeModified, setTimeModified] = useState('');
  const dispatch = useDispatch();

  const user = localStorage.getItem('EventID')

  useEffect(() => {
    const eventToUpdate = events.find(event => event.eventID === eventId);

    if (eventId && eventToUpdate) {
      setSelectedEvent(eventToUpdate);
      setTitle(eventToUpdate.title);
      setEventDate(eventToUpdate.eventDate.split('T')[0]);
      setDescription(eventToUpdate.description);
      setLocation(eventToUpdate.location);
      setTimeCreated(eventToUpdate.timeCreated);
      setTimeModified(eventToUpdate.timeModified);
    }
  }, [eventId, events]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSave = async () => {
    try {
      if (!selectedEvent) {
        throw new Error('No event selected');
      }
      const id = eventId;
      const myForm = {
        eventID: id,
        title,
        description,
        eventDate: new Date(eventDate).toISOString(),
        location,
        createdBy: user,
        timeCreated,
        modifiedBy: user,
        timeModified: new Date().toISOString()
      };

      try {
        await dispatch(UpdateEventsDetails({ myForm, id })); 
        toast.success('Event updated successfully');
      } catch (error) {
        toast.error('Error updating event details');
      }

      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.error('Error updating event details:', error);
    }
  };

  const handleDelete = async () => {
    try {
      if (!selectedEvent) {
        throw new Error('No event selected');
      }
      const id = eventId;

      try {
        await dispatch(DeleteEvents({ id }));
        toast.success('Event deleted successfully');
        handleClose();

        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } catch (error) {
        toast.error('Error deleting event');
        console.error('Error deleting event:', error);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Event</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Event Date"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} color="secondary">
          Delete
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventInfoTable;
