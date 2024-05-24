import React, { useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import './AdminDashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../../redux/actions/LoginAction';
import { Button } from '@mui/material';



const AdminDashboard = () => { 

  const { allUsers,error, loading } = useSelector((state) => state.Users);
  const dispatch = useDispatch();


  console.log(allUsers)


  useEffect(() => {
    dispatch(GetAllUsers())
    }, [dispatch]);

  const handlefetchdetails = () => {
    dispatch(GetAllUsers())
  }

  const sermons = [
    { title: 'The Power of Prayer', preacher: 'Rev. John Mark' },
    { title: 'Faith in Times of Trouble', preacher: 'Rev. Sam Smith' },
    { title: 'Love Your Neighbor', preacher: 'Rev. Mark Kimathi' }
  ];

  const upcomingEvents = [
    { title: 'Community Picnic', date: 'June 15, 2024' },
    { title: 'Bible Study Session', date: 'June 20, 2024' },
    { title: 'Youth Camp', date: 'July 5-7, 2024' }
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
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
          <h1>{sermons.length}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRAYER REQUESTS</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
          <h1>22</h1>
        </div>
      </div>

      <div className='additional-info'>
        <div className='info-section'>
          <h2>Recent Sermons</h2>
          <ul>
            {sermons.map((sermon, index) => (
              <li key={index}>
                <strong>{sermon.title}</strong> - {sermon.preacher}
              </li>
            ))}
          </ul>
        </div>
        <div className='info-section'>
          <h2>Upcoming Events</h2>
          <ul>
            {upcomingEvents.map((event, index) => (
              <li key={index}>
                <strong>{event.title}</strong> - {event.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;
