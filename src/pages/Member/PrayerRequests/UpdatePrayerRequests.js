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
import { UpdatePrayerRequetsDetails } from '../../../redux/actions/UpdatePrayerRequestsAction';
import { DeletePrayerRequests } from '../../../redux/actions/DeletePrayerRequestsAction';
import { toast } from 'react-toastify';

const PrayerRequestInfoForm = ({ prayerRequestID, prayerRequests, onClose }) => {
  const [open, setOpen] = useState(true);
  const [selectedPrayerRequest, setSelectedPrayerRequest] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requestDate, setRequestDate] = useState('');
  const [requestedBy, setRequestBy] = useState('');
  const [timeCreated, setTimeCreated] = useState('');
  const dispatch = useDispatch();

  const user = localStorage.getItem('UserID');

  useEffect(() => {
    const prayerRequestToUpdate = prayerRequests.find(pr => pr.prayerRequestID === prayerRequestID);

    if (prayerRequestID && prayerRequestToUpdate) {
      setSelectedPrayerRequest(prayerRequestToUpdate);
      setTitle(prayerRequestToUpdate.title);
      setDescription(prayerRequestToUpdate.description);
      setRequestDate(prayerRequestToUpdate.requestDate.split('T')[0]);
    }
  }, [prayerRequestID, prayerRequests]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSave = async () => {
    if (!selectedPrayerRequest) {
      console.error('No prayer request selected');
      return;
    }

    const id = prayerRequestID;
    const myForm = {
      prayerRequestID: id,
      title,
      description,
      requestDate: new Date(requestDate).toISOString(),
      requestedBy: user,
      timeCreated: selectedPrayerRequest.timeCreated
    };

    try {
      await dispatch(UpdatePrayerRequetsDetails({ myForm, id })); 
      toast.success('Prayer request updated successfully');
    } catch (error) {
      toast.error('Error updating prayer request details');
      console.error('Error updating prayer request details:', error);
    }

    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  };

  const handleDelete = async () => {
    try {
      if (!selectedPrayerRequest) {
        throw new Error('No prayer request selected');
      }
      const id = prayerRequestID;
      const myForm = {
        prayerRequestID: id,
        title,
        description,
        requestDate: new Date(requestDate).toISOString(),
        requestedBy,
        timeCreated,
      };

      try {
        await dispatch(DeletePrayerRequests({ myForm, id }));
        toast.success('Prayer request deleted successfully');
        handleClose();

        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } catch (error) {
        toast.error('Error deleting prayer request');
        console.error('Error deleting prayer request:', error);
      }
    } catch (error) {
      console.error('Error deleting request:', error);
    }
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Prayer Request</DialogTitle>
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
          label="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Request Date"
          type="date"
          value={requestDate}
          onChange={(e) => setRequestDate(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} color="secondary">Delete</Button> 
        <Button onClick={handleClose} color="primary">Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrayerRequestInfoForm;
