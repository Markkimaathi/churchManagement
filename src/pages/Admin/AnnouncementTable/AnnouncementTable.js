// AllAnnouncementsTable.js

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
import { GetAllAnnouncements, AddAnnouncement } from '../../../redux/actions/AnnouncementsAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import AnnouncementInfoTable from './AnnouncementInfoTable'
import AddAnnouncementTable from './AddAnnouncementTable';
import './AnnouncementTable.css';

export const AllAnnouncementsTable = () => {
  const { allAnnouncements, error, loading } = useSelector((state) => state.Announcements);
  const dispatch = useDispatch();
  const [selectedAnnouncementId, setSelectedAnnouncementId] = useState(null);
  const [showAddAnnouncement, setShowAddAnnouncement] = useState(false);

  useEffect(() => {
    dispatch(GetAllAnnouncements());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[1].split('.')[0];
  };

  const handleUpdate = (id) => {
    setSelectedAnnouncementId(id);
  };

  const handleCloseDialog = () => {
    setSelectedAnnouncementId(null);
  };

  const handleAddAnnouncement = () => {
    setShowAddAnnouncement(true);
  };

  const handleAddNewAnnouncement = (newAnnouncementData) => {
    dispatch(AddAnnouncement(newAnnouncementData));
    setShowAddAnnouncement(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleAddAnnouncement}>
        Add Announcement
      </Button>
      {showAddAnnouncement && (
        <AddAnnouncementTable onSubmit={handleAddNewAnnouncement} />
      )}
      {loading ? (
        <LoaderComponent />
      ) : (
        <TableContainer sx={{ maxHeight: '1500px' }} component={Paper}>
          <Table stickyHeader aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Announcement ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Created By</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Time Created</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allAnnouncements.map((row) => (
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
      {selectedAnnouncementId && (
        <AnnouncementInfoTable
          announcementId={selectedAnnouncementId}
          announcements={allAnnouncements}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  );
};

export default AllAnnouncementsTable;
