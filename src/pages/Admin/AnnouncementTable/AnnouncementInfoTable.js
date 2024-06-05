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
import { UpdateAnnouncementDetails } from '../../../redux/actions/UpdateAnnouncementAction'; 
import { toast } from 'react-toastify';

const AnnouncementInfoTable = ({ announcementId, announcements, onClose }) => {
  const [open, setOpen] = useState(true); 
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const announcementToUpdate = announcements.find(announcement => announcement.id === announcementId);

    if (announcementId && announcementToUpdate) {
      setSelectedAnnouncement(announcementToUpdate);
      setTitle(announcementToUpdate.title);
      setDate(announcementToUpdate.date.split('T')[0]);
      setCreatedBy(announcementToUpdate.createdBy);
      setDescription(announcementToUpdate.description);
    }
  }, [announcementId, announcements]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleSave = async () => {
    try {
      if (!selectedAnnouncement) {
        throw new Error('No announcement selected');
      }

      const id = selectedAnnouncement.id;
      const myForm = {
        title,
        date,
        createdBy, 
        description
      };

      await dispatch(UpdateAnnouncementDetails(myForm, id));
      toast.success('Announcement updated successfully');
      handleClose();

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.error('Error updating announcement details:', error);
      toast.error('Error updating announcement details');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Announcement</DialogTitle>
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
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Created By"
          type="text"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
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

export default AnnouncementInfoTable;
