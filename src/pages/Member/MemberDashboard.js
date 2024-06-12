import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill } from 'react-icons/bs';
import './MemberDashboard.css';
import MetaData from '../../components/MetaData';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { GetAllAnnouncements } from '../../redux/actions/AnnouncementsAction';
import { GetAllEvents } from '../../redux/actions/EventsAction';
import { GetAllPrayerRequests } from '../../redux/actions/PrayerRequestsAction';

const MemberDashboard = () => {
  const dispatch = useDispatch();

  const { allAnnouncements } = useSelector((state) => state.Announcements);
  const { allEvents } = useSelector((state) => state.Events);
  const { allPrayerRequests } = useSelector((state) => state.PrayerRequests);

  useEffect(() => {
    dispatch(GetAllAnnouncements());
    dispatch(GetAllEvents());
    dispatch(GetAllPrayerRequests());
  }, [dispatch]);

  const getAnnouncementsCount = () => {
    return allAnnouncements ? allAnnouncements.length : 0;
  };

  const getEventsCount = () => {
    return allEvents ? allEvents.length : 0;
  };

  const getPrayerRequestsCount = () => {
    return allPrayerRequests ? allPrayerRequests.length : 0;
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <MetaData title="Member Dashboard" />
        <h3>MEMBER DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>EVENTS</h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
          <h1>{getEventsCount()}</h1>
          <Link to="/events">
            <Button variant="contained" color="primary">Events</Button>
          </Link>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ANNOUNCEMENTS</h3>
            <BsFillArchiveFill className='card_icon'/>
          </div>
          <h1>{getAnnouncementsCount()}</h1>
          <Link to="/Member-table">
            <Button variant="contained" color="primary">Announcements</Button>
          </Link>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRAYER REQUESTS</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
          <h1>{getPrayerRequestsCount()}</h1>
          <Link to="/PrayerTable">
            <Button variant="contained" color="primary">Prayer Requests</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default MemberDashboard;
