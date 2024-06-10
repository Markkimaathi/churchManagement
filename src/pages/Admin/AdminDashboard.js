import React, { useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import './AdminDashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../../redux/actions/LoginAction';
import { Button } from '@mui/material';
import MetaData from '../../components/MetaData';

const AdminDashboard = () => { 

  const { allUsers, error, loading } = useSelector((state) => state.Users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);

  const handlefetchdetails = () => {
    dispatch(GetAllUsers());
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <MetaData title="Admin Dashboard" />
        <h3>ADMIN DASHBOARD</h3>
        <Button onClick={handlefetchdetails}>Get Details</Button>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>MEMBERS</h3>
            <BsFillArchiveFill className='card_icon'/>
          </div>
          <h1>320</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CLERGY </h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
          <h1>15</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>SERMONS</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
          <h1>0</h1> 
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRAYER REQUESTS</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
          <h1>22</h1>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;
