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
import { toast } from 'react-toastify';

const PrayerRequestInfoForm = ({ prayerRequestID, prayerRequests, onClose }) => {
  const [open, setOpen] = useState(true); 
  const [selectedPrayerRequest, setSelectedPrayerRequest] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requestDate, setRequestDate] = useState('');
  const dispatch = useDispatch();

  const user = localStorage.getItem('UserID');

  useEffect(() => {
    const prayerRequestToUpdate = prayerRequests.find(prayerRequest => prayerRequest.prayerRequestID === prayerRequestID);

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
        requestedBy: user,
        timeCreated: selectedPrayerRequest.timeCreated
      };

      try {
        await dispatch(UpdatePrayerRequetsDetails({ myForm, id })); 
        toast.success('Prayer request updated successfully');
      } catch (error) {
        toast.error('Error updating prayer request details');
      }

      handleClose();
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.error('Error updating prayer request details:', error);
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

export default PrayerRequestInfoForm;
