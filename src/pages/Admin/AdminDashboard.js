import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../../redux/actions/LoginAction';
import { GetAllAdmins } from '../../redux/actions/AdminsAction';
import { GetAllClergies } from '../../redux/actions/ClergyAction';
import { GetAllMembers } from '../../redux/actions/MembersAction';
import { GetAllEvents } from '../../redux/actions/EventsAction';
import { GetAllAnnouncements } from '../../redux/actions/AnnouncementsAction';
import { Button } from '@mui/material';
import MetaData from '../../components/MetaData';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import { FaBell } from "react-icons/fa";

const AdminDashboard = () => {
  const { allUsers } = useSelector((state) => state.Users);
  const { allMembers } = useSelector((state) => state.Members);
  const { allClergies } = useSelector((state) => state.Clergies);
  const { allAdmins } = useSelector((state) => state.Admins);
  const { allEvents } = useSelector((state) => state.Events);
  const { allAnnouncements} = useSelector((state) => state.Announcements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllUsers());
    dispatch(GetAllMembers());
    dispatch(GetAllClergies());
    dispatch(GetAllAdmins());
    dispatch(GetAllEvents());
    dispatch(GetAllAnnouncements());
  }, [dispatch]);

  const getMembersCount = () => allMembers ? allMembers.length : 0;
  const getClergiesCount = () => allClergies ? allClergies.length : 0;
  const getAdminsCount = () => allAdmins ? allAdmins.length : 0;
  const getUsersCount = () => allUsers ? allUsers.length : 0;
  const getEventsCount = () => allEvents ? allEvents.length : 0;
  const getAnnouncementsCount = () =>allAnnouncements ? allAnnouncements.length : 0;

  return (
    <main className='main-container'>
      <div className='main-title'>
        <MetaData title="Admin Dashboard" />
        <h3>ADMIN DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>MEMBERS</h3>
            <BsFillArchiveFill className='card_icon'/>
          </div>
          <h1>{getMembersCount()}</h1>
          <Link to="/all-members">
            <Button variant="contained" color="primary">Members</Button>
          </Link>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CLERGIES</h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
          <h1>{getClergiesCount()}</h1>
          <Link to="/all-clergies">
            <Button variant="contained" color="primary">Clergies</Button>
          </Link>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ADMINS</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
          <h1>{getAdminsCount()}</h1>
          <Link to="/all-admins">
            <Button variant="contained" color="primary">Admins</Button>
          </Link>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>USERS</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
          <h1>{getUsersCount()}</h1>
          <Link to="/all-users">
            <Button variant="contained" color="primary">Users</Button>
          </Link>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Events</h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
          <h1>{getEventsCount()}</h1>
          <Link to="/events">
            <Button variant="contained" color="primary">Events</Button>
          </Link>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Announcements</h3>
            <FaBell className='card_icon'/>
          </div>
          <h1>{getAnnouncementsCount()}</h1>
          <Link to="/all-announcements">
            <Button variant="contained" color="primary">Announcements</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;
