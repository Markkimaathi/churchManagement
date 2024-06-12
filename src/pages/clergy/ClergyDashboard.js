import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import './ClergyDashboard.css';
import MetaData from '../../components/MetaData';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { GetAllPrayerRequests } from '../../redux/actions/PrayerRequestsAction';
import { GetAllEvents } from '../../redux/actions/EventsAction';

const ClergyDashboard = () => {
  const dispatch = useDispatch();

  const { allPrayerRequests } = useSelector((state) => state.PrayerRequests);
  const { allEvents } = useSelector((state) => state.Events);

  useEffect(() => {
    dispatch(GetAllPrayerRequests());
    dispatch(GetAllEvents());
  }, [dispatch]);

  const getPrayerRequestsCount = () => {
    return allPrayerRequests ? allPrayerRequests.length : 0;
  };

  const getEventsCount = () => {
    return allEvents ? allEvents.length : 0;
  };

  return (
    <main className='main-container'>
      <MetaData title="Clergy Dashboard" />
      <div className='main-title'>
        <h3>CLERGY DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Prayer Requests</h3>
            <BsFillArchiveFill className='card_icon'/>
          </div>
          <h1>{getPrayerRequestsCount()}</h1>
          <Link to="/PrayerTable">
            <Button variant="contained" color="primary">Requests</Button>
          </Link>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>FORM</h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
          <Link to="/announcements">
            <Button variant="contained" color="primary">Form</Button>
          </Link>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>EVENTS</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
          <h1>{getEventsCount()}</h1>
          <Link to="/all-events">
            <Button variant="contained" color="primary">Events</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ClergyDashboard;
