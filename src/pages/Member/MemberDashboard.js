import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillBellFill } from 'react-icons/bs';
import './MemberDashboard.css';
import MetaData from '../../components/MetaData';

function MemberDashboard() {
  
  const membersCount = 15; 
  const eventsCount = 3; 

  const prayerRequestsCount = 22; 

  return (
    <main className='main-container'>
      <div className='main-title'>
        <MetaData title="Member Dashboard" />
        <h3>MEMBER DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>UPCOMING EVENTS</h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
          <h1>{membersCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>SERMONS</h3>
            <BsFillArchiveFill className='card_icon'/>
          </div>
          <h1>{eventsCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRAYER REQUESTS</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
          <h1>{prayerRequestsCount}</h1>
        </div>
      </div>
    </main>
  );
}

export default MemberDashboard;
