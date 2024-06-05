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
import { GetAllAnnouncements } from '../../../redux/actions/AnnouncementsAction';
import LoaderComponent from '../../../components/Loader/LoaderComponent';
import './AllAnnouncementsTable.css'

export const AllAnnouncementsTable = () => {
  const { allAnnouncements, error, loading } = useSelector((state) => state.Announcements);
  const dispatch = useDispatch();

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

  return (
    <div>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default AllAnnouncementsTable;