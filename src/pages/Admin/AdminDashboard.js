import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../../redux/actions/LoginAction';
import { GetAllAdmins } from '../../redux/actions/AdminsAction';
import { GetAllClergies } from '../../redux/actions/ClergyAction';
import { GetAllMembers } from '../../redux/actions/MembersAction';
import { Button } from '@mui/material';
import MetaData from '../../components/MetaData';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { allMembers } = useSelector((state) => state.Members);
  const { allClergies } = useSelector((state) => state.Clergies);
  const { allAdmins } = useSelector((state) => state.Admins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllMembers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllClergies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllAdmins());
  }, [dispatch]);
 

  const getMembersCount = () => {
    return allMembers ? allMembers.filter(user => user.type === '0').length : 0;
  };

  const getClergiesCount = () => {
    return allClergies ? allClergies.filter(user => user.type === '1').length : 0;
  };

  const getAdminsCount = () => {
    return allAdmins ? allAdmins.filter(user => user.type === '2').length : 0;
  };

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
      </div>
    </main>
  );
}

export default AdminDashboard;
