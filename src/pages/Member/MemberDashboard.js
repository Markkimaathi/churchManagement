import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill,BsFillBellFill } from 'react-icons/bs';
import './MemberDashboard.css';

function MemberDashboard() {
  
  const membersCount = 15; 
  const eventsCount = 3; 

  const prayerRequestsCount = 22; 
  const recentSermons = [
    { title: 'The Power of Prayer', preacher: 'Rev. John Jason' },
    { title: 'Faith in Times of Trouble', preacher: 'Rev. Sam Smith' },
    { title: 'Love Your Neighbor', preacher: 'Rev. Mark Kimathi' }
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
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

      <div className='additional-info'>
        <div className='info-section'>
          <h2>Recent Sermons</h2>
          <ul>
            {recentSermons.map((sermon, index) => (
              <li key={index}>
                <strong>{sermon.title}</strong> - {sermon.preacher}
              </li>
            ))}
          </ul>
        </div>  
      </div>
    </main>
  );
}

export default MemberDashboard;
